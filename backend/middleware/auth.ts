import { Request, Response, NextFunction } from "express";
import firebaseAdmin from "firebase-admin";
import Users, { UsersDocument } from "../src/models/Users";

export interface CustomRequest extends Request {
  user: UsersDocument;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.headers.authorization?.split(" ")[1];

  if (!authToken) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(authToken);
    const uid = decodedToken.uid;

    const user = await Users.findOne({ authTokens: { $in: uid } });
    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }

    const customReq = req as CustomRequest;
    customReq.user = user
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid token", error });
  }
};
