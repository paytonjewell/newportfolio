import React, {useState} from 'react';
import Style from './BaseLayout.module.scss'
import classNames from 'classnames';
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";

export default function BaseLayout() {
    let [darkMode, setDarkMode] = useState(false);
    const [main, setMain] = useState("home");

    function handleClick() {
        setDarkMode(!darkMode);
    }

    return (
        <div className={classNames(Style.container, darkMode ? Style.dark : Style.light)}>
            <Navbar darkMode={darkMode} handleClick={handleClick} changeMain={setMain}/>
            {main === "home" && <Home/>}
            {main === "about" && <About/>}
            {main === "portfolio" && <Portfolio/>}
            <footer>
                <p>Made with &hearts; by Payton Jewell</p>
                <p>&copy; 2021</p>
            </footer>
        </div>
    )
}

