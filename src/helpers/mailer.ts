import nodemailer from "nodemailer";


export const sendMail=async({email,emailType,userId}:{
    email:string,
    emailType:string,userId:string
}):Promise<void>=>{

    try {
        const transporter=nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:465,
            secure:true,
            auth:{
                user:undefined,
                pass:undefined
            }
        })
    } catch (error) {
        
    }


}