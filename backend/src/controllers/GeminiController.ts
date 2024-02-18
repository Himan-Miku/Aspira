import { NextFunction, Request, Response } from "express";
import catchAsyncError from "../middleware/catchAsyncError";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

export const Runner = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const prompt =
      'recommend some career paths using following keywords : "Mathematics" "Debate Club or Public Speaking" "Playing Video Games" "Problem-solving" "Solving Math Problems or Puzzles" "Mostly independently, but I can collaborate when needed" "Applying logical reasoning and critical thinking" "Enjoy a balance of both creative and analytical tasks" "Structured and organized environment with clear guidelines" "Achieving personal fulfillment and work-life balance in my career" "Technology and Innovation" "Steve Jobs (Visionary and Founder of Apple Inc.)" give me career name, its description, skills required and market trends.';

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a helpful career guidance counsellor to output JSON.",
        },
        { role: "user", content: prompt },
      ],
      model: "gpt-3.5-turbo-0125",
      response_format: { type: "json_object" },
    });
    const respo = completion.choices[0].message.content;
    console.log();
    res.status(201).json({
      success: true,
      data: JSON.parse(respo!),
    });
  }
);
