import "./hero.css";
import Header from "./Header";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Hero() {
	const transition = { type: "spring", duration: 2 };
	const mobile = window.innerWidth <= 768 ? true : false;

	return (
		<div className="hero" id="home">
			<div className="blur hero-blur"></div>
			<div className="left-h">
				<Header />

				{/* The Best Ad */}
				<div className="the-best-ad">
					<motion.div initial={{ left: mobile ? "175px" : "238px" }} whileInView={{ left: "8px" }} transition={{ ...transition, type: "tween" }}></motion.div>
					<span>the best fitness club in the town</span>
				</div>

				{/* Hero Text */}
				<div className="hero-text">
					<div>
						<span className="stroke-text">Shape </span>
						<span>Your</span>
					</div>
					<div>
						<span>Ideal Body</span>
					</div>
					<div>
						<span>In here we will help you to shape and build your ideal body and life up your life to fullest</span>
					</div>
				</div>

				{/* Figures */}
				<div className="figures">
					<div>
						<span>
							<NumberCounter end={140} start={100} delay="4" preFix="+" />
						</span>
						<span>expert coachs</span>
					</div>
					<div>
						<span>
							<NumberCounter end={978} start={800} delay="4" preFix="+" />
						</span>
						<span>members joined</span>
					</div>
					<div>
						<span>
							<NumberCounter end={50} start={0} delay="4" preFix="+" />
						</span>
						<span>fitness programs</span>
					</div>
				</div>

				{/* Hero Buttons */}
				<div className="hero-buttons">
					<Link to="plans" spy={true} smooth={true}>
						<button className="btn btn-started">Get Started</button>
					</Link>
					<Link to="programs" spy={true} smooth={true}>
						<button className="btn btn-more">Learn More</button>
					</Link>
				</div>
			</div>

			{/* Right Header */}
			<div className="right-h">
				<Link to="plans" spy={true} smooth={true}>
					<button className="btn btn-right-h">Join Now</button>
				</Link>

				<motion.div initial={{ right: "-1rem" }} whileInView={{ right: "4rem" }} transition={transition} className="heart-rate">
					<img src="assets/heart.png" alt="" />
					<span>Heart Rate</span>
					<span>116 bpm</span>
				</motion.div>

				<img src="assets/hero_image.png" alt="" className="hero-image" />
				<motion.img
					initial={{ right: "11rem" }}
					whileInView={{ right: "20rem" }}
					transition={transition}
					src="assets/hero_image_back.png"
					alt=""
					className="hero-image-back"
				/>
				<motion.div initial={{ right: "37rem" }} whileInView={{ right: "28rem" }} transition={transition} className="calories">
					<img src="assets/calories.png" alt="" />
					<div>
						<span>Calories Burned</span>
						<span>220 kcal</span>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
