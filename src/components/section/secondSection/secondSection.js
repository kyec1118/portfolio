import "./secondSection.scss";
import { ReactComponent as Desk } from "../../../assets/desk.svg";
import { ReactComponent as Dots } from "../../../assets/dotsWhite.svg";
import Map from "../../../components/map/map.js";
import profile from "../../../assets/images/profile.jpg";

const SecondSection = () => {
	return (
		<section className="about" id="About" data-scroll-section>
			<Desk className="desk" />
			<div className="about_title">
				<Dots className="dots_white" />
				<h1
					className="about_title_text"
					data-scroll
					data-scroll-direction="horizontal"
					data-scroll-speed="-2"
				>
					About Me.
				</h1>
			</div>
			<div className="about_content">
				<div className="about_education">
					<img
						src={profile}
						className="profile"
						alt="profile"
						data-scroll
						data-scroll-direction="horizontal"
						data-scroll-speed="-3"
					/>
					<div className="about_education_textbox">
						<h2
							className="about_education_title"
							data-scroll
							data-scroll-speed="3"
						>
							學歷
						</h2>
						<ul className="about_education_text">
							<p className="about_education_master" data-scroll>
								台灣大學資訊管理研究所
							</p>
							<p className="about_education_bachelor">中央大學資訊管理系</p>
						</ul>
					</div>
				</div>
				<div className="about_journey">
					<span className="about_journey_wrap" data-scroll>
						<span data-scroll data-scroll-delay="0.40" data-scroll-speed="2">
							經
						</span>
						<span data-scroll data-scroll-delay="0.1" data-scroll-speed="2">
							歷
						</span>
					</span>
					<Map />
				</div>
			</div>
		</section>
	);
};

export default SecondSection;
