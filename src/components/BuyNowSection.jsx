import React, { useState } from 'react';
import CopyTextModal from './CopyTextModel';

function BuyNowSection() {
    const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  return (
   <section className=' bg-white py-12'>
    <div className=' container-wrapper'>

        <h2 className=' text-center text-3xl font-bold py-6'>Send SOLANA in this address to get tokens</h2>
        <div className=' flex flex-col sm:flex-row justify-center gap-8 items-center'>
            <div>
                <img src="images/qr2.png" alt="" className=' h-[300px] mx-auto' />

                {/* <p className=' text-xs sm:text-lg font-semibold hidden sm:block'>
                0x9d0c7c09c712a8a7cb4d9889849e126dc78be6d0  
                </p> */}

      <CopyTextModal text='0x9d0c7c09c712a8a7cb4d9889849e126dc78be6d0 '/>
            </div>

            <div>
               <p className=' text-lg py-2'> Send only solana token to this address</p>
               <p className=' text-lg py-2'>
                Min 0.5 solana
               </p>
               <p className=' text-lg py-2'>
                Mac 5 SOL
               </p>

               <p className=' text-lg py-2'>
                Tokens will be automatically send to your wallet.
               </p>
               <p className=' text-lg py-2'>Presale end date 25/05/2024</p>
            </div>

        </div>

    </div>

   </section>
  )
}

export default BuyNowSection