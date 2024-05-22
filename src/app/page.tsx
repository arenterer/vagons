import Title from "@/app/components/main/title/title";
import Header from "@/app/components/header/header";
import Catalog from "@/app/components/main/catalog/Catalog";
import Ads from "@/app/components/main/ads/Ads";
import Works from "@/app/components/main/works/Works";
import About from "@/app/components/main/about/About";
import Contact from "@/app/components/main/contact/Contact";
import ScrollBtn from "@/app/components/button/scrollButton";


export default function HomePage() {
  return (
      <>
          <ScrollBtn/>
          <Header/>
          <Title/>
          <Catalog/>
          <Ads/>
          <Works/>
          <About/>
          <Contact/>

      </>
  )
}
