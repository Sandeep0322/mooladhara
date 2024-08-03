import { Response, Router } from "express";
import { createUsers, updateUsers, getUsers } from "../controllers/User";
import { CustomRequest, auth } from "../../middleware/auth";
import asyncMiddleware from "../../middleware/async";
import preCallingForChat from "../controllers/Chat";

const router = Router();

router.post("/create", asyncMiddleware((req: CustomRequest, res: Response) => createUsers(req, res)));
router.put("/update", auth, asyncMiddleware((req: CustomRequest, res: Response) => updateUsers(req, res)));
router.get("/user", auth, asyncMiddleware((req: CustomRequest, res: Response) => getUsers(req, res)));
router.get('/astro', async (req, res) => {
    try {
        // const payload = {
        //     "0": {
        //         "year": 2002,
        //         "month": 6,
        //         "date": 19,
        //         "hours": 15,
        //         "minutes": 59,
        //         "seconds": 0,
        //         "latitude": 13.05,
        //         "longitude": 80.17,
        //         "timezone": 5.5,
        //         "config": {
        //             "observation_point": "topocentric",
        //             "ayanamsha": "lahiri"
        //         }
        //     },
        //     "1": "how will my wife look like?"
        // };
        const chunkTest = await preCallingForChat(req);
        res.json({ response: chunkTest });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});


export default router;
