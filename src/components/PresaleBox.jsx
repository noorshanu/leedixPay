import { useState, useEffect } from "react";
import Button from "./Button";
import Typography from "./Typography";
import { useAccount, useContractRead } from "wagmi";
import ProgressBar from "components/ProgressBar";
import ReferralModal from "./ReferralModal";
import ConnectWalletOptionsModal from "./ConnectWalletOptionsModal";
import { PRESALEABI, STAKINGABI } from "../contract/ABI";
import { formatEther } from "viem";
import { PresaleContract, StakingContract } from "../contract/Address";
import Timer from "./Timer";
import TransitionWrapper from "./TransitionWrapper";
import { MdInfoOutline } from "react-icons/md";
import PresaleTabsAndInput from "./PresaleTabsAndInput";

function PresaleBox() {
  const [isWalletModalOpen, setWalletModal] = useState(false);
  const [isReferralModalOpen, setReferralModal] = useState(false);
  const { address } = useAccount();

  const HARD_CAP = 489600; // Hardcap in USDT
  const [percentage, setPercentage] = useState();
  const [modalInfoText, setModalInfoText] = useState(null);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const { isConnected } = useAccount();
  const [moneyRaised, setMoney] = useState(0);
  const handleModalInfoClose = () => setInfoModalOpen(false);

  const { data: usdRaisedr } = useContractRead({
    address: PresaleContract?.toString(),
    abi: PRESALEABI,
    functionName: "usdRaised",
    chainId: 1,
    onError(error) {
      console.log("Error", error);
    },
  });

  const { data: staked } = useContractRead({
    address: StakingContract?.toString(),
    abi: STAKINGABI,
    functionName: "poolStakers",
    chainId: 1,
    args: [address],
    enabled: address ? true : false,
    onError(error) {
      console.log("Error", error);
    },
  });

  const { data: getETFdata } = useContractRead({
    address: PresaleContract?.toString(),
    abi: PRESALEABI,
    functionName: "userDeposits",
    args: [address],
    enabled: address ? true : false,
    chainId: 1,
  });

  useEffect(() => {
    console.log(usdRaisedr);
    if (usdRaisedr && usdRaisedr !== undefined) {
      setMoney(usdRaisedr);
      const usdRaised = formatEther(usdRaisedr);
      const progressPercentage = ((Number(usdRaised) + 400200) / HARD_CAP) * 100;
      console.log(progressPercentage);
      setPercentage(progressPercentage);
    }
  }, [address, usdRaisedr, isConnected, staked]);

  return (
    <>
      <aside className="bg-text-2 rounded-3xl pb-8 relative z-10" id="presale">
        <img
          src="/images/logo-floating.svg"
          className="absolute bottom-0 left-0 max-sm:h-16 h-24 pointer-events-none select-none -z-10"
          alt=""
        />

        <Typography variant="sm" className="pt-3 text-center text-white mb-3">
          Buy Ethereum ETF Token Today
        </Typography>

        <Timer />

        <main className="px-5">
          <div className="mb-4">
            <ProgressBar progress={percentage} />
          </div>

          <div className="space-y-2.5">
            <Typography variant="xs" className="text-center text-white/50">
              <span className="font-bold text-white">USDT RAISED:</span> $
              {(
                Number(formatEther(moneyRaised?.toString())) + 400200
              ).toLocaleString("en-US")}{" "}
              / $489,600.00
            </Typography>
            <Typography variant="xs" className="text-center text-white/50">
              <span className="text-white">YOUR PURCHASED ETHETF</span> ={" "}
              {getETFdata ? formatEther(getETFdata) : 0}{" "}
              <button
                onClick={() => {
                  setInfoModalOpen(true);
                  setModalInfoText(
                    "Your total purchased tokens are all tokens purchased using the connected wallet. This includes all staked and unstaked tokens purchased on Ethereum."
                  );
                }}
                className="inline-block align-middle text-[1.8em] ml-[.4em] text-green relative bottom-[.1em]"
              >
                <MdInfoOutline />
              </button>
            </Typography>
            <Typography variant="xs" className="text-center text-white/50">
              <span className="text-white">YOUR STAKED ETHETF</span> ={" "}
              {staked ? formatEther(staked[0]) : 0}
              <button
                onClick={() => {
                  setInfoModalOpen(true);
                  setModalInfoText(
                    "Unclaimed ETHETF that was bought using ETH or ERC-20 USDT can be staked now. Staking for ETHETF that was bought using ETH and Usdt can be staked once the presale ends. Please note that all early staked tokens can be withdrawn 7 days after token claiming goes live, which will happen after the presale has concluded."
                  );
                }}
                className="inline-block align-middle text-[1.8em] ml-[.4em] text-green relative bottom-[.1em]"
              >
                <MdInfoOutline />
              </button>
            </Typography>
          </div>

          {isConnected ? (
            <Button
              onClick={() => setReferralModal(true)}
              variant="green-outlined"
              className="text-base w-fit mx-auto mt-4 mb-5 rounded-lg px-4 h-[36px]"
            >
              Refer and Earn
            </Button>
          ) : null}

          <div className="flex items-center space-x-10 mt-4 mb-6">
            <div className="flex-1 h-[1px] bg-white opacity-20"></div>
            <Typography variant="sm" className="text-white font-medium">
              1 ETHETF = $0.052
            </Typography>
            <div className="flex-1 h-[1px] bg-white opacity-20"></div>
          </div>

          <PresaleTabsAndInput />
        </main>
      </aside>

      <TransitionWrapper
        open={isInfoModalOpen}
        handleClose={handleModalInfoClose}
        className="max-w-[30rem] w-[90%] max-h-[90vh] overflow-auto"
      >
        <div className="bg-white rounded-xl p-8">
          <MdInfoOutline className="mx-auto text-7xl mb-5" />

          <Typography variant="lg" className="text-center mb-8">
            {modalInfoText}
          </Typography>

          <Button
            onClick={handleModalInfoClose}
            className="mx-auto max-w-[20rem] w-full"
          >
            Ok
          </Button>
        </div>
      </TransitionWrapper>

      <ReferralModal
        open={isReferralModalOpen}
        handleClose={() => setReferralModal(false)}
      />

      <ConnectWalletOptionsModal
        open={isWalletModalOpen}
        handleClose={() => setWalletModal(false)}
      />
    </>
  );
}

export default PresaleBox;
