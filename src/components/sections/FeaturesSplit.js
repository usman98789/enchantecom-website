import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import FiveStars from "../elements/FiveStar";

const propTypes = {
	...SectionSplitProps.types,
};

const defaultProps = {
	...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	invertMobile,
	invertDesktop,
	alignTop,
	imageFill,
	...props
}) => {
	const outerClasses = classNames(
		"features-split section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"features-split-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const splitClasses = classNames(
		"split-wrap",
		invertMobile && "invert-mobile",
		invertDesktop && "invert-desktop",
		alignTop && "align-top"
	);

	const sectionHeader = {
		title: "Our Apps",
		// paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={splitClasses}>
					<div className="split-item">
							<div
								className="split-item-content center-content-mobile reveal-from-left"
								data-reveal-container=".split-item"
							>
								<h3 className="mt-0 mb-12">Ultimate Product Warning</h3>
								<FiveStars/>
								<p className="m-0">
									Protect yourself and your customers through the Ultimate Product Warning. 
									Inform your customers of shipping delays, hazardous products, and any other 
									necessary information to allow your customers to make an informed purchase.
								</p>
							</div>
							<div
								className={classNames(
									"split-item-image center-content-mobile reveal-from-bottom",
									imageFill && "split-item-image-fill"
								)}
								data-reveal-container=".split-item"
							>
								<Image
									src={require("./../../assets/images/upw.PNG")}
									alt="Features split 01"
									width={528}
									height={396}
								/>
							</div>
						</div>

						<div className="split-item">
							<div
								className="split-item-content center-content-mobile reveal-from-left"
								data-reveal-container=".split-item"
							>
								<h3 className="mt-0 mb-12">Product Specific Age Verifier</h3>
								<FiveStars/>
								<p className="m-0">
								You want to be compliant with local laws by prohibiting under age users but
								why should you have to restrict all your products? With our app, you can choose
								the products you want to be restricted and set any age you want (not just 18, 19, 21).
								Get compliant in less than 1 minute!
								</p>
							</div>
							<div
								className={classNames(
									"split-item-image center-content-mobile reveal-from-bottom",
									imageFill && "split-item-image-fill"
								)}
								data-reveal-container=".split-item"
							>
								<Image
									src={require("./../../assets/images/psav.PNG")}
									alt="Features split 01"
									width={528}
									height={396}
								/>
							</div>
						</div>

						<h3 style={{ textAlign: "center" }} className="mt-0 mb-12">
							More Apps Coming Soon...
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
