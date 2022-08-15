import "./join.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Join() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_l9puqio", "template_76d6mji", form.current, "CQOJV-8RDw_fRcbCI").then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};

	return (
		<div className="Join" id="join-us">
			<div className="left-j">
				<hr />
				<div>
					<span className="stroke-text">READY TO </span>
					<span>LEVEL UP</span>
				</div>
				<br />
				<div>
					<span>YOUR BODY </span>
					<span className="stroke-text">WITH US?</span>
				</div>
			</div>
			<div className="right-j">
				<form ref={form} className="email-container" onSubmit={sendEmail}>
					<input type="email" name="user_email" placeholder="Enter your Email address" />
					<button className="btn btn-j">Join Now</button>
				</form>
			</div>
		</div>
	);
}
