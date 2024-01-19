
import Button from "./Button";
import Typography from "./Typography";

import ProgressBar from "./ProgressBar";





import Timer from "./Timer";

import PresaleTabsAndInput from "./PresaleTabsAndInput";

function PresaleBox() {
 

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
            <ProgressBar progress='20%' />
          </div>

          <div className="space-y-2.5">
            <Typography variant="xs" className="text-center text-white/50">
              <span className="font-bold text-white">USDT RAISED:</span> $
           
              / $489,600.00
            </Typography>
            <Typography variant="xs" className="text-center text-white/50">
              <span className="text-white">YOUR PURCHASED ETHETF</span> ={" "}
         
            
            </Typography>
            <Typography variant="xs" className="text-center text-white/50">
              <span className="text-white">YOUR STAKED ETHETF</span> ={" "}
              {/* {staked ? formatEther(staked[0]) : 0}
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
              </button> */}
            </Typography>
          </div>

         
            <Button
          
              variant="green-outlined"
              className="text-base w-fit mx-auto mt-4 mb-5 rounded-lg px-4 h-[36px]"
            >
              Refer and Earn
            </Button>
     

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

      {/* <TransitionWrapper
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
      </TransitionWrapper> */}

    

    
    </>
  );
}

export default PresaleBox;
