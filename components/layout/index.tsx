import { RecoilRoot } from "recoil";
import Footer from "./footer";
import Meta from "./meta";
import Nav from "./nav";
import styles from "../../styles/Home.module.css";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <RecoilRoot>
      <Meta />
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </RecoilRoot>
  );
};

export default Layout;
