import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import FiveStars from "../elements/FiveStar";

const propTypes = {
	...SectionTilesProps.types
};

const defaultProps = {
	...SectionTilesProps.defaults
};

const Testimonial = ({
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
		title: "Customer testimonials"
		// paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={tilesClasses}>
						<div
							className="tiles-item reveal-from-right"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<p className="text-sm mb-0">
									Super easy to set up and able to set to a certain collection. I set up a collection called 18+ with automatic tag qualifier, added the tag to the products i needed restricted and BAM all done. Customisable text is a sweet feature too. Only thing i'd change would be an opaque screen behind the pop-up so you can't see the product until you confirm :)
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<FiveStars/>
									<span className="testimonial-item-name text-color-high">
										Burubado
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">Product Specifc Age Verifier</a>
									</span>
								</div>
							</div>
						</div>

						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<p className="text-sm mb-0">
										App works well, does exactly what I need it to do. Customer support was also very responsive and helpful when I need some assistance. Would recommend.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<FiveStars/>
									<span className="testimonial-item-name text-color-high">
										Style N Sport
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">Ultimate Product Warning</a>
									</span>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-left"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="testimonial-item-content">
									<p className="text-sm mb-0">
										Took just a few steps to setup, less than 5 minutes. It works just as described and meets my needs to restrict SOME but not all products to my legal requirements. My non-restricted products work just as normal. I didn't need to reach out to their support since they have step by step instructions in the app itself.
									</p>
								</div>
								<div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
									<FiveStars/>
									<span className="testimonial-item-name text-color-high">
										DMG, LLC
									</span>
									<span className="text-color-low"> / </span>
									<span className="testimonial-item-link">
										<a href="#0">Product Specific Age Verifier</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
