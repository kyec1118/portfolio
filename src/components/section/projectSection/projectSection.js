import "./projectSection.scss";
import { ReactComponent as Dots } from "../../../assets/dots.svg";
import ProjectItem from "../../UI/projectItem/projectItem";
import projectImg from "../../../assets/Portfolio.jpg";
import MLL from "../../../assets/MeetLangLang.png";
import furbo from "../../../assets/furbo.jpg";
const ProjectSection = () => {
	return (
		<section className="project" id="Projects" data-scroll-section>
			<Dots className="project_dots" />
			<div id="project_title_wrapper" className="project_title_wrapper">
				<div
					className="project_section_title"
					data-scroll
					data-scroll-sticky
					data-scroll-target="#project_title_wrapper"
				>
					Projects.
				</div>
				<div className="project_items">
					<ProjectItem
						name="portfolio"
						img={projectImg}
						width="30vw"
						height="auto"
						title="我的個人網站"
						text={[
							"以 Adobe XD 進行 UI Design，並以 React 開發。利用 Locomotive Scroll 套件嘗試達成流暢的瀏覽體驗。其中也有使用 Adobe After Effect、Adobe Illustrator 製圖以及動畫。",
							<br />,
							"還在繼續更新中☺️",
						]}
					/>
					<ProjectItem
						name="mll"
						img={MLL}
						width="30vw"
						height="auto"
						title="遇見浪浪"
						text={[
							"碩一時與同學們進行的專案，一個認領養平台，提供橋樑讓愛心認養人們找到屬於自己的浪浪。",
							<br />,
							"利用React、Node.js、SQL、Docker進行開發， 功能包含Facebook SSO、雙語模式、Google Maps串接、討論區、寵物抽卡功能等等！",
						]}
					/>
				</div>
			</div>

			<ProjectItem
				name="furbo"
				img={furbo}
				width="40vw"
				height="auto"
				title="Furbo 官網"
				text={["於 Tomofun 實習時參與公司網頁開發 🐕‍🦺"]}
			/>
		</section>
	);
};

export default ProjectSection;
