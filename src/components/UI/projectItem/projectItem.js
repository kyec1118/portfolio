import "./projectItem.scss";

const ProjectItem = (props) => {
	const imgSize = {
		width: props.width,
		height: props.height,
	};
	return (
		<div className={`project_item ${props.reverse ?? "reverse"}`}>
			<div className="project_image" style={imgSize}>
				<img src={props.img} alt={props.title} data-scroll />
			</div>
			<div className="project_textbox">
				<h1 className="project_title">{props.title}</h1>
				<p className="project_text">{props.text}</p>
			</div>
		</div>
	);
};

export default ProjectItem;
