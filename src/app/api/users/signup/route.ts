import UserModel from "@/app/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectDB } from "@/app/lib/mongodb";



export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
   
    await connectDB()
    const { username, email, password } = await req.json();
    console.log("username, email, password", username, email, password);
    
    const existingUser = await UserModel.findOne({ email: email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists with this email" },
        { status: 409 } // Conflict status code
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await UserModel.create({
      username,
      password: hashedPassword,
      email,
    });

    console.log("createdUser", createdUser);

    return NextResponse.json(
      { message: 'Signup successful' },
      { status: 201 } // Created status code
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
};
