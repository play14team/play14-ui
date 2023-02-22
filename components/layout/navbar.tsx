import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo/play14_white_bg_transparent.svg";
import SearchBox from "./searchbox";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId && elementId.classList.add("is-sticky");
      } else {
        elementId && elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <React.Fragment>
      <div id="navbar" className="navbar-area">
        <div className="tarn-nav">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link
                href="/"
                onClick={() => setCollapsed(true)}
                className="navbar-brand"
              >
                <Image src={logo} alt="logo" height={53} />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/events" className="nav-link">
                      Events <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/events"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Events
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/events/calendar"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Calendar
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/events/map"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Map
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/events/organizing"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Organizing an event
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/players" className="nav-link">
                      Players
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/games" className="nav-link">
                      Games
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/articles" className="nav-link">
                      Articles
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      About <i className="bx bx-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/about/story"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Our story
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/about/values"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Our values
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/about/format"
                          onClick={() => setCollapsed(true)}
                          className="nav-link"
                        >
                          Our format
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>

                <SearchBox />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
