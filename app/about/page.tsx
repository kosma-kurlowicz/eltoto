import styles from "./about.module.css";
import HorizontalCardContainer from "../components/horizontalCardContainer";
import HorizontalCard from "../components/horizontalCard";

export default function About() {
  return (
    <>
      <h1 className={styles.headingLarge}>Hi!</h1>
      <p className={styles.contentLarge}>Hey, I'm a short form video artist. I specialize in video and video ads published on social media. As a cultural anthropologist, I create strong narratives with a punch line.</p>
      <div className={styles.twoColumnContainer}>
        <div>
          <h1>Kosma Kurłowicz</h1>
        </div>
        <div>
          <HorizontalCardContainer>
        <HorizontalCard>
          <div>
          <h2>Education & courses:</h2>
          </div>
          <div>
          <ul>
            <li>&ndash; Jagiellonian University: Anthropology &ndash; Master's Degree</li>
            <li>&ndash; DaVinci Resolve 18 Editing Training</li>
            <li>&ndash; DaVinci Resolve 18 Color Training</li>
          </ul>
          </div>
        </HorizontalCard>
        <HorizontalCard>
          <h2>Software:</h2>
          <ul>
            <li>&ndash; Blackmagic DaVinci Resolve 18</li>
            <li>&ndash; Affinity Photo</li>
          </ul>
        </HorizontalCard>
        <HorizontalCard>
          <h2>Equipment:</h2>
          <ul>
            <li>&ndash; Camera: Sony ILCE-5100</li>
            <li>&ndash; Tripod: Manfrotto</li>
          </ul>
        </HorizontalCard>
      </HorizontalCardContainer></div>
      </div>
    </>
  );
}
