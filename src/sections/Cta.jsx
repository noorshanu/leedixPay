import React from 'react'

function Cta() {
  return (
   <section>
    <div className=' bg-black container-wrapper px-6 py-12 rounded-sm'>
        <div className=' flex justify-evenly items-center flex-col sm:flex-row gap-4'>

            <div className=' text-center  mb-8 sm:mb-2'>
                <h1 className='  text-7xl text-white mb-5'>$0</h1>
                <p className=' text-white text-xl font-sohaReg '>No setup cost </p>
                <p className=' text-white text-xl font-sohaReg '>No subscription fee.</p>
            </div>

            <div className=' text-center  mb-8 sm:mb-2'>
                <h1 className='  text-7xl text-white mb-5'>1.5%</h1>
                <p className=' text-white text-xl font-sohaReg '>Clear fee. </p>
                <p className=' text-white text-xl font-sohaReg '> Pay for what you use.</p>
            </div>

            <div className=' text-center  mb-8 sm:mb-2'>
                <h1 className='  text-7xl text-white mb-5'>1% $2</h1>
                <p className=' text-white text-xl font-sohaReg '>Fair cost </p>
                <p className=' text-white text-xl font-sohaReg '>for Fiat Off-Ramp.</p>
            </div>

        </div>

    </div>
   </section>
  )
}

export default Cta