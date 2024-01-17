import { useTranslation } from "react-i18next";
import Typography from "./Typography";

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

const Point = ({ text }) => {
  return (
    <div className="flex space-x-2 items-start">
      <img
        src="/images/ani-arrow.svg"
        height="8px"
        alt=""
        className="relative top-[.1em]"
      />

      <Typography variant="xs">{text}</Typography>
    </div>
  );
};

function EstimatedReward() {
  const [total, setTotal] = useState(0);

  const { data: Totalstaked } = useContractRead({
    address: StakingContract?.toString(),
    abi: STAKINGABI,
    functionName: "actualTokensStaked",
    chainId: 1,
    onSuccess(data) {},
    onError(error) {
      console.log("Error", error);
    },
  });

  const { data: Users } = useContractRead({
    address: StakingContract?.toString(),
    abi: STAKINGABI,
    functionName: "users",
    chainId: 1,
    onSuccess(data) {},
    onError(error) {
      console.log("Error", error);
    },
  });

  const { data: REWARD } = useContractRead({
    address: StakingContract?.toString(),
    abi: STAKINGABI,
    functionName: "rewardTokensPerBlock",
    chainId: 1,
    onSuccess(data) {},
    onError(error) {
      console.log("Error", error);
    },
  });

  const { address } = useAccount();

  useEffect(() => {
    if (
      Totalstaked &&
      Totalstaked !== undefined &&
      REWARD &&
      Users &&
      REWARD !== undefined &&
      Users !== undefined
    ) {
      const rew = formatEther(REWARD);
      const totalx = formatEther(Totalstaked);

      const block = Number(rew) * 6600;
      const tot = (block / Number(totalx)) * 100;
      setTotal(tot);
    }
  }, [REWARD, Totalstaked, address, Users]);

  const { t } = useTranslation();

  return (
    <div className="stake-box flex flex-col">
      <div className="flex-1 mb-4">
        <span className="text-sm uppercase text-primary font-bold mb-1 inline-block text-black">
          {t("Estimated Rewards")}
        </span>
        <h2 className=" text-3xl mt-3 text-[#0072ff] font-bold">
          {total?.toFixed(0)}%
          <sup className="mb-2 text-xs font-bold title pl-2">p/a</sup>
        </h2>
      </div>

      <div className="space-y-1">
        <Point text={t("Rewards rate is dynamic")} />
        <Point text={t("Monthly = Rewards % / 12")} />
        <Point text={t("Daily = Rewards % / 365")} />
      </div>
    </div>
  );
}

export default EstimatedReward;
