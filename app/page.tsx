import Image from "next/image";
import styles from "./page.module.css";
import VerticalCard from "./components/verticalCard";
import VerticalCardContainer from "./components/verticalCardContainer"

export default function Home() {
  return (
    <>
      <VerticalCardContainer>
        <VerticalCard title="Telos Short" source="/video/cym-totem-telos-short-09-final-360x640.mp4"></VerticalCard>
        <VerticalCard title="Sense Reel" source="/video/cym-sense-short-10-final-360x640.mp4"></VerticalCard>
        <VerticalCard title="Social" source=""></VerticalCard>
        <VerticalCard title="Social" source=""></VerticalCard>
      </VerticalCardContainer>
    </>
  );
}
