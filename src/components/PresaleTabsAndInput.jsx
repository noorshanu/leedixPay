/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import { MdOutlineDone } from "react-icons/md";
import TabButton from "./TabButton";
import Typography from "./Typography";
import Button from "./Button";
import PresaleInput from "./PresaleInput";
import {
  mainnet,
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
  useSwitchNetwork,
  useWaitForTransaction,
} from "wagmi";
import { useEffect, useRef, useState } from "react";
import TransitionWrapper from "./TransitionWrapper";
import BuyWithCard from "./BuyWithCard";
import { toast } from "react-toastify";
import {
  CHAIN,
  PresaleContract,
  StakingContract,
  USDTAddress,
} from "contract/Address";
import { PRESALEABI, STAKINGABI, USDTABI } from "contract/ABI";
import { formatEther, parseUnits } from "viem";
import { fetchBalance } from "@wagmi/core";
import { twMerge } from "tailwind-merge";
import { useWeb3Modal, useWeb3ModalState } from "@web3modal/wagmi/react";
import { FaLessThan } from "react-icons/fa";

function PresaleTabsAndInput({
  showCardOption = true,
  showOnlyStakeOption = false,
}) {
  const { address, isConnected } = useAccount();
  const [tab, setTab] = useState(1);
  const [inputIcon, setInputIcon] = useState("/images/icons/eth.svg");
  const [paymentMethod, setPaymentMethod] = useState("ETH");
  const [cardPopup, setCardPopup] = useState(false);
  const [amount, setAmount] = useState(0);
  // const [ethamount, setEthAmount] = useState(0);
  const [ethBalance, setEthBalance] = useState(0);
  const [ethSelling, setBuying] = useState();
  const usdtDecimals = 10 ** 6;
  const [maxTokensToBuy, setMaxTokensToBuy] = useState(0);
  const [price, setPrice] = useState();
  const { chain } = useNetwork();
  const [isBuyingA, setIsBuyingA] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const [total, setTotal] = useState(0);
  const { switchNetwork } = useSwitchNetwork({ chainId: mainnet.id });
  const [bool, setBool] = useState(false);
  const { open } = useWeb3Modal();
  const [cool, setCool] = useState(false);
  const [fool, setFool] = useState(false);
  const [loading, setLoading] = useState(false);
  const isOnCorrectChain = chain?.id === mainnet?.id;
  const [transactionId, setTrans] = useState("x");
  const writeableInputRef = useRef(null);
  const readonlyInputRef = useRef(null);
  const closeCardPopup = () => {
    setCardPopup(false);
  };

  const {
    write: buyWithEthAndStake,
    isLoading: isBuyWithETHLoadingStake,
    status: statusETHStake,
    data: dataETHStake,
  } = useContractWrite({
    address: PresaleContract?.toString(),
    abi: PRESALEABI,
    functionName: "buyWithEthAndStake",
    chainId: 1,
    onSuccess: async (dataETH, variable) => {},
    onError: (...props) => console.log(...props),
  });

  const waitForTransactionETHStake = useWaitForTransaction({
    hash: dataETHStake?.hash,
    confirmations: 1,
    cacheTime: 0,
    staleTime: 5000,
    onSuccess: async (dataWaitETHStake, isSuccessWaitETHStake) => {
      console.log("MA QUI CI ENTRO ERRORE?");
      setTrans(dataETH?.hash);
      setCool(true);
    },
    onError: async (dataWaitETHStake, isErrorWaitETHStake) => {
      console.log("MA QUI CI ENTRO ERRORE?");
      toast("Something goes wrong with the buy...", {
        type: "error",
      });
    },
  });

  const {
    data: dataWaitETHStake,
    isSuccess: isSuccessWaitETHStake,
    isError: isErrorWaitETHStake,
    isLoading: isLoadingWaitETHStake,
    status: statusWaitETHStake,
  } = waitForTransactionETHStake;

  const {
    write: buyWithUSDTAndStake,
    isLoading: isBuyWithUSDStakeLoading,
    data: dataUSDTStake,
  } = useContractWrite({
    address: PresaleContract?.toString(),
    abi: PRESALEABI,
    functionName: "buyWithUSDTAndStake",
    chainId: 1,
    onSuccess: async (dataUSDTStake, variable) => {},
    onError: (...props) => console.log(...props),
  });

  const waitForTransactionUSDTSTAKE = useWaitForTransaction({
    hash: dataUSDTStake?.hash,
    confirmations: 1,
    cacheTime: 0,
    staleTime: 5000,
    onSuccess: async (dataWaitUSDTStake, isSuccessWaitUSDTStake) => {
      console.log("MA QUI CI ENTRO ERRORE?");
      setTrans(dataUSDT?.hash);
      setCool(true);
    },
    onError: async (dataWaitUSDTStake, isErrorWaitUSDTStake) => {
      console.log("MA QUI CI ENTRO ERRORE?");
      toast("Something goes wrong with the buy...", {
        type: "error",
      });
    },
  });

  const {
    data: dataWaitUSDTStake,
    isSuccess: isSuccessWaitUSDTStake,
    isError: isErrorWaitUSDTStake,
    isLoading: isLoadingWaitUSDTStake,
    status: statusWaitUSDTStake,
  } = waitForTransactionUSDTSTAKE;

  const {
    write: buyWithUSD,
    isLoading: isBuyWithUSDLoading,
    data: dataUSDT,
  } = useContractWrite({
    address: PresaleContract?.toString(),
    abi: PRESALEABI,
    functionName: "buyWithUSDT",
    chainId: 1,
    onSuccess: async (dataUSDT, variable) => {},
    onError: (...props) => console.log(...props),
  });

  const waitForTransactionUSDT = useWaitForTransaction({
    hash: dataUSDT?.hash,
    confirmations: 1,
    cacheTime: 0,
    staleTime: 5000,
    onSuccess: async (dataWaitUSDT, isSuccessWaitUSDT) => {
      console.log("MA QUI CI ENTRO ERRORE?");
      setTrans(dataUSDT?.hash);
      setCool(true);
    },
    onError: async (dataWaitUSDT, isErrorWaitUSDT) => {
      console.log("MA QUI CI ENTRO ERRORE?");
      toast("Something goes wrong with the buy...", {
        type: "error",
      });
    },
  });

  const {
    data: dataWaitUSDT,
    isSuccess: isSuccessWaitUSDT,
    isError: isErrorWaitUSDT,
    isLoading: isLoadingWaitUSDT,
    status: statusWaitUSDT,
  } = waitForTransactionUSDT;

  const {
    write: buyWithETH,
    isLoading: isBuyWithETHLoading,
    status: statusETH,
    data: dataETH,
  } = useContractWrite({
    address: PresaleContract?.toString(),
    abi: PRESALEABI,
    functionName: "buyWithEth",
    chainId: 1,
    onSuccess: async (dataETH, variable) => {},
    onError: (...props) => console.log(...props),
  });

  const { data: USDTbalance } = useContractRead({
    address: USDTAddress?.toString(),
    abi: USDTABI,
    functionName: "balances",
    chainId: 1,
    args: [address],
    enabled: address ? true : false,
    onSuccess(data) {},
    onError(error) {
      console.log("Error", error);
    },
  });

  const waitForTransactionETH = useWaitForTransaction({
    hash: dataETH?.hash,
    confirmations: 1,
    cacheTime: 0,
    staleTime: 5000,
    onSuccess: async (dataWaitETH, isSuccessWaitETH) => {
      console.log("MA QUI CI ENTRO ERRORE?");
      setTrans(dataETH?.hash);
      setCool(true);
    },
    onError: async (dataWaitETH, isErrorWaitETH) => {
      console.log("MA QUI CI ENTRO ERRORE?");
      toast("Something goes wrong with the buy...", {
        type: "error",
      });
    },
  });

  const {
    data: dataWaitETH,
    isSuccess: isSuccessWaitETH,
    isError: isErrorWaitETH,
    isLoading: isLoadingWaitETH,
    status: statusWaitETH,
  } = waitForTransactionETH;

  const { data: getUSDTallowance, isLoading: isUsdtAllowanceLoading } =
    useContractRead({
      address: USDTAddress?.toString(),
      abi: USDTABI,
      functionName: "allowance",
      args: [address, PresaleContract],
      enabled: address ? true : false,
      chainId: 1,
    });

  const {
    write: approveUSDT,
    isLoading: approve_USDTloading,
    data: dataApproveUSDT,
  } = useContractWrite({
    address: USDTAddress?.toString(),
    abi: USDTABI,
    functionName: "approve",
    chainId: 1,
    onSuccess: async (dataApproveUSDT) => {},
    onError: (...props) => console.log(...props),
  });

  const waitApprove = useWaitForTransaction({
    hash: dataApproveUSDT?.hash,
    confirmations: 15,
    cacheTime: 0,
    staleTime: 5000,
    onSuccess: async (dataApproveUSDTApprove, isSuccessWaitApprove) => {
      console.log("MA QUI CI ENTRO ERRORE?");
      toast("You can now buy!!", {
        type: "success",
      });
    },
    onError: async (dataApproveUSDTApprove, isErrorWaitApprove) => {
      toast("Something goes wrong with Approve...", {
        type: "error",
      });
    },
  });

  const {
    data: dataApproveUSDTApprove,
    isSuccess: isSuccessWaitApprove,
    isError: isErrorWaitApprove,
    isLoading: isLoadingWaitApprove,
    status: statusWaitApprove,
  } = waitApprove;

  const { data: priceETH, refetch: refetchETHLatestPrice } = useContractRead({
    address: PresaleContract?.toString(),
    abi: PRESALEABI,
    functionName: "getLatestPrice",
    enabled: address ? true : false,
    chainId: CHAIN,
    onSuccess(data) {
      console.log("Original Price", formatEther(data));
      let roundedPrice = Number(formatEther(data)).toFixed(3);

      let [intPart, decPart] = roundedPrice.split(".");

      if (decPart && decPart.length === 3) {
        let lastDigit = parseInt(decPart[2], 10);
        decPart = decPart.substring(0, 2) + lastDigit;
      }

      roundedPrice = intPart + "." + decPart;

      console.log("Adjusted Price", roundedPrice);
      setPrice(roundedPrice);
    },
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

  const { data: staked } = useContractRead({
    address: StakingContract?.toString(),
    abi: STAKINGABI,
    functionName: "poolStakers",
    chainId: 1,
    args: [address],
    enabled: address ? true : false,
    onSuccess(data) {},
    onError(error) {
      console.log("Error", error);
    },
  });

  const { data: usdRaisedr } = useContractRead({
    address: PresaleContract?.toString(),
    abi: PRESALEABI,
    functionName: "usdRaised",
    chainId: 1,
    onSuccess(data) {},
    onError(error) {
      console.log("Error", error);
    },
  });

  const handleAmountChange = async (e) => {
    if (tab == 1) {
      const tokenpresalevalue = 0.052;
      console.log("aaaa", e.target.value);
      console.log(price);
      refetchETHLatestPrice().then((ethLatestPrice) => {
        const tokens =
          (e.target.value * formatEther(ethLatestPrice.data)) /
          tokenpresalevalue;
        const buyi = Number(e.target.value) + 0.000025;
        console.log("AAAAA" , buyi);
        setBuying(parseUnits((buyi.toString()), 18));
        setAmount(tokens.toFixed(0));
      });
    } else if (tab == 2) {
      const tokenstakingvalue = 0.052;

      const tokens = (e.target.value * 1) / tokenstakingvalue;
      setAmount(tokens.toFixed(0));
    }
  };

  const handleTabClick = (selectedTab) => {
    setTab(selectedTab);

    switch (selectedTab) {
      case 1:
        setInputIcon("/images/icons/eth.svg");
        setPaymentMethod("ETH");
        setBuying(0);
        setAmount(0);
        writeableInputRef.current.value = 0;
        break;
      case 2:
        setInputIcon("/images/icons/usdt.svg");
        setPaymentMethod("USDT");
        setBuying(0);
        setAmount(0);
        writeableInputRef.current.value = 0;
        break;
      case 3:
        setInputIcon("/images/icons/card.svg");
        setPaymentMethod("CARD");
        break;
      default:
        // Handle other tabs if needed
        break;
    }
  };

  const buyNow = async () => {
    if (tab == 1) {
      if (Number(amount) < 200) {
        toast("Sorry! Minimum to buy is 200 tokens!!!", {
          type: "error",
        });
        return;
      } else {
        console.log(ethSelling);
        buyWithETH({
          args: [Number(amount)],
          value: ethSelling,
        });
      }
    } else {
      //usdt
      //USDT
      //approve function and allowance
      //check if he have for real the USDT
      if (USDTbalance < amount) {
        toast("You don't have enough USDT for doing this transaction!", {
          type: "error",
        });
        return;
      } else if (Number(amount) < 200) {
        toast("Sorry! Minimum to buy is 200 tokens!!!", {
          type: "error",
        });
        return;
      } else {
        if (Number(amount) <= 0) {
          toast("You can't buy 0 $ETHETF !!", { type: "error" });
          return;
        }
        if (
          getUSDTallowance !== undefined &&
          Number(amount) * 0.05 >
            +getUSDTallowance?.toString() / usdtDecimals &&
          +getUSDTallowance?.toString() / usdtDecimals > 0
        ) {
          toast(
            "Previously you approved a low allowance not using the 'Use Default' as a suggestion, now to spend more you would have to revoke the previous allowance and after that you need approve an allowance greater than or equal to the amount you want to spend.",
            { type: "error" }
          );
          approveUSDT({
            args: [PresaleContract?.toString(), "0"],
          });
          return;
        }
        if (
          getUSDTallowance !== undefined &&
          +getUSDTallowance?.toString() / usdtDecimals <= 0
        ) {
          approveUSDT({
            args: [
              PresaleContract?.toString(),
              "100000000000000000000000000000000000",
            ],
          });
          return;
        } else {
          buyWithUSD({
            args: [Number(amount)],
          });
        }
      }
    }
  };

  const buyNowAndStake = async () => {
    if (tab == 1) {
      if (Number(amount) < 200) {
        toast("Sorry! Minimum to buy is 200 tokens!!!", {
          type: "error",
        });
        return;
      } else if (ethBalance < 0.012) {
        toast(
          "0.012 ETH is reserved for commissions and you don't have it! Fill your Ethereum and coming back!",
          {
            type: "error",
          }
        );
      } else {
        console.log(ethSelling);
        buyWithEthAndStake({
          args: [Number(amount)],
          value: ethSelling,
        });
      }
    } else {
      //usdt
      //USDT
      //approve function and allowance
      //check if he have for real the USDT
      if (USDTbalance < amount) {
        toast("You don't have enough USDT for doing this transaction!", {
          type: "error",
        });
        return;
      } else {
        if (Number(amount) <= 0) {
          toast("You can't buy 0 $ETHETF !!", { type: "error" });
          return;
        }
        if (
          getUSDTallowance !== undefined &&
          Number(amount) * 0.05 >
            +getUSDTallowance?.toString() / usdtDecimals &&
          +getUSDTallowance?.toString() / usdtDecimals > 0
        ) {
          toast(
            "Previously you approved a low allowance not using the 'Use Default' as a suggestion, now to spend more you would have to revoke the previous allowance and after that you need approve an allowance greater than or equal to the amount you want to spend.",
            { type: "error" }
          );

          approveUSDT({
            args: [PresaleContract?.toString(), "0"],
          });
          return;
        }
        if (
          getUSDTallowance !== undefined &&
          +getUSDTallowance?.toString() / usdtDecimals <= 0
        ) {
          approveUSDT({
            args: [
              PresaleContract?.toString(),
              "100000000000000000000000000000000000",
            ],
          });
          return;
        } else {
          buyWithUSDTAndStake({
            args: [Number(amount)],
          });
        }
      }
    }
  };

  const maxTokensToBuys = async () => {
    //  console.log('noor')
    const gasFee = 0.015;

    // Show the maximum ETH that can be used to buy tokens without subtracting gas fee
    const userWalletBalance = ethBalance;
    writeableInputRef.current.value = userWalletBalance;

    // Calculate the corresponding number of tokens based on the latest price
    refetchETHLatestPrice().then((ethLatestPrice) => {
      const maxTokens =
        (userWalletBalance * formatEther(ethLatestPrice.data)) / 0.052;
      // setEthAmount(maxTokens.toFixed(0));

      setAmount(maxTokens);
      // readonlyInputRef.current.value = maxTokens;
    });
  };

  useEffect(() => {
    if (isSuccessWaitETH) {
      setLoading(false);
    }
    if (isSuccessWaitUSDT) {
      setLoading(false);
    }
    if (isSuccessWaitUSDTStake) {
      setLoading(false);
    }
    if (isSuccessWaitETHStake) {
      setLoading(false);
    }

    const xx = Boolean(
      isBuyWithUSDLoading |
        approve_USDTloading |
        isBuyWithUSDStakeLoading |
        isBuyWithETHLoading |
        isBuyWithETHLoadingStake
    );
    const xxx = Boolean(
      isBuyWithUSDLoading |
        approve_USDTloading |
        isBuyWithUSDStakeLoading |
        isBuyWithETHLoading |
        isBuyWithETHLoadingStake |
        bool
    );
    const yyy = Boolean(
      isLoadingWaitETH |
        isLoadingWaitUSDT |
        isLoadingWaitUSDTStake |
        isLoadingWaitETHStake
    );
    setLoading(yyy);
    setIsBuying(xx);
    setIsBuyingA(xxx);
  }, [
    isBuyWithUSDLoading,
    approve_USDTloading,
    isBuyWithUSDStakeLoading,
    isBuyWithETHLoading,
    isBuyWithETHLoadingStake,
    bool,
    isConnected,
    address,
    isSuccessWaitETH,
    // usdRaised,
    tab,
  ]);

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

  useEffect(() => {
    const getBalanceFormatted = async () => {
      if (address) {
        try {
          const balance = await fetchBalance({ address: address });

          console.log(balance.formatted);

          if (Number(balance.formatted) >= 0) {
            setEthBalance(Number(balance.formatted).toFixed(3));
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
    };

    if (address && staked && staked !== undefined) {
      if (Number(staked[4]) >= 5) {
        console.log("PLAN", Number(staked[4]));
        setBool(true);
      }
    }

    getBalanceFormatted();
  }, [address, usdRaisedr, isConnected, staked]);

  return (
    <div>
      {" "}
      <div
        className={twMerge(
          "grid grid-cols-3 gap-2 sm:gap-4 mb-4",
          !showCardOption ? "grid-cols-2" : null
        )}
      >
        <TabButton
          onClick={() => handleTabClick(1)}
          active={tab === 1 ? true : false}
          icon="/images/icons/eth.svg"
        >
          ETH
        </TabButton>
        <TabButton
          onClick={() => handleTabClick(2)}
          active={tab === 2 ? true : false}
          icon="/images/icons/usdt.svg"
        >
          USDT
        </TabButton>
        {showCardOption ? (
          <TabButton
            onClick={() => setCardPopup(true)}
            active={tab === 3 ? true : false}
            icon="/images/icons/card.svg"
          >
            CARD
          </TabButton>
        ) : null}
      </div>
      {isConnected ? (
        <div className="flex items-center space-x-10 mt-4 mb-6">
          <div className="flex-1 h-[1px] bg-white opacity-20"></div>
          <Typography variant="sm" className="text-white font-medium">
            ETH balance {ethBalance}
          </Typography>
          <div className="flex-1 h-[1px] bg-white opacity-20"></div>
        </div>
      ) : null}
      {isBuying ? (
        <div className="mb-4">
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
        </div>
      ) : null}
      {loading ? (
        <div className="mb-4">
          <img
            src="/images/logo-circular-black.svg"
            className="max-w-[3rem] w-full mx-auto mb-3 invert animate-spin"
            alt=""
          />

          <Typography
            variant="lg"
            className="text-center text-green font-semibold mb-3 uppercase"
          >
            Your Transaction is in Progress
          </Typography>

          <Typography variant="sm" className="text-center text-white">
            {amount ? amount : 0} tokens will be purchased once the transaction
            is confirmed
          </Typography>
        </div>
      ) : null}
      {cool ? (
        <div className="mb-4">
          <div className="max-w-[3rem] h-[3rem] rounded-full w-full mx-auto mb-3 flex items-center justify-center text-white text-3xl bg-[#42c042]">
            <MdOutlineDone />
          </div>

          <Typography
            variant="lg"
            className="text-center text-green font-semibold mb-3 uppercase"
          >
            Your Purchase was Successful!
          </Typography>

          <Typography variant="sm" className="text-center text-white mb-5">
            {amount ? amount : 0} tokens have now been purchase! If you stake
            it, check dashboard!
          </Typography>

          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="green"
              className="text-sm uppercase"
              onClick={() =>
                window.open(
                  `https://etherscan.io/tx/${transactionId}`,
                  "_blank"
                )
              }
            >
              View Transaction
            </Button>
            <Button
              variant="green"
              className="text-sm uppercase"
              onClick={() => setCool(false)}
            >
              Start Again
            </Button>
          </div>
        </div>
      ) : null}
      {true ? (
        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          <div>
            <div className="mb-2 flex justify-between items-center">
              <Typography
                variant="xs"
                className="opacity-60 text-white font-light tracking-[2px]"
              >
                Pay with {paymentMethod}
              </Typography>

              <button
                className="text-green font-semibold text-xs"
                onClick={maxTokensToBuys}
              >
                Max
              </button>
            </div>
            <PresaleInput
              placeholder="0"
              icon={inputIcon}
              onChange={handleAmountChange}
              inputRef={writeableInputRef}
            />
          </div>

          <div>
            <Typography
              variant="xs"
              className="opacity-60 text-white font-light tracking-[2px] mb-2"
            >
              Receive ETHETF
            </Typography>

            <PresaleInput
              placeholder=""
              value={amount}
              disabled
              icon="/images/logo-circular-black.svg"
              iconClassName="invert"
              inputRef={readonlyInputRef}
            />
          </div>

          {isConnected && isOnCorrectChain ? (
            <Button
              variant="green"
              className={twMerge(
                "text-sm font-semibold",
                showOnlyStakeOption ? "col-span-2" : null
              )}
              onClick={() => buyNowAndStake()}
              disabled={isBuyingA}
            >
              Buy and Stake for {total?.toFixed(0)}% Rewards
            </Button>
          ) : null}

          {isConnected && isOnCorrectChain && showOnlyStakeOption === false ? (
            <Button
              variant="green"
              className="text-sm font-semibold"
              onClick={() => buyNow()}
              disabled={isBuying}
            >
              Buy Ethereum ETF Token Now
            </Button>
          ) : null}

          {!isConnected ? (
            <Button
              variant="green"
              className="text-sm font-semibold px-0 space-x-2 col-span-2"
              onClick={() => open()}
              // onClick={() => setWalletModal(true)}
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
          ) : null}

          {isConnected && !isOnCorrectChain ? (
            <Button
              onClick={() => switchNetwork()}
              variant="green"
              className="text-base col-span-2"
            >
              Switch to ETH Network
            </Button>
          ) : null}
        </div>
      ) : null}
      <Typography
        as="a"
        href="https://widget.wert.io/default/widget/?commodity=ETH%3AEthereum"
        target="_blank"
        variant="sm"
        className="w-fit block mx-auto underline text-white hover:no-underline cursor-pointer"
      >
        Not enough ETH? Top up now
      </Typography>
      {showCardOption ? (
        <TransitionWrapper open={cardPopup} className="max-w-[26rem] w-[90%]">
          <BuyWithCard handleClose={closeCardPopup} />
        </TransitionWrapper>
      ) : null}
    </div>
  );
}

export default PresaleTabsAndInput;
