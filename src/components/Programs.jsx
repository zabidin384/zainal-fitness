import "./programs.css";
import { Link } from "react-scroll";
import { programsData } from "../data/programsData";

export default function Programs() {
	return (
		<div className="Programs" id="programs">
			{/* Header */}
			<div className="programs-header">
				<span className="stroke-text">Explore our</span>
				<span>Programs</span>
				<span className="stroke-text">to shape you</span>
			</div>
			<div className="programs-categories">
				{programsData.map((program, i) => (
					<Link to="plans" spy={true} smooth={true} key={i}>
						<div className="category">
							{program.image}
							<span>{program.heading}</span>
							<span>{program.details}</span>
							<div className="join-now">
								<span>Join Now</span>
								<img src="assets/rightArrow.png" alt="" />
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
