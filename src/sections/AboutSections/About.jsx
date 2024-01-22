import React from 'react'

function About() {
  return (
    <section className='about my-16 py-8'>
    <div className='container-wrapper'>
    <div className=" flex  flex-col sm:flex-row justify-between gap-2 ">
         <div className=" max-w-lg w-full">
         <img src="images/qrcode.png" alt="" className=" mb-4 mx-auto" />
         <div className=' flex justify-center  items-center'>
          <img src="images/google.png" alt="" />
          <img src="images/apple.png" alt="" />

         </div>
   
         </div>

          <div>
            <img src="images/logo.png" alt="" className=" mb-4" />

            <h2 className=" font-sohaBold text-5xl py-2 mb-2">About  LeedixPay</h2>

            <p className=" max-w-5xl font-sohaReg text-lg">
              LeedixPay is a secure and fast point of sale for physical stores
              and online shops that <br />accepts Ethereum and many other coins and
              instantly converts them to Dai <br /> stablecoin so you don’t have to
              worry about volatility. CONTACT US
            </p>

      
          </div>
        </div>

    </div>
</section>
  )
}

export default About