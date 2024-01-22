import React from 'react'

function About() {
  return (
    <section className='about'>
    <div className='container-wrapper'>
    <div className=" flex  flex-col sm:flex-row justify-between gap-2 items-center">
         <div className=" max-w-lg w-full">
         <img src="images/logo.png" alt="" className=" mb-4" />
   
         </div>

          <div>
            <img src="images/logo.png" alt="" className=" mb-4" />

            <h2 className=" font-sohaBold text-5xl py-2 mb-4 lh-1_5">Put your money <br /> to work</h2>

            <p className=" max-w-5xl font-sohaReg text-lg">
              LeedixPay is a secure and fast point of sale for physical stores
              and online shops that <br />accepts Ethereum and many other coins and
              instantly converts them to Dai <br /> stablecoin so you don’t have to
              worry about volatility. CONTACT US
            </p>

            <div className=" flex gap-4 items-center mt-14">
                <p className=" font-sohaReg text-3xl">
                How to buy LDP
                </p>

                <button className="btn-hero px-12 py-2 font-sohaBold text-lg text-white"> Whitepaper</button>
            </div>
          </div>
        </div>

    </div>
</section>
  )
}

export default About