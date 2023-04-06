import "./map.scss";
import { ReactComponent as Path } from "../../assets/path.svg";
import { ReactComponent as PathMobile } from "../../assets/pathMobile.svg";
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import MapPin from "../UI/mapPin/mapPin";

const Map = () => {
	const { scroll } = useLocomotiveScroll();
	const isMobile = window.screen.width <= 600 ? true : false;
	const svg = document.getElementById(isMobile ? "path_mobile" : "path");
	const circle = document.getElementById(isMobile ? "circle_mobile" : "circle");
	const target = document.getElementById("map_info");
	const journeyTitle = document.getElementById("about_journey_wrap");

	useEffect(() => {
		if (svg && scroll) {
			const length = svg.getTotalLength();
			svg.style.strokeDasharray = length;
			svg.style.strokeDashoffset = length;
			scroll.on("scroll", (instance) => {
				if (journeyTitle.classList.contains("is-inview")) {
					target.classList.add("animation");
					var scrollpercent =
						(instance.scroll.y - 200) / (isMobile ? 700 : 400);
					if (isMobile) {
						scrollpercent -= 0.6;
					}
					const draw = Math.max(length * scrollpercent, 0);
					svg.style.strokeDashoffset = Math.max(length - draw, 0);
					var endPoint = svg.getPointAtLength(draw);
					circle.setAttribute("cx", endPoint.x);
					circle.setAttribute("cy", endPoint.y);
				}
				if (instance.scroll.y < 100) {
					target.classList.remove("animation");
				}
			});
		}
	}, [scroll, svg, circle]);

	return (
		<div className="map" id="map" data-scroll data-scroll-speed="1">
			<div className="map_info" id="map_info">
				<MapPin
					year={2018}
					event={["🎓 中央大學 \n 資管系 畢業"]}
					class="ncu_grad"
				/>
				<MapPin
					year={2019}
					event={["👩🏻‍💻 Acer 宏碁 \n 培訓工程師"]}
					class="acer"
				/>
				<MapPin year={2020} event="🌸 台大資管所 入學" class="ntu" />
				<MapPin
					year={"2020-2022"}
					event={["🐕‍🦺 Tomofun \n QA / 前端實習"]}
					class="tomofun"
				/>
				<MapPin year={"2022-2023"} event="🇱🇹 赴歐洲交換" class="europe" />
				<MapPin year={2023} event="🎓 台大資管所 畢業" class="ntu_grad" />
			</div>
			<Path className="path" />
			<PathMobile className="path_mobile" />
		</div>
	);
};

export default Map;
