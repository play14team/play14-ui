import styles from "./loader.module.css";
import { HashLoader } from "react-spinners";

const Loader = () => (
  <div className={styles.loader}>
    <HashLoader color="#FF5200" />
  </div>
);
export default Loader;
