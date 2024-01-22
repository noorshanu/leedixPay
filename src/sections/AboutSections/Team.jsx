import React from 'react'

function Team() {
  return (
    <section className=' py-8 my-4'>
        <div className="container-wrapper">

          <div>
            <h1 className=' text-center font-sohaBold text-5xl mb-1'>Team</h1>
            <p className=' font-sohaReg text-center text-4xl py-3'>Leedixpay Leadership Team</p>


          </div>

          <div className=' grid grid-cols-1 sm:grid-cols-3 gap-5 py-8'>

           
              <img src="images/team.png" alt="" className=' mt-3 h-[300px]' />
              <img src="images/team.png" alt="" className=' mt-3 h-[300px]' />
              <img src="images/team.png" alt="" className=' mt-3 h-[300px]' />
              <img src="images/team.png" alt="" className=' mt-3 h-[300px]'/>
              <img src="images/team.png" alt="" className=' mt-3 h-[300px]' />
              <img src="images/team.png" alt="" className=' mt-3 h-[300px]' />
          


          </div>
        </div>
    </section>
  )
}

export default Team