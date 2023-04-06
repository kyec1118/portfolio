import "./projectSection.scss";
import { ReactComponent as Dots } from "../../../assets/dots.svg";
import ProjectItem from "../../UI/projectItem/projectItem";
import projectImg from "../../../assets/Portfolio.jpg";
import Spinner from "../../../assets/spinner.png";
import MLL from "../../../assets/MeetLangLang.png";
import furbo from "../../../assets/furbo.jpg";
import toyGreen from "../../../assets/toyGreen.png";
import toyRed from "../../../assets/toyRed.png";
import toyBlue from "../../../assets/toyBlue.png";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProjectSection = () => {
	const { scroll } = useLocomotiveScroll();
	const spinner = document.getElementById("spinner");
	const title = document.getElementById("project_section_title");
	const width = window.screen.width;
	useEffect(() => {
		if (scroll && spinner) {
			scroll.on("scroll", (instance) => {
				if (title.classList.contains("is-inview")) {
					spinner.style.transform = "rotate(" + instance.scroll.y / 3 + "deg)";
				}
			});
		}
	}, [scroll, spinner]);

	return width > 600 ? (
		<section className="project" id="Projects" data-scroll-section>
			<Dots className="project_dots" />
			<div id="project_title_wrapper" className="project_title_wrapper">
				<div
					className="project_section_title"
					id="project_section_title"
					data-scroll
					data-scroll-sticky
					data-scroll-target="#project_title_wrapper"
				>
					Projects.
					<img
						src={Spinner}
						alt="spinner"
						className="project_spinner"
						id="spinner"
						data-scroll
					/>
				</div>

				<div className="project_items">
					<ProjectItem
						name="portfolio"
						img={projectImg}
						toy={toyGreen}
						width="30vw"
						height="auto"
						title="我的個人網站"
						link="https://kyec1118.github.io/portfolio/"
						text={[
							"用 Adobe XD 進行 UI Design，並以 React 開發。\n 利用 Locomotive Scroll, gsap 等套件嘗試達成流暢的瀏覽體驗，其中也有使用 Adobe After Effect、Adobe Illustrator 製圖以及動畫。\n 還在繼續更新中☺️",
						]}
					/>
					<ProjectItem
						name="mll"
						img={MLL}
						toy={toyRed}
						width="30vw"
						height="auto"
						title="遇見浪浪"
						text={[
							"碩一時與同學們進行的專案，一個認領養平台，提供橋樑讓愛心認養人們找到屬於自己的浪浪。 \n 利用 React、Node.js、SQL、Docker進行開發， 功能包含Facebook SSO、雙語模式、Google Maps串接、討論區、寵物抽卡功能等等！",
						]}
					/>
				</div>
			</div>

			<ProjectItem
				name="furbo"
				img={furbo}
				toy={toyBlue}
				width="40vw"
				height="auto"
				title="Furbo 官網"
				link="https://furbo.com/jp"
				text={[
					"於 Tomofun 實習時協助公司網頁開發，\n 其中串接 Prismic (CMS平台) 方便 Marketing Team 修改網頁資訊。",
				]}
			/>
		</section>
	) : (
		<section className="project" id="Projects" data-scroll-section>
			<Dots className="project_dots" />
			<div
				className="project_section_title"
				id="project_section_title"
				data-scroll
			>
				Projects.
			</div>
			<Carousel
				showStatus={false}
				width="100%"
				infiniteLoop={true}
				autoPlay={true}
				showThumbs={false}
			>
				<ProjectItem
					name="portfolio"
					img={projectImg}
					toy={toyGreen}
					width="30vw"
					height="auto"
					title="我的個人網站"
					link="https://kyec1118.github.io/portfolio/"
					text={[
						"用 Adobe XD 進行 UI Design，並以 React 開發。 利用 Locomotive Scroll, gsap 等套件嘗試達成流暢的瀏覽體驗，其中也有使用 Adobe After Effect、Adobe Illustrator 製圖以及動畫。還在繼續更新中☺️",
					]}
				/>
				<ProjectItem
					name="mll"
					img={MLL}
					toy={toyRed}
					width="30vw"
					height="auto"
					title="遇見浪浪"
					text={[
						"碩一時與同學們進行的專案，一個認領養平台，提供橋樑讓愛心認養人們找到屬於自己的浪浪。 利用 React、Node.js、SQL、Docker進行開發， 功能包含Facebook SSO、雙語模式、Google Maps串接、討論區、寵物抽卡功能等等！",
					]}
				/>
				<ProjectItem
					name="furbo"
					img={furbo}
					toy={toyBlue}
					width="40vw"
					height="auto"
					title="Furbo 官網"
					link="https://furbo.com/jp"
					text={[
						"於 Tomofun 實習時協助公司網頁開發，其中串接 Prismic (CMS平台) 方便 Marketing Team 修改網頁資訊。",
					]}
				/>
			</Carousel>
		</section>
	);
};

export default ProjectSection;
