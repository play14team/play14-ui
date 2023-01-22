import styles from "./error.module.css";

const ErrorMessage = (props: { message: string }) => {
  const { message } = props;
  console.log(message);
  return (
    <div>
      <p className={styles.error}>{message}</p>
    </div>
  );
};
export default ErrorMessage;
