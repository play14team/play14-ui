import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/play14_white_bg_transparent.svg";

const NavBar = () => {
  return (
    <div id="navbar" className="navbar-area">
      <div className="tarn-nav">
        <div className="container-fluid">
          {/* <Link href="/" className="navbar-brand">
            <Image
              src={logo}
              alt="logo"
              // height={250}
              style={{
                // maxWidth: "100%",
                height: "100px",
              }}
            />
          </Link> */}
          <nav className="navbar navbar-expand-lg navbar-light">
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
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/events" className="nav-link">
                    Events
                  </Link>
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
                  <Link href="/about" className="nav-link">
                    About<i className="bx bx-chevron-down"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/about" className="nav-link">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about/story" className="nav-link">
                        Our story
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about/values" className="nav-link">
                        Our values
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about/format" className="nav-link">
                        Our format
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
