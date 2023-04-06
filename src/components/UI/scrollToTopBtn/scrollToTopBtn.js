import "./scrollToTopBtn.scss";

const ScrollToTopBtn = (props) => {
	return (
		<a
			className={`scroll_top_btn ${props.isScrolled && "scrolled"}`}
			href="https://drive.google.com/file/d/1EFOSIL7Se26slovhEeqezFwvn1c8LaQN/view?usp=share_link"
			target="_blank"
			rel="noopener noreferrer"
		>
			我的履歷
		</a>
	);
};
export default ScrollToTopBtn;
