import React from 'react'

function Cta() {
  return (
   <section>
    <div className=' bg-black container-wrapper px-6 py-12 rounded-sm'>
        <div className=' flex justify-evenly items-center flex-col sm:flex-row gap-4'>

            <div className=' text-center  mb-8 sm:mb-2'>
                <h1 className='  text-7xl text-white mb-5'>$0</h1>
                <p className=' text-white text-xl font-sohaReg '>Aucun frais d'installation </p>
                <p className=' text-white text-xl font-sohaReg '>Pas de frais d'abonnement.</p>
            </div>

            <div className=' text-center  mb-8 sm:mb-2'>
                <h1 className='  text-7xl text-white mb-5'>1.5%</h1>
                <p className=' text-white text-xl font-sohaReg '>Frais clairs. </p>
                <p className=' text-white text-xl font-sohaReg '> Payez ce que vous utilisez.</p>
            </div>

            <div className=' text-center  mb-8 sm:mb-2'>
                <h1 className='  text-7xl text-white mb-5'>1% $2</h1>
                <p className=' text-white text-xl font-sohaReg '>Coût juste </p>
                <p className=' text-white text-xl font-sohaReg '>Pour rampe de sortie Fiat.</p>
            </div>

        </div>

    </div>
   </section>
  )
}

export default Cta