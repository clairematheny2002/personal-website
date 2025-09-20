import Name from "./components/Name";
import Title from "./components/Title";
import Image from 'next/image'
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Name name = "claire matheny"> </Name>
      <Title title ="web dev"> </Title>
      <div className="centered-image-container">
        <Image src="/images/Frame11.png"alt="top of computer" width={1072} height={78.17} className="centered-image top-image"></Image>
        <Image src="/images/Frame12.png"alt="bottom of computer" width={1072} height={547.17} className="centered-image bottom-image"></Image>
        <div className="centered-image-inner-container">
          <Image src="/images/Frame10.png"alt="computer screen" width={1027} height={524} className="centered-image middle-image"></Image>
          <div className="centered-image-inner-inner-container">
            <Image src="/images/ponyHeadshot.png"alt="headshot" width={100} height={100} className="centered-image headshot"></Image>
            <p className="description"> new grad, new bugs, new portfolio! welcome to my corner of the web :)</p>
            <div style={{position: "absolute", display: "grid", top: "180px"}}>
              <a className="socials github" href="https://github.com/clairematheny2002">github</a>
              <a className = "socials linkedin" href="https://www.linkedin.com/in/claire-matheny/">linkedin</a>
              <a className = "socials email" href="">email</a>
            </div>
          </div>
        <div>
          
          </div>
        </div>
      </div>
    </div>

  );
}


//<Image src="/images/headshot.png"alt="headshot" width={200} height={200} className="centered-image headshot"></Image>
// <Image src="/images/Frame12.png"alt="bottom of computer" width={1072} height={547.17} className="centered-image bottom-image"></Image>