import axios from "axios";
import dotenv from "dotenv";
import { Request } from "express";
// import { ChatOpenAI, ChatPromptTemplate, StrOutputParser } from "langchain";

dotenv.config();

const houseOriginalList = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const url = "https://json.freeastrologyapi.com/planets";
const headers = {
  Content: "application/json",
  "x-api-key": process.env.api_astro,
};

// const promptTemplate = ChatPromptTemplate.fromMessages([
//   [
//     "system",
//     `You are a Vedic astrology assistant.\n\n 
//     Just answer the query according to the specific house concerned with the query. 
//     Use planet aspects when necessary:\n {aspecting}
//     My ascendant is {ascendent}.\n\nExplain according to the house position and the position of the lord as well.`,
//   ],
//   ["human", "{query}"],
// ]);

// const llm = new ChatOpenAI({
//   model: "gpt-3.5-turbo",
//   temperature: 0.25,
//   max_tokens: 4096,
//   api_key: process.env.OPENAI_API_KEY,
// });

function findHouse(houseList: string[], ascSign: number) {
  ascSign -= 1;
  const reorderedList = [];
  for (let i = 0; i < houseList.length; i++) {
    reorderedList.push(houseList[ascSign]);
    ascSign = (ascSign + 1) % houseList.length;
  }
  return reorderedList;
}

async function preCallingForChat(req: Request) {
  const payload = req.body
  const payload0 = JSON.stringify(payload["0"]);

  const response = await axios.post(url, payload0, { headers });
  const loadedJson = response.data;

  const planetsData = loadedJson["output"][0];
  const planetsPositions: any = {};
  for (let x = 1; x <= 9; x++) {
    planetsPositions[planetsData[x.toString()]["name"]] =
      planetsData[x.toString()]["current_sign"];
  }

  const aspects: any = {};
  for (const [planet, sign] of Object.entries(planetsPositions)) {
    const house = houseOriginalList[(sign as any) - 1];
    if (!aspects[house]) {
      aspects[house] = [planet];
    } else {
      aspects[house].push(planet);
    }
  }

  const houseOrder = findHouse(
    houseOriginalList,
    parseInt(planetsData["0"]["current_sign"])
  );
  const ascendent = houseOrder[0];

  const query = payload["1"];
  // const runnable: any = promptTemplate | llm | new StrOutputParser();
  const responseChunks: any = [];
  // for await (const chunk of runnable.astream({
  //   aspecting: aspects,
  //   ascendent,
  //   query,
  // })) {
  //   responseChunks.push(chunk);
  // }

  const finalResponse = responseChunks.join("");
  return finalResponse;
}

export default preCallingForChat;
