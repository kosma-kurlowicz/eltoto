import Image from "next/image";
import styles from "./page.module.css";
import VerticalCard from "./components/verticalCard";
import VerticalCardContainer from "./components/verticalCardContainer"

export default function Home() {
  return (
    <>
      <VerticalCardContainer>
        <VerticalCard title="Abc" source="/video/cym-sense-short-10-final-small.mp4"></VerticalCard>
        <VerticalCard title="CDE" source=""></VerticalCard>
        <VerticalCard title="gth" source=""></VerticalCard>
        <VerticalCard title="safg" source=""></VerticalCard>
      </VerticalCardContainer>
    </>
  );
}
