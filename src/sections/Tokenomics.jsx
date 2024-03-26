import TokenCard from "../components/TokenCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SliderNavigationButton from "../components/SliderNavigationButton";

const data = [
  {
    title: "NEWVERSITY",
    subtitle: "is now live on our platform.",
    imageSrc: "/images/icons/etf_volume.svg",
    description: [
      "Learn",
      "Develop and Grow",
      "We help you develop your skills and stay competitive in all fields.",
    ],
  },
  {
    title: "Exchange Crypto & Fiat",
    subtitle: "Now available on our platform.",
    imageSrc: "/images/icons/etf_approval.svg",
    description: [
      "Purchase cryptocurrencies using your LeedixPay balance. Buy now !",
      
    ],
  },
  {
    title: "Royalties Flexible Staking",
    subtitle: "Now available on our platform.",
    imageSrc: "/images/icons/etf_launch.svg",
    description: [
      "Grow your money by smartly investing flexibly",
      "Start now and grow.",
      
    ],
  },
  {
    title: "Coming Soon: Rapid-Borrow",
    subtitle: "Borrow transparently and securely.    ",
    imageSrc: "/images/icons/etf_aum.svg",
    description: [
      "Stay ahead for your business.",
     ,
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
