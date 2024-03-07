/* global jQuery */

import './Header.css'

import $ from 'jquery'; // Import jQuery
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../../imgs/logo.svg'
import { Container, Nav, Navbar, Button } from 'react-bootstrap/';

function Header(props) {
    let t = props.t;

    useEffect(() => {

import React from 'react'
import logo from '../../imgs/logo.png'
import {Container, Nav, Navbar} from 'react-bootstrap/';
import Themes from '../Themes';
import SelectLanguage from '../SelectLanguage';


        function test() {
            var tabsNewAnim = $('#navbarSupportedContent');
            var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
            var activeItemNewAnim = tabsNewAnim.find('.active');
            var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
            var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
            var itemPosNewAnimTop = activeItemNewAnim.position();
            var itemPosNewAnimLeft = activeItemNewAnim.position();
            $(".hori-selector").css({
                "top": itemPosNewAnimTop.top + "px",
                "left": itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
            $("#navbarSupportedContent").on("click", "li", function (e) {
                $('#navbarSupportedContent ul li').removeClass("active");
                $(this).addClass('active');
                var activeWidthNewAnimHeight = $(this).innerHeight();
                var activeWidthNewAnimWidth = $(this).innerWidth();
                var itemPosNewAnimTop = $(this).position();
                var itemPosNewAnimLeft = $(this).position();
                $(".hori-selector").css({
                    "top": itemPosNewAnimTop.top + "px",
                    "left": itemPosNewAnimLeft.left + "px",
                    "height": activeWidthNewAnimHeight + "px",
                    "width": activeWidthNewAnimWidth + "px"
                });
            });
        }
        $(document).ready(function () {
            setTimeout(function () { test(); });
        });
        $(window).on('resize', function () {
            setTimeout(function () { test(); }, 500);
        });
        $(".navbar-toggler").click(function () {
            $(".navbar-collapse").slideToggle(300);
            setTimeout(function () { test(); });
        });


        jQuery(document).ready(function ($) {
            var path = window.location.pathname.split("/").pop();
            if (path == '') {
                path = 'index.html';
            }
            var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
            target.parent().addClass('active');
        });
    }, []);

    return (
        <nav className="navbar navbar-expand-custom navbar-mainbg">
            <a className="navbar-brand navbar-logo" href="/"></a>
            <a className="navbar-brand navbar-logo" href="/">
            <img src={logo} alt="Logo" />
        </a>
            <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                    <li className="nav-item active">
                        <Link to="/" className="nav-link"><i className=""></i>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Data-Dashboard" className="nav-link"><i className=""></i>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Stem-With-Us" className="nav-link"><i className=""></i>STEM With Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Sponsors" className="nav-link"><i className=""></i>Become a Sponsor</Link>
                    </li>
                </ul>
            </div>
        </nav>
    ) 
  return(
    <div>
      <Navbar className='titulo' data-bs-theme="dark" expand="lg">
        <Container className="header">
          <Navbar.Brand href="/"><img src={logo} width={75} alt='logo' />{' '}Apolo 27</Navbar.Brand>

          <div className='links'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href='/About-Us'>{t('ABOUT-THE-TEAM')}</Nav.Link>
                <Nav.Link href="/Data-Dashboard">{t('DATA-DASHBOARD')}</Nav.Link>
                <Nav.Link href="/Stem-With-Us">{t('STEM-WITH-US')}</Nav.Link>
                <Nav.Link href="/Sponsors">{t('BECOME-A-SPONSOR')}</Nav.Link>
                {
                  window.screen.width >= 1280 ? <Nav.Link href="/Simulation">{t('GAMES')}</Nav.Link> : <></>
                }
              </Nav>
            <Themes />
            <SelectLanguage />
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;