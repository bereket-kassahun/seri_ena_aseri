import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/icon-with-title.png";
import "./styles.css";

import Drawer from "../Menu/Drawertogglebutton";
import MenuOverlay from "../Menu/MenuOverlay";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOverlayOpen: false
    };
    this.overlayToggleClickHandler = this.overlayToggleClickHandler.bind(this);
  }

  overlayToggleClickHandler = () => {
    this.setState((prevState) => ({
      menuOverlayOpen: !prevState.menuOverlayOpen
    }));
  };

  overlayCloseClickHandler = () => {
    this.setState({ menuOverlayOpen: false });
  };

  render() {
    return (
      <>
        <MenuOverlay
          click={this.overlayCloseClickHandler}
          show={this.state.menuOverlayOpen}
        />

        <header className="nav">
          <nav className="navbar">
            <div>
              <a href="/" className="logo-main">
                <img src={logo} alt="Logo DevLoad" className="logo" />
              </a>
            </div>
            <div className="spacer" />
            <div className="navbar-menu">
              <ul>
                <li>
                  <Link className="btn-header" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="btn-header" to="/course">
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link className="btn-header" to="/contact">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link className="btn-blog" to="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="spacer-button" />

            <Drawer className="drawer" click={this.overlayToggleClickHandler} />
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
