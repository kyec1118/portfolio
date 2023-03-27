import "./welcomeSection.scss";
import { ReactComponent as BlueBlob } from "../../../assets/BlueBlob.svg";
import { ReactComponent as DeskBg } from "../../../assets/deskbg.svg";
import { ReactComponent as DeskFt } from "../../../assets/deskfront.svg";
import { ReactComponent as Dots } from "../../../assets/dots.svg";
import portrait from "../../../assets/girl_svg.gif";

const WelcomeSection = () => {
	return (
		<section className="welcome" data-scroll-section>
			<BlueBlob className="blueblob" />
			<DeskBg className="deskbg" />
			<DeskFt className="deskft" />
			<div className="welcome_text_section">
				<Dots className="dots" />
				<h1
					className="welcome_text_hello"
					data-scroll
					data-scroll-direction="horizontal"
					data-scroll-speed="3"
					data-scroll-position="top"
				>
					Hello! I'm Dale.
				</h1>
				<p
					className="welcome_text_intro"
					data-scroll
					data-scroll-direction="horizontal"
					data-scroll-speed="2"
					data-scroll-position="top"
				>
					嗨！我是古宜，歡迎來到我的網頁 :)
					<br />
					我的過去經驗包含前後端開發、軟硬體測試、專案管理，也喜歡學習新技術 :)
					<br />
					若能透過這個頁面更認識我就太好了！
				</p>
			</div>
			<div
				className="welcome_image"
				data-scroll
				data-scroll-direction="horizontal"
				data-scroll-speed="-1"
				data-scroll-position="top"
			>
				<img
					src={portrait}
					alt="portrait"
					data-scroll
					data-scroll-direction="horizontal"
					data-scroll-speed="-3"
					data-scroll-position="top"
				/>
			</div>
		</section>
	);
};

export default WelcomeSection;
