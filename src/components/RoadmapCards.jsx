import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SubHeading from "./SubHeading";
import { BsArrowRight } from "react-icons/bs";
import SliderNavigationButton from "./SliderNavigationButton";


const data = [
  {
    title: "Presale",
    subTitle: "Q1: 2019-2022:",
    content:
      "- Launch of Newworld to educate and raise awareness about new technologies such as blockchain and crypto-assets. </br> - Creation of the LEEDIXPAY application with its first feature, NEWVERSITY, dedicated to hosting video-based training. <br/>  - Expansion of the community through intensive awareness and promotion campaigns.",
  },
  {
    title: "Pre-Launch",
    subTitle: "Q2: 2022-2024:",
    content:
      "- In-depth market research and analysis of emerging needs. <br/> - Implementation of new features such as international transfers between users and non-users, an online auction and e-commerce market, integration of online merchants, crypto-to-fiat exchange, and flexible staking royalties mechanisms on the platform, with particular emphasis on security, efficiency, and user integration.<br/> - Testing of the platform with a small group of users to gather feedback and user experience.",
  },
  {
    title: "LDP",
    subTitle: "Launch and Expansion Phase Q3:2024-2025",
    content:
      "Official launch of LEEDIXPAY and token distribution: Beginning of the ICO and full deployment of the platform with all its operational features. <br/> - Promotion of LEEDIXPAY through various channels to increase its visibility and adoption",
  },
  {
    title: "Q4: 2025-2026",

    content:
      "Expansion of services and features: Integration of new features based on user feedback and technological advancements, such as Rapid-Retail for online payments for e-commerce, and Rapid-Borrow for decentralized loans to our users. Geographical expansion: Gradually extending LEEDIXPAY services to new markets and regions. <br/>",
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
