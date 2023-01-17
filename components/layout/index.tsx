import Footer from "./footer";
import Meta from "./meta";
import Navbar from "./navbar";

type LayoutProps = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: LayoutProps) => {
  return (
    <div style={{ outline: "none" }} tabIndex={-1} id="next-focus-wrapper">
      <Meta />
      <Navbar />
      <main>
        <div className="container">
          <div className="pt-100 pb-70">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
