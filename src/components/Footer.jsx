import "./footer.css";
import { Link } from "react-scroll";

export default function Footer() {
	return (
		<div className="Footer-container">
			<hr />
			<div className="footer">
				<div className="social-links">
					<img src="assets/github.png" alt="" />
					<img src="assets/instagram.png" alt="" />
					<img src="assets/linkedin.png" alt="" />
				</div>
				<div className="logo-f">
					<Link to="home" spy={true} smooth={true}>
						<img src="assets/logo.png" alt="" />
					</Link>
				</div>
			</div>

			<div className="blur footer-blur-1"></div>
			<div className="blur footer-blur-2"></div>
		</div>
	);
}
