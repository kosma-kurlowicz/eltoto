import styles from "./horizontalCard.module.css";

export default function HorizontalCard({children}) {
  return (
    <div className={styles.HorizontalCard}>
        {children}
    </div>
  );
}
