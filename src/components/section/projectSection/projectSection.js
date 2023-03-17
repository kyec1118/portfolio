import "./projectSection.scss";
import { ReactComponent as Dots } from "../../../assets/dots.svg";
import ProjectItem from "../../UI/projectItem/projectItem";
import projectImg from "../../../assets/Portfolio.jpg";
import MLL from "../../../assets/MeetLangLang.png";
const ProjectSection = () => {
	return (
		<section className="project" id="Projects" data-scroll-section>
			<Dots className="project_dots" />
			<div
				className="project_section_title"
				data-scroll
				data-scroll-direction="horizontal"
				data-scroll-speed=""
			>
				Projects.
			</div>
			<div className="project_items">
				<ProjectItem
					img={projectImg}
					width="30vw"
					height="auto"
					title="Dale 個人網站"
					text="利用 Adobe XD 進行 UI Design，並以 React.js開發。利用 Locomotive Scroll、
GSAP 等 Scrolling 套件嘗試達成流暢的瀏覽體驗。其中利用Adobe After Effect、Adobe Illustrator 製圖以及動畫。"
				/>

				<ProjectItem
					img={MLL}
					width="30vw"
					height="auto"
					title="遇見浪浪"
					text="碩一時與同學們進行的專案，一個認領養網頁平台！
							提供橋樑讓愛心認養人們找到屬於自己的浪浪 :) 利用
							React、Node.js、SQL、Docker進行開發， 功能包含Facebook
							SSO、雙語模式、Google
							Maps串接、討論區、寵物抽卡功能等，有興趣的話可以到這裡看實體網頁唷！"
					reverse={true}
				/>
			</div>
		</section>
	);
};

export default ProjectSection;
