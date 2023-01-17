import styles from "./error.module.css";

const Error = (props: { message: string }) => {
  const { message } = props;
  console.log(message);
  return (
    <div>
      <p className={styles.error}>{message}</p>
    </div>
  );
};
export default Error;
