import NavbarLogin from "../components/NavbarLOgin/NavbarLogin";
import SectionVideo from "../components/SectionVideo/SectionVideo";
import TitleHBnt from "../components/TitleHBnt/TitleHBnt";
import CardAnfInv from "../components/CardAnfInv/CardAnfInv";
import CardAbout from "../components/CardAbout/CardAbout";
import CardUsChaan from "../components/CardUsChaan/CardUsChaan";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <div>
      <NavbarLogin> </NavbarLogin>
      <SectionVideo></SectionVideo>
      <TitleHBnt></TitleHBnt>
      <CardAnfInv></CardAnfInv>
      <CardAbout></CardAbout>
      <CardUsChaan></CardUsChaan>
      <Footer></Footer>
    </div>
  );
}
