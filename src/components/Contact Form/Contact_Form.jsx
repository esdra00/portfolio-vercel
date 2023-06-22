import emailjs from "@emailjs/browser";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

import style from "./contactFormStyle.module.scss";

export default function ContactForm() {
	return (
		<Formik
			initialValues={{
				from_name: "", // user name
				to_name: import.meta.env.USER_ID,
				subject: "Message from Portfolio Form", // subject of email
				reply_to: "", // user email
				message: "", // message of email
			}}
			validationSchema={Yup.object({
				from_name: Yup.string().required("Required"),
				reply_to: Yup.string()
					.email("Invalid email address")
					.required("Required"),
				message: Yup.string()
					.max(120, "Must be 120 characters or less")
					.required("Required"),
			})}
			onSubmit={(values) => {
				// console.log("values", values);
				emailjs
					.send(
						import.meta.env.SERVICE_ID,
						import.meta.env.TEMPLATE_ID,
						values,
						import.meta.env.USER_ID
					)
					.then(
						function (response) {
							console.log("Succes!", response.status, response.text);
						},
						function (error) {
							console.log("Failed...", error);
						}
					);
			}}
		>
			<Form className={style.form}>
				<label htmlFor="from_name"  className={style.name}>
					<Field type="text" name="from_name" placeholder="My name is: " />
					<ErrorMessage name="from_name" />
				</label>
				<label htmlFor="reply_to" className={style.mail}>
					<Field type="text" name="reply_to" placeholder="My email is: " />
					<ErrorMessage name="reply_to" />
				</label>
				<label htmlFor="message" className={style.message}>
					<Field
						type="text"
						as="textarea"
						name="message"
						placeholder="Your message"
						rows={5}
					/>
					<ErrorMessage name="message" />
				</label>
				<button type="submit" className={style.submit}>
					Send
				</button>
			</Form>
		</Formik>
	);
}
