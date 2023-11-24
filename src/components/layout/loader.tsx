import styles from "./loader.module.css"
import { HashLoader } from "react-spinners"

const Loader = (props: { size?: string }) => {
  const { size } = props
  const style = size ? { minHeight: size } : {}

  return (
    <div className={styles.loader} style={style}>
      <HashLoader color="#FF5200" />
    </div>
  )
}

export default Loader
