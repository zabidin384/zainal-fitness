import "./header.css";
import { Link } from "react-scroll";
import { useState } from "react";

export default function Header() {
	const mobile = window.innerWidth <= 768 ? true : false;
	const [menuOpened, setMenuOpened] = useState(false);

	return (
		<div className="header">
			<img src="assets/logo.png" alt="" className="logo" />

			{menuOpened === false && mobile === true ? (
				<div style={{ backgroundColor: "var(--appColor", padding: "0.5rem", borderRadius: "5px" }} onClick={() => setMenuOpened(true)}>
					<img src="assets/bars.png" alt="" style={{ width: "2rem", height: "1.5rem" }} />
				</div>
			) : (
				<ul className="header-menu">
					<li>
						<Link to="home" spy={true} smooth={true} activeClass="active" onClick={() => setMenuOpened(false)}>
							Home
						</Link>
					</li>
					<li>
						<Link to="programs" spy={true} smooth={true} onClick={() => setMenuOpened(false)}>
							Programs
						</Link>
					</li>
					<li onClick={() => setMenuOpened(false)}>
						<Link to="reasons" spy={true} smooth={true} onClick={() => setMenuOpened(false)}>
							Why us
						</Link>
					</li>
					<li onClick={() => setMenuOpened(false)}>
						<Link to="plans" spy={true} smooth={true} onClick={() => setMenuOpened(false)}>
							Plans
						</Link>
					</li>
					<li>
						<Link to="Testimonials" spy={true} smooth={true} onClick={() => setMenuOpened(false)}>
							Testimonials
						</Link>
					</li>
				</ul>
			)}
		</div>
	);
}
