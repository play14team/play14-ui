import { RecoilRoot } from "recoil";
import Footer from "./footer";
import Meta from "./meta";
import Nav from "./nav";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <RecoilRoot>
      <Meta />
      <Nav />
      <main>{children}</main>
      <Footer />
    </RecoilRoot>
  );
};

export default Layout;
