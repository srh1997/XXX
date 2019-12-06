import React from "react";
import header from  '../style/header.module.scss'

const Header = () => {
        return (
                <div className={header.welcome}>
                    <span className={header.pic}/>
                    <span className={header.name}>苏润华</span>
                    <a href="#" className={header.a}>退出</a>
                </div>
                )
    };

export default Header;