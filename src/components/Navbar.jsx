import React from 'react';
import { Link } from 'react-scroll'
import jQuery from 'jquery';
import 'bootstrap';

import { colors } from '../styles/index';
import { logo } from '../assets/index';
import { Image } from '../components/index';

const linkSet = {
    spy: true,
    smooth: true,
    offset: -10,
    duration: 700,
    activeClass: 'active',
};

const Navbar = (props) => {
    const { t } = props;

    return (
        <div id="navbar">
            <nav
                className="navbar navbar-expand-md fixed-top navbar-dark"
                style={{ backgroundColor: colors.navbar, padding: 0 }}
            >
                    <div className="container navbarContainer">
                        <Link
                            className="navbar-brand cursor-pointer"
                            {...linkSet}
                            to="header"
                            onSetActive={() => jQuery('#logo').removeClass('navbarLogoWhite')}
                            onSetInactive={() => jQuery('#logo').addClass('navbarLogoWhite')}
                        >
                            <Image
                            id="logo"
                            src={logo}
                            className="align-self-center navbarLogo"
                            style={{ height: '40pt', width: 'auto' }}
                            onClick={() => jQuery('.navbar-collapse').collapse('hide')}
                            />
                        </Link>
                        <button
                            className="navbar-toggler m-2"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                                <li className="nav-item">
                                    <Link
                                    className="nav-link"
                                    to="products"
                                    {...linkSet}
                                    onClick={() => jQuery('.navbar-collapse').collapse('hide')}
                                    >
                                    {'Jogadores'}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                    className="nav-link"
                                    to="products"
                                    {...linkSet}
                                    onClick={() => jQuery('.navbar-collapse').collapse('hide')}
                                    >
                                    {'Estatísticas'}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                    className="nav-link"
                                    to="products"
                                    {...linkSet}
                                    onClick={() => jQuery('.navbar-collapse').collapse('hide')}
                                    >
                                    {'Time'}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                    className="nav-link"
                                    to="products"
                                    {...linkSet}
                                    onClick={() => jQuery('.navbar-collapse').collapse('hide')}
                                    >
                                    {'Comparar'}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;