import React, { useRef, useState } from "react";

import Logo from "../../assets/images2/logo.png";
import LogoName from "../../assets/images2/SPITZCHAIN.png";

const Header = (props) => {
  const {
    handleShow,
    scrollPosition,
    servicesRef,
    aboutRef,
    pricingRef,
    newsLetterRef,
  } = props;

  const headerRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHeaderItemClicked = (ref) => {
    setIsMenuOpen(false);
    if (ref && ref.current) {
      ref.current.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`header-area header-sticky wow slideInDown ${
        headerRef &&
        headerRef.current &&
        headerRef.current.clientHeight &&
        scrollPosition &&
        headerRef.current.clientHeight < scrollPosition
          ? "background-header"
          : ""
      }`}
      // background-header
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* <!-- ***** Logo Start ***** --> */}
              <a href="index.html" className="logo">
                <img src={Logo} alt="Chain App Dev" />
                
              </a>
              {/* <a href="index.html" className="logo">
                <img src={LogoName} alt="Chain App Dev" />
                
              </a> */}

              {/* <!-- ***** Logo End ***** -->
          <!-- ***** Menu Start ***** --> */}
              <ul className={`nav ${isMenuOpen ? "active" : ""}`}>
                <li className="scroll-to-section">
                  <a
                    onClick={() => handleHeaderItemClicked()}
                    className="active"
                  >
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a onClick={() => handleHeaderItemClicked(servicesRef)}>
                    Communities
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a onClick={() => handleHeaderItemClicked(aboutRef)}>About</a>
                </li>
                <li className="scroll-to-section">
                  <a onClick={() => handleHeaderItemClicked(pricingRef)}>
                    Bridge
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a onClick={() => handleHeaderItemClicked(newsLetterRef)}>
                    Whitepaper
                  </a>
                </li>
                <li>
                  <div className="gradient-button">
                    <a id="modal_trigger" onClick={() => handleShow()}>
                      OPEN DAPP
                    </a>
                  </div>
                </li>
              </ul>
              <a
                className={`menu-trigger ${isMenuOpen ? "active" : ""}`}
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span>F.A.Q</span>
              </a>
              {/* <!-- ***** Menu End ***** --> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
