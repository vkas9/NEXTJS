import { NextRequest, NextResponse } from "next/server";


export const POST=async(req:NextRequest):Promise<NextResponse>=>{
    try {
        const{name,email,password,about,profileURL}=await req.json();
        
        return NextResponse.json({
            name,email,password,about,profileURL
        },{status:201})
    } catch (error:any) {
        console.log(error);
        return NextResponse.json({
            status:false,
            message:"something went wrong while creating user",
            error:error.message

        },{status:500})
    }
}