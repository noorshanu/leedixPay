import TokenCard from "../../components/TokenCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SliderNavigationButton from "../../components/SliderNavigationButton";

const data = [
  {
    title: "NOUVEAUVERSITÉ",
    subtitle: "est maintenant disponible sur notre plateforme.",
    imageSrc: "/images/icons/etf_volume.svg",
    description: [
      "Apprendre",
      "Développer et Grandir",
      "Nous vous aidons à développer vos compétences et à rester compétitif dans tous les domaines.",
    ],
  },
  {
    title: "Échange Crypto & Fiat",
    subtitle: "Maintenant disponible sur notre plateforme.",
    imageSrc: "/images/icons/etf_approval.svg",
    description: [
      "Achetez des cryptomonnaies avec votre solde LeedixPay. Achetez maintenant !",
    ],
  },
  {
    title: "Redevances Flexibles de Mise en Jeu",
    subtitle: "Maintenant disponible sur notre plateforme.",
    imageSrc: "/images/icons/etf_launch.svg",
    description: [
      "Faites fructifier votre argent en investissant de manière flexible et intelligente",
      "Commencez maintenant et grandissez.",
    ],
  },
  {
    title: "Prochainement : Rapid-Emprunt",
    subtitle: "Empruntez de manière transparente et sécurisée.",
    imageSrc: "/images/icons/etf_aum.svg",
    description: [
      "Restez en avance pour votre entreprise.",
    ],
  },
];

function Tokenomics() {
  return (
    <section className="px-6">
      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        className="py-5 [&_.swiper-slide]:!h-auto"
        modules={[Navigation]}
        navigation={{
          nextEl: "#nextEl1",
          prevEl: "#prevEl1",
        }}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <TokenCard
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              icon={item.imageSrc}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center space-x-5 justify-center">
        <SliderNavigationButton id="prevEl1" className="rotate-180" />
        <SliderNavigationButton id="nextEl1" />
      </div>
    </section>
  );
}

export default Tokenomics;
