import "./scrollToTopBtn.scss";

const ScrollToTopBtn = (props) => {
	return (
		<a
			className={`scroll_top_btn ${props.isScrolled && "scrolled"}`}
			href="https://drive.google.com/file/d/1U9TNXbwmp0KMhremvBqt4JJNzCMO32G9/view?usp=sharing"
			target="_blank"
			rel="noopener noreferrer"
		>
			我的履歷
		</a>
	);
};
export default ScrollToTopBtn;
