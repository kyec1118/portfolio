import "./contactInfo.scss";
const ContactInfo = (props) => {
	return (
		<div className="contact_info">
			<img src={props.icon} className="icon" />
			<div className="text">{props.info}</div>
		</div>
	);
};

export default ContactInfo;
