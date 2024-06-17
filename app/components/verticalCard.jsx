import styles from "./verticalCard.module.css";

export default function VerticalCard(props) {
  return (
    <div className={styles.verticalCard}>
      <h2 className={styles.verticalCardTitle}>{props.title}</h2>
      <div className={styles.verticalVideo}>
        <video width="360" height="640" controls preload="auto">
          <source src={props.source} type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
