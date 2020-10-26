import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";

const Logo = ({ className, ...props }) => {
	const classes = classNames("brand", className);

	return (
		<div {...props} className={classes}>
			<h1 className="logo">
				<Link to="/">
					<Image
						src={require("./../../../assets/images/logo2.png")}
						alt="Open"
						width={220}
						height={220}
					/>
				</Link>
			</h1>
		</div>
	);
};

export default Logo;
