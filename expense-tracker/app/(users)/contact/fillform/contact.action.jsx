"use server";
import {db} from "../../../../config/db";
export const contactAction=async(formData)=>{
    const {fullname,emailID,msgContent}=Object.fromEntries(formData);

    await db.execute(
       `
       insert into contact_form (name,email,message) values (?,?,?)`,
       [fullname,emailID,msgContent]
       
    )
}