import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/play14_white_bg_transparent.svg";

const NavBar = () => {
  return (
    <div id="navbar" className="navbar-area">
      <div className="tarn-nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link href="/">
              <a className="navbar-brand">
                <Image src={logo} alt="logo" height={250} />
              </a>
            </Link>
            <button
              className="navbar-toggler navbar-toggler-right collapsed"
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/events">
                    <a className="nav-link">Events</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/players">
                    <a className="nav-link">Players</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/games">
                    <a className="nav-link">Games</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/articles">
                    <a className="nav-link">Articles</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link">
                      About
                      <i className="bx bx-chevron-down"></i>
                    </a>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/about">
                        <a className="nav-link">About</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about/story">
                        <a className="nav-link">Our story</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about/values">
                        <a className="nav-link">Our values</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about/format">
                        <a className="nav-link">Our format</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* <div className="others-option d-flex align-items-center">
                <div className="option-item">
                  <form className="search-box">
                    <input
                      type="text"
                      className="input-search"
                      placeholder="Search for anything"
                    />
                    <button type="submit">
                      <i className="flaticon-loupe"></i>
                    </button>
                  </form>
                </div>
                <div className="option-item">
                  <a className="default-btn" href="/contact">
                    <i className="flaticon-right"></i> Get Started <span></span>
                  </a>
                </div>
              </div> */}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
