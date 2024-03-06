import React from "react";
import {Link} from "react-router-dom";
import styles from "./NavBar.module.css";

const NavigationBar = () => {
	return (
			<>
            <nav>
                <div className={styles['nav-bar']}>
                    <div className={styles['li']}>
                    <Link to="/home">Home</Link>
                    </div>
                    <div className={styles['li']}>
                    <Link to="/about">About</Link>
                    </div>
                    <div className={styles['li']}>
                    <Link to="/contact">Contact</Link>    
                    </div>
                </div>
			</nav>
            </>
	);
};

export default NavigationBar;
