import { useState } from "react";
import { IoClose } from "react-icons/io5";

function BuyWithCard({ handleClose }) {
  const [loading, setLoading] = useState(true);

  const handleIfrmeLoad = () => {
    setLoading(false);
  };

  const iframeStyle = {
    border: "1px solid #000",
    borderRadius:'8px',
    margin: "auto",
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    zIndex: 20,
  };

  return (
    <div className="bg-[#0072ff] p-[.6rem] relative rounded-lg">
      <div className="py-0 bg-main-bg max-h-[40rem] h-[76vh] relative z-10">
        <button
          onClick={() => {
            if (handleClose) {
              handleClose();
            }
          }}
          className="flex absolute top-[-1rem] right-[-1rem] text-2xl bg-black text-white w-[1.6em] h-[1.6em] rounded-full items-center justify-center shadow-[0_0_10px_black]"
        >
          <IoClose />
        </button>
        {/* https://widget.wert.io/default/widget/ */}
        <iframe
          style={iframeStyle}
          loading="lazy"
          src="https://widget.wert.io/default/widget/?commodity=ETH%3AEthereum"
          title="Onramper widget"
          allow="accelerometer; autoplay; camera; gyroscope; payment"
          onLoad={handleIfrmeLoad}
        ></iframe>

        {loading && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center -z-10">
            <div className="loadingbutton-loader text-[240%] "></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BuyWithCard;
