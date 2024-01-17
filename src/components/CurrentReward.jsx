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

function CurrentReward() {
  const { t } = useTranslation();
  const [rewardfo, setReward] = useState(0)
  const { address } = useAccount();
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

  useEffect(() => {
    if (REWARD && REWARD !== undefined ) {
    const x = formatEther(REWARD)
    setReward(x)
    }
    }, [REWARD, address ]);

  return (
    <div className="stake-box">
      <div className="w-full h-full">
        <div className="flex items-center justify-between">
          <span className="title text-base font-bold text-primary uppercase mb-1 inline-block text-black">
            {t("CURRENT REWARDS")}
          </span>
        </div>
        <h2 className=" text-3xl mt-3 text-[#0072ff] font-bold">
          {(rewardfo?.toString())} 
          <sup className="mb-2 text-xs font-bold title pl-2">
            {t("Per ETH Block")}
          </sup>
        </h2>
      </div>
    </div>
  );
}

export default CurrentReward;
