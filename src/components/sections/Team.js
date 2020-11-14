import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
	...SectionTilesProps.types
};

const defaultProps = {
	...SectionTilesProps.defaults
};

const Team = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {
	const outerClasses = classNames(
		"testimonial section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"testimonial-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

	const sectionHeader = {
		title: "Meet the Team"
		// paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={tilesClasses}>

						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
                                <p style={{marginBottom: -10, textAlign: "center", color: "#1CB68B"}}>Co-Founder</p>
								<div className="testimonial-item-content">
								<Image
									src={require("./../../assets/images/TeamPics/Usman.png")}
									alt="Features split 01"
									width={528}
									height={396}
								/>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider" style={{textAlign: "center"}}>
									<span className="testimonial-item-name text-color-high">
										Usman Siddiqui
									</span>
									{/* <span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">Co-Founder</a>
									</span> */}
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
                                <p style={{marginBottom: -10, textAlign: "center", color: "#1CB68B"}}>Co-Founder</p>
								<div className="testimonial-item-content">
								<Image
									src={require("./../../assets/images/TeamPics/Farooq.png")}
									alt="Features split 01"
									width={528}
									height={396}
								/>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider" style={{textAlign: "center"}}>
									<span className="testimonial-item-name text-color-high">
										Ahmer Muhammad Farooq
									</span>
									{/* <span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">Co-Founder</a>
									</span> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;
