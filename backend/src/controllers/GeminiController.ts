import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { Request, Response } from "express";
import catchAsyncError from "../middleware/catchAsyncError";
const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyDW1zOprWHxZXQSWgeuSgNkaQAnAUPpBt8";

export const Runner = catchAsyncError(async (req: Request, res: Response) => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,

      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ];

  const careerName = "DevOps Engineer";

  const parts = [
    {
      text: `I want the information for the following points only and not any additional info in brief paragraphs only and not in points`,
    },
    {
      text: `give response in json format`,
    },
    { text: `Introduction to ${careerName}: ` },
    { text: `Skills Required for ${careerName}: ` },
    { text: `Market trends and future scope for ${careerName}: ` },
    { text: `Salaries and compensation regarding ${careerName}: ` },
  ];

  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
    safetySettings,
  });

  const responseText = result.response.text();

  const rawJsonData = responseText.replace(/^`json\s+|\s+`$/g, "");
  const parsedData = JSON.parse(JSON.stringify(rawJsonData));

  res.json({
    success: true,
    message: parsedData,
  });
});
