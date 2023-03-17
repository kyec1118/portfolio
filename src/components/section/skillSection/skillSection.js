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
						"Python Data Analysis",
						"Git Version Control",
						"GCP AWS 雲端應用",
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
				<SkillItem title="語言能力" list={["托福 TOEFL 109", "多益 940"]} />
				<SkillItem title="專案管理" list={["過往工作經驗包含多項專案"]} />
			</div>
		</section>
	);
};

export default SkillSection;
