import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from "react";

import { PRESALEABI, STAKINGABI, USDTABI } from "../contract/ABI";
import { formatEther, formatUnits, parseEther, parseUnits } from "viem";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
  useSwitchNetwork,
  useWaitForTransaction,
} from "wagmi";

import {
  PresaleContract,
  StakingContract,
  CHAIN,
  USDTAddress,
} from "../contract/Address";
import Button from "./Button";
import TransitionWrapper from "./TransitionWrapper";
import Typography from "./Typography";

function TotalReward() {
  const { t } = useTranslation();
  const [isModalOpen, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const [rewardfox, setRewarda] = useState(0);
  const { address } = useAccount();

  const { data: REWARDx } = useContractRead({
    address: StakingContract?.toString(),
    abi: STAKINGABI,
    functionName: "getRewards",
    chainId: 1,
    args: [address],
    enable: address ? true : false,
    onSuccess(data) {},
    onError(error) {
      console.log("Error", error);
    },
  });

  useEffect(() => {
    if (REWARDx && REWARDx !== undefined) {
      const x = formatEther(REWARDx);
      setRewarda(Number(x));
    }
  }, [REWARDx, address]);

  return (
    <>
      <div className="stake-box flex flex-col">
        <div className="flex-1">
          <span className=" font-bold uppercase mb-4 inline-block text-black">
            {t("TOTAL REWARDS")}
          </span>
          <h2 className="text-3xl text-[#0072ff] font-bold">
            {rewardfox?.toFixed(0)}
            <sup className="mb-2 text-xs font-bold title pl-2">ETHETF</sup>
          </h2>
        </div>

        <Button
          size="lg"
          variant="green"
          className="text-sm"
          onClick={openModal}
        >
          {t("Claim Rewards")}
        </Button>
      </div>

      <TransitionWrapper open={isModalOpen} className="max-w-[26rem] w-full">
        <div className="bg-white rounded-lg py-6 px-8">
          <img
            src="/images/icons/info.svg"
            alt=""
            className="h-[90px] mx-auto"
          />
          <Typography variant="lg" className=" text-center font-normal my-4">
            Claim is not live yet
          </Typography>

          <div className="grid justify-center ">
            <Button
              onClick={closeModal}
              className="bg-text-2 text-white text-base h-10"
            >
              OK
            </Button>
          </div>
        </div>
      </TransitionWrapper>
    </>
  );
}

export default TotalReward;
