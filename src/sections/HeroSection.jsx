import Button from "../components/Button";


import Typography from "../components/Typography";

export default function HeroSection() {
  return (
    <>
      <section className=" ">
        <div className="container-wrapper py-6 grid lg:grid-cols-[1fr_.7fr] gap-10 relative items-center">
          <div>
            <Typography className="text-[42px] xl:text-[70px] min-[460px]:space-x-2 lh-1_1 max-sm:mb-4">
              <span>Bringing Dreams to Life, One Transfer at a Time</span>
            </Typography>

            <Typography className="text-[30px] xl:text-[40px] font-medium lh-1_2 tracking-[-2px] mb-8">
              LeedixPay is a secure and fast point of sale for physical stores
              and online shops that accepts Ethereum and many other coins and
              instantly converts them to Dai stablecoin so you don’t have to
              worry about volatility. CONTACT US
            </Typography>

            <div className="flex items-center flex-wrap [&>*]:mx-3 [&>*]:my-2 -mx-3 -my-2">
              <Button
                as="a"
                type="a"
                startIcon={<img src="/images/icons/whitepaper.svg" />}
                variant="outlined"
                href="/images/whitepaper.pdf"
                className="max-sm:flex-1"
              >
                {"WHITEPAPER"}
              </Button>

              <Button
                startIcon={<img src="/images/icons/audit.svg" />}
                className="font-semibold max-sm:flex-1"
              >
                {"AUDIT"}
              </Button>
            </div>
          </div>

          <img src="images/phone.png" alt="" />
        </div>
      </section>
    </>
  );
}
