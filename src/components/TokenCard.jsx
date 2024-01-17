import { useTranslation } from "react-i18next";

function TokenCard({ title, subtitle, description, icon }) {
  const { t } = useTranslation();

  return (
    <div className="token-card bg-tertiary ng-star-inserted h-full pb-10">
      <img className="title_image" src={icon} />
      <h1 className="text-white text-2xl pt-4 font-semibold">{t(title)}</h1>
      <h5 className=" text-xl text-white pt-4 font-normal pb-6">
        {t(subtitle)}
      </h5>
      <ul className="m-0 p-0">
        {description.map((point, i) => (
          <li key={i} className="text-base m-0 p-0 flex ng-star-inserted">
            <img
              src="/images/icons/roadmap-arrow.svg"
              alt=""
              className="list-icon"
            />
            <span className="pl-2 text-[#c2ccd3] pb-2"> {t(point)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TokenCard;
