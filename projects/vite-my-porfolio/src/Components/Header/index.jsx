import React from "react";
import style from "./style.module.css"; 

const Header = () => {
    
    return (
        <div className={style.header_content}>
            <div className={style.header_logo}>Logo</div>
            <div className={style.header_navegation}>
                <nav className={style.header_navegation_nav}>
                    
                </nav>
            </div>
        </div>
    ); 
}

export default Header; 