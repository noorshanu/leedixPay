import LinesEllipsis from "react-lines-ellipsis";

function Newscard({ title, imgUrl, Disc, Auther, Time, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="blog-box w-full cursor-pointer h-full flex flex-col"
    >
      <span className="flex-1">
        {/* <LinesEllipsis
          className="text-base font-bold heading mb-4 text-[#4d5060]"
          text={title}
          maxLine="3"
          ellipsis="..."
          trimRight
          basedOn="letters"
        /> */}

        <h3 className="text-base font-bold heading mb-2 text-[#4d5060] max-lines">
          {title}...
        </h3>
        <img
          alt=""
          className="img-fluid rounded-[20px] object-cover min-h-[150px] max-h-[150px] max-w-full"
          src={imgUrl}
        />
        <p
          style={{ "--h": "10.2em" }}
          className="pt-4 mb-1 text-base text-[#4d5060] description max-lines"
        >
          {Disc}...
        </p>
        {/* <LinesEllipsis
          className="pt-4 mb-1 text-base text-[#4d5060] description"
          text={Disc}
          maxLine="5"
          ellipsis="..."
          trimRight
          basedOn="letters"
        /> */}
      </span>

      <span className="m-0 pt-2 text-xs font-bold time text-[#4d5060]">
        {Auther}
        <br />
        {Time}
      </span>
    </a>
  );
}

export default Newscard;
