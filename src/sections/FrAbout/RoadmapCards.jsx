import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SubHeading from "../../components/SubHeading";
import { BsArrowRight } from "react-icons/bs";
import SliderNavigationButton from "../../components/SliderNavigationButton";


const data = [
  {
    title: "Presale",
    subTitle: "Q1: 2019-2022:",
    content:
      "- Lancement de Newworld pour éduquer et sensibiliser aux nouvelles technologies telles que la blockchain et les crypto-actifs. </br> - Création de l'application LEEDIXPAY avec sa première fonctionnalité, NEWVERSITY, dédiée à l'hébergement de formations vidéo. <br/>  - Expansion de la communauté grâce à des campagnes de sensibilisation et de promotion intensives.",
  },
  {
    title: "Prélancement",
    subTitle: "Q2: 2022-2024:",
    content:
      "- Analyse approfondie du marché et des besoins émergents. <br/> - Mise en œuvre de nouvelles fonctionnalités telles que les transferts internationaux entre utilisateurs et non-utilisateurs, une vente aux enchères en ligne et un marché de commerce électronique, l'intégration de marchands en ligne, l'échange de crypto-monnaie en monnaie fiduciaire, et des mécanismes de redevances de mise en jeu flexibles sur la plateforme, avec un accent particulier sur la sécurité, l'efficacité et l'intégration des utilisateurs.<br/> - Test de la plateforme avec un petit groupe d'utilisateurs pour recueillir des commentaires et des retours d'expérience utilisateur.",
  },
  {
    title: "LDP",
    subTitle: "Phase de lancement et d'expansion Q3:2024-2025",
    content:
      "Lancement officiel de LEEDIXPAY et distribution de jetons : Début de l'ICO et déploiement complet de la plateforme avec toutes ses fonctionnalités opérationnelles. <br/> - Promotion de LEEDIXPAY à travers divers canaux pour augmenter sa visibilité et son adoption",
  },
  {
    title: "Q4: 2025-2026",

    content:
      "Expansion des services et des fonctionnalités : Intégration de nouvelles fonctionnalités basées sur les retours des utilisateurs et les avancées technologiques, telles que Rapid-Retail pour les paiements en ligne pour le commerce électronique, et Rapid-Borrow pour les prêts décentralisés à nos utilisateurs. Expansion géographique : Extension progressive des services LEEDIXPAY vers de nouveaux marchés et régions. <br/>",
  },
];


const Card = ({ title, subTitle, content }) => {
  return (
    <div className="cards h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <SubHeading className="font-semibold mb-0.5">{title}</SubHeading>
          <p className="font-medium text-lg text-[#20262b]">{subTitle}</p>
        </div>

        <BsArrowRight className="text-4xl" />
      </div>

      <p className="text-base opacity-70" dangerouslySetInnerHTML={{ __html: content }}></p>
    </div>
  );
};

function RoadmapCards() {
 

  return (
    <section className="px-6">
      <Swiper
        slidesPerView={4.2}
        spaceBetween={30}
        className="py-5 [&_.swiper-slide]:!h-auto"
        modules={[Navigation]}
        navigation={{
          nextEl: "#nextEl",
          prevEl: "#prevEl",
        }}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3.2,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              title={(item.title)}
              subTitle={(item.subTitle)}
              content={(item.content)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center space-x-5 justify-center">
        <SliderNavigationButton id="prevEl" className="rotate-180" />
        <SliderNavigationButton id="nextEl" />
      </div>
    </section>
  );
}

export default RoadmapCards;
