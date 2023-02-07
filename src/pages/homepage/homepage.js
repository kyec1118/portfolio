import "./homepage.scss";
import WelcomeSection from "../../components/section/welcomeSection/welcomeSection";
import SecondSection from "../../components/section/secondSection/secondSection";
import ContactSection from "../../components/section/contactSection/contactSection";
const Homepage = () => {
	return (
		<div className="homepage">
			<WelcomeSection />
			<SecondSection />
			<ContactSection />
		</div>
	);
};
export default Homepage;
