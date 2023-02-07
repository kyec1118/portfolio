import "./secondSection.scss";
const SecondSection = () => {
	return (
		<section className="second" data-scroll-section>
			<div
				className="second_title"
				data-scroll
				data-scroll-direction="horizontal"
				data-scroll-speed="-5"
			>
				Experience
			</div>
			{/* <div className="second_text_section">
				<h1
					data-scroll
					data-scroll-direction="horizontal"
					data-scroll-speed="9"
				>
					I Love React
				</h1>
				<h1
					data-scroll
					data-scroll-direction="vertical"
					data-scroll-speed="5" // Values provided here affect the animations
				>
					That's why I code every day
				</h1>
			</div> */}

			<div className="image"></div>
		</section>
	);
};

export default SecondSection;
