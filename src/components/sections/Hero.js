import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

const propTypes = {
	...SectionProps.types
};

const defaultProps = {
	...SectionProps.defaults
};

const Hero = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	...props
}) => {
	const [videoModalActive, setVideomodalactive] = useState(false);

	const openModal = e => {
		e.preventDefault();
		setVideomodalactive(true);
	};

	const closeModal = e => {
		e.preventDefault();
		setVideomodalactive(false);
	};

	const outerClasses = classNames(
		"hero section center-content",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"hero-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	return (
		<section {...props} className={outerClasses}>
			<div className="container-sm">
				<div className={innerClasses}>
					<div className="hero-content">
						<h2
							style={{ color: "white" }}
							className="mt-0 mb-16 reveal-from-bottom"
							data-reveal-delay="100"
						>
							{(props.header != undefined) ? props.header : "Ecommerce apps for you"}
						</h2>
						<div className="container-xs">
							<p
								className="m-0 mb-32 reveal-from-bottom"
								data-reveal-delay="400"
							>
								{(props.text != undefined) ? props.text : " \
								The best e-commerce apps designed to improve your store, enhance \
								sales and user experience"}
							</p>
							<div className="reveal-from-bottom" data-reveal-delay="600">
								<ButtonGroup>
									<Button
										tag="a"
										color="primary"
										wideMobile
										href="https://apps.shopify.com/partners/enchant-ecom"
									>
										See us on Shopify
									</Button>
								</ButtonGroup>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
