import styles from "../styles/Home.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={styles.container}>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/events">
          <a className="hover:underline">Events</a>
        </Link>{" "}
        |{" "}
        <Link href="/players">
          <a className="hover:underline">Players</a>
        </Link>{" "}
        |{" "}
        <Link href="/games">
          <a className="hover:underline">Games</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a className="hover:underline">About</a>
        </Link>
      </h2>
    </div>
  );
};

export default Nav;
