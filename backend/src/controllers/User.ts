import { Response } from "express";
import Users from "../models/Users";
import firebaseAdmin from "firebase-admin";
import { CustomRequest } from "../../middleware/auth";
import axios from "axios";
import { astroOutput } from "../../utils/astro-output";

// Create Users
export const createUsers = async (req: CustomRequest, res: Response) => {
  const { name, email, profilePicture, authToken } = req.body;

  try {
    // Verify Firebase ID Token
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(authToken);
    const uid = decodedToken.uid;

    // Check if user already exists
    let user = await Users.findOne({ email });
    if (!user) {
      user = new Users({ name, email, profilePicture, authTokens: [uid] });
      await user.save();
    } else {
      // Add authToken to existing user's authTokens if not already present
      if (!user.authTokens.includes(uid)) {
        user.authTokens.push(uid);
        await user.save();
      }
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Update Users
export const updateUsers = async (req: CustomRequest, res: Response) => {
  const { gender, dateOfBirth, timeOfBirth, birthPlace } = req.body;
  const user = Users.hydrate(req.user);

  try {
    if (!user) {
      return res.status(404).json({ message: "Users not found" });
    }

    user.gender = gender;
    user.dateOfBirth = new Date(dateOfBirth);
    user.timeOfBirth = timeOfBirth;
    user.birthPlace = birthPlace;

    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get Users Details
export const getUsers = async (req: CustomRequest, res: Response) => {
  const user = req.user;
  try {
    const data = await axios.post(
      "https://rajendransp133-vedastro.hf.space/predict2/",
      {
        data: {
          year: 2000,
          month: 3,
          date: 22,
          hours: 15,
          minutes: 59,
          seconds: 0,
          latitude: 13.05,
          longitude: 80.17,
          timezone: 5.5,
        },
      }
    );
    let responseArray = JSON.parse(data.data.response.replace(/'/g, '"'));
    const astroData: any = [];
    responseArray.map((obj: any) => {
      const data = astroOutput.filter((out) => out.attribute === obj);
      astroData.push(data[0]);
    });
    res.status(200).json({ user, data: astroData });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
