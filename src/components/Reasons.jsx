import "./reasons.css";
import tick from "../assets/tick.png";

export default function Reasons() {
	return (
		<div className="Reasons" id="reasons">
			<div className="left-r">
				<img src="assets/image1.png" alt="" />
				<img src="assets/image2.png" alt="" />
				<img src="assets/image3.png" alt="" />
				<img src="assets/image4.png" alt="" />
			</div>
			<div className="right-r">
				<span>some reasons</span>
				<div>
					<span className="stroke-text">why</span>
					<span> choose us?</span>
				</div>
				<div className="details-r">
					<div>
						<img src={tick} alt=""></img>
						<span>OVER 140+ EXPERT COACHS</span>
					</div>
					<div>
						<img src={tick} alt="" />
						<span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
					</div>
					<div>
						<img src={tick} alt="" />
						<span>1 FREE PROGRAM FOR NEW MEMBER</span>
					</div>
					<div>
						<img src={tick} alt="" />
						<span>REALIABLE PARTNERS</span>
					</div>
				</div>
				<span style={{ color: "var(--gray)", fontWeight: "normal" }}>OUR PARTNERS</span>
				<div className="partners">
					<img src="assets/nb.png" alt="" />
					<img src="assets/adidas.png" alt="" />
					<img src="assets/nike.png" alt="" />
				</div>
			</div>
		</div>
	);
}
