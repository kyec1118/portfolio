import "./contactSection.scss";
import ContactInfo from "../../UI/contactInfo/contactInfo";
import { ReactComponent as ContactTitle } from "../../../assets/contactTitle.svg";
import { ReactComponent as ContactBg } from "../../../assets/contactBg.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Email } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useEffect } from "react";
const ContactSection = () => {
	const { scroll } = useLocomotiveScroll();
	const target = document.getElementById("contact_svg");
	useEffect(() => {
		if (scroll && target) {
			scroll.on("scroll", (instance) => {
				console.log(instance);
				if (instance.limit.y - instance.scroll.y < 500) {
					target.style.transform =
						"rotate(-" + (instance.limit.y - instance.scroll.y) / 8 + "deg)";
				}
			});
		}
	}, [scroll, target]);
	return (
		<div className="contact" id="Contact" data-scroll-section>
			<ContactBg className="contact_bg" />

			<div className="contact_title_wrapper" id="contact_svg">
				<ContactTitle className="contact_svg" />
			</div>
			<div className="contact_context">
				<div className="contact_list">
					{" "}
					<ContactInfo
						img={Email}
						info="dalec1118@gmail.com"
						link="mailto: dalec1118@gmail.com"
					/>
					<ContactInfo
						img={FacebookIcon}
						info="Kuyee Chang"
						link="https://www.facebook.com/kuyee.chang"
					/>
					<ContactInfo
						img={LinkedInIcon}
						info="Kuyee Chang"
						link="https://www.facebook.com/kuyee.chang"
					/>{" "}
				</div>{" "}
				<div className="resume_download">
					<a
						href="https://drive.google.com/file/d/1OWxc3imNVCRQcbdG8JBbqT0gSXf3p98z/view?usp=share_link"
						target="_blank"
						rel="noopener noreferrer"
						className="resume_title"
					>
						[ 完整履歷 ]
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
