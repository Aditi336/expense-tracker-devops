"use server";
import { db } from "../../../../config/db";
import { redirect } from "next/navigation";
export const contactAction = async (prevState, formData) => {
    try {
        const fullname = formData.get("fullname");
        const emailID = formData.get("emailID");
        const msgContent = formData.get("msgContent");

        await db.execute(
            "insert into contact_form (name,email,message) values (?,?,?)",
            [fullname, emailID, msgContent]
        );

        // return { success: true, message: "Data updated successfully" };
        redirect("/")
    } catch (err) {
        if(err.message==="NEXT_REDIRECT"){throw err;}
        console.error(err);
        return { success: false, message: "Data not updated" };
    }
};