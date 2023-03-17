import "./contactSection.scss";
import EmailIcon from "../../../assets/Email 3.png";
import ContactInfo from "../../UI/contactInfo/contactInfo";
import { ReactComponent as ContactBg } from "../../../assets/contactBg.svg";
const ContactSection = () => {
	return (
		<div className="contact" id="Contact" data-scroll-section>
			<ContactBg className="contact_bg" />
			<div className="contact_list">
				<ContactInfo icon={EmailIcon} info="dalec1118@gmail.com" />
				<ContactInfo icon={EmailIcon} info="124356789" />
			</div>
		</div>
	);
};

export default ContactSection;
