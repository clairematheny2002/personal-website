import Name from "./components/Name";
import Title from "./components/Title";
import Image from 'next/image'
import "./globals.css";

export default function Home() {
  return (
    <>
      <Name name = "claire matheny"> </Name>
      <Title title ="web dev"> </Title>
      <div>
        <Image src="/images/Frame11.png"alt="top of computer" width={1072} height={78.17} className="centered-image top-image"></Image>
        <Image src="/images/Frame12.png"alt="bottom of computer" width={1072} height={547.17} className="centered-image bottom-image"></Image>
      </div>
    </>

  );
}
