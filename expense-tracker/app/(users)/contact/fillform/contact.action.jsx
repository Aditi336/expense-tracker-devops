"use server";
import { db } from "../../../../config/db";
export const contactAction = async (previousState,formData) => {
    try {
        const { fullname, emailID, msgContent } = Object.fromEntries(formData);

        await db.execute(
            `
       insert into contact_form (name,email,message) values (?,?,?)`,
            [fullname, emailID, msgContent]

        )
        return {success:true, message:"data updated successfully"}
    } catch (err) {
        console.log(err);
        return {success:false, message:"data not updated  "}

    }
}