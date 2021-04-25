/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "../styles/Header.css";

import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            <div className="header__search">
                <input className="header__searchInput"
                    type="text"
                />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOn">
                        Hello guest
                    </span>
                    <span className="header__optionLineOn">
                        Sign In
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOn">
                        Return
                    </span>
                    <span className="header__optionLineOn">
                        Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOn">
                        Your
                    </span>
                    <span className="header__optionLineOn">
                        Prime
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;
