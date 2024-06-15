import styles from "./about.module.css";

export default function About() {
  return (
      <>
        <h1>About</h1>
        <div>
            <h2>Education & courses:</h2>
            <p>
                <ul>
                    <li>The Beginner’s Guide to DaVinci Resolve 18</li>
                </ul>
            </p>
        </div>
        <div>
            <h2>Software:</h2>
            <p>
                <ul>
                    <li>Blackmagic DaVinci Resolve 18</li>
                </ul>
            </p>
        </div>
        <div>
            <h2>Equipment:</h2>
            <p>
                <ul>
                    <li>Camera: Sony ILCE-5100</li>
                    <li>Tripod: Manfrotto</li>
                </ul>
            </p>
        </div>
      </>
  );
}
