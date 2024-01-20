import React from "react";
import PresaleBox from "../components/PresaleBox";

function PutMoney() {
  return (
    <section>
      <div className="container-wrapper">
        <div className=" flex items-center flex-col sm:flex-row justify-between gap-6">
         <div className=" max-w-lg w-full">
        
        <PresaleBox/>
         </div>

          <div>
            <img src="images/logo.png" alt="" />

            <h2>Put your money to work</h2>

            <p>
              LeedixPay is a secure and fast point of sale for physical stores
              and online shops that accepts Ethereum and many other coins and
              instantly converts them to Dai stablecoin so you don’t have to
              worry about volatility. CONTACT US
            </p>

            <div className=" flex">
                <p>
                How to buy LDP
                </p>

                <button> Whitepaper</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PutMoney;
