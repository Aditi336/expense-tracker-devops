"use client";
import { useActionState } from "react";
import { contactAction } from "./contact.action";
import styles from "../contact_css.module.css";
const initialState = { success: false, message: "" };

const ContactForm = () => {
    const [state, formAction, isPending] = useActionState(contactAction, initialState);

    return (
        <div>
            <h2>Contact page</h2>
            <form action={formAction}>
                <div>
                    <label htmlFor="fullname">Name</label>
                    <input id="fullname" type="text" name="fullname" required placeholder="enter you name" />
                </div>
                <div>
                    <label htmlFor="emailID">Email</label>
                    <input id="emailID" type="email" name="emailID" required placeholder="@gmail.com" />
                </div>
                <div>
                    <label htmlFor="msgContent">Message</label>
                    <input id="msgContent" type="text" name="msgContent" required placeholder="" />
                </div>
                <div>
                    <button disabled={isPending}>{isPending ? "Sending..." : "Send query"}</button>
                </div>
                <section>
                    {
                        state && (
                            <p className={state.success?styles.text_green:styles.text_red}>{state.message}</p>
                        )
                    }
                </section>
            </form>
        </div>
    );
};

export default ContactForm;