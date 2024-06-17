import styles from './horizontalCardContainer.module.css'

export default function horizontalCardContainer ({
    children
  }) {
    return (
        <div className={styles.horizontalCardContainer}>
            {children}
        </div>
    )
}