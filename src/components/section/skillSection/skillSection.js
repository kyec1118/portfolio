import "./skillSection.scss";
import SkillItem from "../../UI/skillItem/skillItem.js";
import { ReactComponent as Bg } from "../../../assets/skillSectionbg.svg";
const SkillSection = () => {
	return (
		<section className="skill" id="Experience" data-scroll-section>
			<h1
				className="skill_section_title"
				data-scroll
				data-scroll-direction="vertical"
				data-scroll-speed="-3"
			>
				Experience.
			</h1>
			<div
				className="skill_bg"
				data-scroll
				data-scroll-direction="vertical"
				data-scroll-speed="-2"
			>
				<Bg />
			</div>

			<div
				className="skill_items"
				data-scroll
				data-scroll-direction="vertical"
				data-scroll-speed="1"
			>
				<SkillItem
					title="程式實作"
					list={[
						"Web Development",
						"Git Version Control",
						"Python Data Analysis",
						"GCP AWS 雲端應用",
					]}
				/>

				<SkillItem
					title="語言能力"
					list={[
						"托福 TOEFL 109",
						"多益 TOEIC 940",
						"以交換計畫赴歐洲生活半年",
					]}
				/>
				<SkillItem
					title="軟硬體測試"
					list={[
						"自動化測試",
						"Unit / Integration / E2E Testing",
						"網站 / 手機應用 / 硬體機台",
					]}
				/>
				<SkillItem
					title="影像編輯"
					list={[
						"Adobe Illustrator",
						"Adobe Premium",
						"Adobe After Effect",
						"Adobe XD",
					]}
				/>
			</div>
		</section>
	);
};

export default SkillSection;
