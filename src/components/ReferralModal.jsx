import Button from "./Button";
import ReferralLink from "./ReferralLink";
import TransitionWrapper from "./TransitionWrapper";
import Typography from "./Typography";

export default function ReferralModal({ open, handleClose }) {
  return (
    <TransitionWrapper open={open} className="max-w-[360px] w-[90%] mx-auto">
      <div className="rounded-xl border border-white overflow-hidden bg-white">
        <header className="py-4 bg-text-2 mb-5">
          <Typography
            variant="xl"
            className="text-center uppercase font-semibold text-white"
          >
            REFERRAL LINK
          </Typography>
        </header>

        <main className="px-5 pb-6">
          <Typography className="text-center font-medium mb-5">
            Copy your referral link below and send it to your friends. For every
            purchase made using this link, you’ll receive 5% of the purchase
            amount.
          </Typography>

          <div className="max-w-[16rem] w-full mx-auto">
            <ReferralLink />
          </div>

          <Button onClick={handleClose} className="w-full text-base mt-6">
            Close
          </Button>
        </main>
      </div>
    </TransitionWrapper>
  );
}
