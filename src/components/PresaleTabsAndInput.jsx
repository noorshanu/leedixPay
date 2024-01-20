import { MdOutlineDone } from "react-icons/md";
import TabButton from "./TabButton";
import Typography from "./Typography";
import Button from "./Button";
import PresaleInput from "./PresaleInput";

import { useEffect, useRef, useState } from "react";
import TransitionWrapper from "./TransitionWrapper";
import BuyWithCard from "./BuyWithCard";
import { toast } from "react-toastify";

import { twMerge } from "tailwind-merge";

function PresaleTabsAndInput() {
  const [tab, setTab] = useState(1);
  const [inputIcon, setInputIcon] = useState("/images/icons/eth.svg");
  const [paymentMethod, setPaymentMethod] = useState("ETH");
  const [cardPopup, setCardPopup] = useState(false);

  const [loading, setLoading] = useState(false);

  const closeCardPopup = () => {
    setCardPopup(false);
  };

  const handleTabClick = (selectedTab) => {
    setTab(selectedTab);

    switch (selectedTab) {
      case 1:
        setInputIcon("images/eth.svg");
        setPaymentMethod("ETH");

        break;
      case 2:
        setInputIcon("images/usdt.svg");
        setPaymentMethod("USDT");

        break;
      case 3:
        setInputIcon("images/card.svg");
        setPaymentMethod("CARD");
        break;
      default:
        // Handle other tabs if needed
        break;
    }
  };

  return (
    <div>
      {" "}
      <div className={twMerge("grid grid-cols-3 gap-2 sm:gap-4 mb-4")}>
        <TabButton
          onClick={() => handleTabClick(1)}
          active={tab === 1 ? true : false}
          icon="images/eth.svg"
        >
          ETH
        </TabButton>
        <TabButton
          onClick={() => handleTabClick(2)}
          active={tab === 2 ? true : false}
          icon="images/usdt.svg"
        >
          USDT
        </TabButton>

        <TabButton
          // onClick={() => setCardPopup(true)}
          active={tab === 3 ? true : false}
          icon="images/card.svg"
        >
          CARD
        </TabButton>
      </div>
      {/* <div className="flex items-center space-x-10 mt-4 mb-6">
        <div className="flex-1 h-[1px] bg-white opacity-20"></div>
        <Typography variant="sm" className="text-white font-medium">
          ETH balance
        </Typography>
        <div className="flex-1 h-[1px] bg-white opacity-20"></div>
      </div> */}
      {/* <div className="mb-4">
        <img
          src="/images/logo-circular-black.svg"
          className="max-w-[3rem] w-full mx-auto mb-3 invert animate-spin"
          alt=""
        />

        <Typography
          variant="lg"
          className="text-center text-green font-semibold mb-3"
        >
          CONFIRM ALL THE TRANSACTIONS
        </Typography>

        <Typography variant="sm" className="text-center text-white mb-3">
          In order to buy and stake your ETHETF tokens , please confirm the
          transaction in your wallet , you may need to check the wallet app if{" "}
          {"your'e"} on mobile .
        </Typography>

        <Typography variant="sm" className="text-center text-red">
          All staked tokens can be withdrawn 30 days after tokens claming goes
          live , which will happen after the presale has concluded.
        </Typography>
      </div> */}
      <div className=" my-4 ">
        <div>
          <div className="mb-2 flex justify-between items-center">
            <Typography
              variant="xs"
              className="opacity-60 text-white font-light tracking-[2px] mb-1"
            >
             Pay ( Select Coin)
            </Typography>

            <button className="text-green font-semibold text-xs">Max</button>
          </div>
          <PresaleInput placeholder="0" icon={inputIcon} />
        </div>

        <div>
          <Typography
            variant="xs"
            className="opacity-60 text-white font-light tracking-[2px] mb-2 mt-3"
          >
            Receive LDP
          </Typography>

          <PresaleInput
            placeholder=""
            disabled
            icon="/images/ldp.png"
            
          />
        </div>

        {/* <Button
          variant="green"
          className="text-sm font-semibold"
          onClick={() => buyNow()}
        >
          Buy Ethereum ETF Token Now
        </Button> */}

        <Button
          variant="green"
          className="text-sm font-semibold px-0 space-x-2 col-span-2 w-full mt-3"
          onClick={() => open()}
          startIcon={
            <img
              src="/images/icons/wallet-connect.svg"
              className="invert"
              alt=""
            />
          }
        >
          Connect Wallet!
        </Button>

        {/* <Typography
          as="a"
          href="https://widget.wert.io/default/widget/?commodity=ETH%3AEthereum"
          target="_blank"
          variant="sm"
          className="w-fit block mx-auto underline text-white hover:no-underline cursor-pointer"
        >
          Not enough ETH? Top up now
        </Typography> */}

        <TransitionWrapper open={cardPopup} className="max-w-[26rem] w-[90%]">
          <BuyWithCard handleClose={closeCardPopup} />
        </TransitionWrapper>
      </div>
    </div>
  );
}

export default PresaleTabsAndInput;
