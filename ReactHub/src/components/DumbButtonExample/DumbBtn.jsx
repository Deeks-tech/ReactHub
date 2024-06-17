import styles from "./styles.module.css";

export default function DumbBtn({ children, onClick }) {
  return (
    <button className={styles.dumb_btn} onClick={onClick}>
      {children}
    </button>
  );
}
