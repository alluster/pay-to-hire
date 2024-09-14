import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Hyödyt Pay-to-hiren käytöstä pähkinänkuoressa"
        title="Miksi yrityksesi kannattaa ottaa käyttöön Pay-to-hire"
      >
		Pay-to-hire:n avulla voit palkita työnhakijasi työhaastatteluihin osallistumisesta. Ottamalla käyttöön palvelumme parannat työnantajakuvaasi ja löydät motivoituneimmat työnhakijat.

      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      {/* <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
               Työantajakuvan rakentaminen on tärkeää, jotta yrityksesi hyvä maine kiirii myös yrityksesi ulkopuolella. työnhakijoiden vaivannäön palkitseminen parantaa yrityksesi mainetta.

      </SectionTitle> */}

      {/* <Video videoId="fZ0D0cnR88E" /> */}

      {/* <SectionTitle
        preTitle="kommentit"
        title="Käyttäjien kommentit palvelumme käytöstä"
      >
       Esimerkkejä Pay-to-hire:n käytöstä
      </SectionTitle>

      <Testimonials /> */}

      <SectionTitle preTitle="FAQ" title="Usein kysytyt kysymykset">
        Pay-to-hire on luotu parantamaan työnhakukokemusta. Haluamme varmistaa, että saat tarkat tiedot palvelun toiminnasta, ennen kuin aloitat käytön.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
