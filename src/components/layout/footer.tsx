import footerMap from "@/styles/images/footer-map.png"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  const socialLinks = [
    {
      url: "https://www.linkedin.com/groups/7478250",
      icon: "linkedin",
    },
    {
      url: "https://twitter.com/play14team",
      icon: "twitter",
    },
    {
      url: "https://www.youtube.com/channel/UCk_bP4BFqSSA4dqUz9cRK8A",
      icon: "youtube",
    },
    {
      url: "https://www.facebook.com/Play14-making-the-world-more-fun-than-fun-315955075134911/",
      icon: "facebook",
    },
  ]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-area bg-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <Link href="/" className="logo">
                <Image
                  src="/logo/play14_600x200_transparent.png"
                  alt="logo"
                  width={600}
                  height={200}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  unoptimized
                />
              </Link>
              <p>play is the way</p>

              <ul className="social-link">
                {socialLinks.map((action, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={action.url}
                        className="d-block"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className={`bx bxl-${action.icon}`} />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Explore</h3>

              <ul className="footer-links-list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about/story">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-6">
            <div className="single-footer-widget">
              <h3>Resources</h3>

              <ul className="footer-links-list">
                <li>
                  <Link href="/events">Our events</Link>
                </li>
                <li>
                  <Link href="/players">Our players</Link>
                </li>
                <li>
                  <Link href="/games">Our games</Link>
                </li>
                <li>
                  <Link href="/articles">Our articles</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-footer-widget">
              <h3>Address</h3>

              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-building"></i>
                  #play14 a.s.b.l.
                  <br />
                  46 boulevard Jules Salentiny
                  <br />
                  L-2511 Luxembourg
                  <br />
                  LUXEMBOUG
                </li>
                <li>
                  <i className="bx bx-envelope"></i>
                  <a href="mailto:team@play14.org">team@play14.org</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                &copy; 2014 - {currentYear} <strong>#play14</strong> developed
                by{" "}
                <Link
                  href="https://www.linkedin.com/in/c%C3%A9dric-pontet/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cédric Pontet
                </Link>
              </p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-map">
        <Image
          src={footerMap}
          alt="footer-logo"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          unoptimized
        />
      </div>
    </footer>
  )
}

export default Footer
