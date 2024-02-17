import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../middleware/catchAsyncError";
import User from "../model/UserModel";
import ErrorHandler from "../utils/ErrorHandler";
import sendToken from "../utils/jwtToken";
export const Login = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    let { email, password } = req?.body;

    let user = await User?.findOne({ email: email });
    if (!user) {
      return next(new ErrorHandler("No User Found", 404));
    }
    if (!user?.comparePassword(password)) {
      return next(new ErrorHandler("No such user found", 404));
    }
    sendToken(user, 200, res);
  }
);

export const SignUp = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    let user = await User?.create(req.body);
    res.status(200).json({
      success: true,
      user,
    });
  }
);
