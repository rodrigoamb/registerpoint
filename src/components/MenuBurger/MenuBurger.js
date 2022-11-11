import React from "react";

import { ContainerMenuBurger } from "./styles";

import { GiHamburgerMenu } from "react-icons/gi";
import SlideBar from "./SlideBar/SlideBar";

import { useState } from "react";

const MenuBurger = () => {
	const [menuIsVisible, setMenuIsVisible] = useState(false);

	return (
		<ContainerMenuBurger>
			{menuIsVisible && (
				<SlideBar
					menuIsVisible={menuIsVisible}
					setMenuIsVisible={setMenuIsVisible}
				/>
			)}
			<header>
				<GiHamburgerMenu
					className="iconBurger"
					onClick={() => setMenuIsVisible(true)}
				/>
			</header>
		</ContainerMenuBurger>
	);
};

export default MenuBurger;

