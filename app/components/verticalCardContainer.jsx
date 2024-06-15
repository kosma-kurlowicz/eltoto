import styles from './verticalCardContainer.module.css'

export default function verticalCardContainer ({
    children
  }) {
    return (
        <div className={styles.verticalCardContainer}>
            {children}
        </div>
    )
}