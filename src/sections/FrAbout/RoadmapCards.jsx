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
    subTitle: "The Birth of LDP",
    content:
      "Our initial focus is on bringing the LDP community together and spreading awareness about our goal to help everyone get LDP tokens before the first Ethereum ETF approval. A fair presale builds a strong community.",
  },
  {
    title: "Pre-Launch",
    subTitle: "LDP Marketing",
    content:
      "During the presale, we're starting marketing efforts that explain why it's important to hold LDP tokens and ETH before the SEC approves the first Ethereum ETF, highlighting its significance.",
  },
  {
    title: "LDP",
    subTitle: "Launch and 5% Burn Tax",
    content:
      "Once launched on a DEX, the token-burning process will automatically reduce the token supply with each transaction, making the remaining token supply scarcer. The transaction tax will decrease 1% each time we reach a milestone in the Ethereum ETF journey.",
  },
  {
    title: "25% Token Burn",
    subTitle: "Overtime",
    content:
      "As Ethereum grows in the global market, we plan to burn and remove a total of 25% LDP token supply from circulation. With each LDP milestone, 5% of the total supply will be burned step by step.",
  },
  {
    title: "25% Token Burn",
    subTitle: "Overtime",
    content:
      "As Ethereum grows in the global market, we plan to burn and remove a total of 25% LDP token supply from circulation. With each LDP milestone, 5% of the total supply will be burned step by step.",
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

      <p className="text-base opacity-70">{content}</p>
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
