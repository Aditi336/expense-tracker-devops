"use client";
import {contactAction} from "./contact.action";
const ContactForm=()=>{
    return(
        <>
        <div>
            <h2>Contact page</h2>
            <form action={contactAction}>
                <div>
                    <label htmlFor="fullname">Name</label>
                    <input id="fullname" type="text" name="fullname" required placeholder="enter you name"></input>
                </div>
                <div>
                    <label htmlFor="emailID">Email</label>
                    <input id="emailID" type="email" name="emailID" required placeholder="@gmail.com"></input>
                </div>
                <div>
                    <label htmlFor="msgContent">Message</label>
                    <input id="msgContent" type="text" name="msgContent" required placeholder=""></input>
                </div>
                <div>
                    <button>Send query</button>
                </div>
            </form>

        </div>
        </>
    )
}
export default ContactForm;