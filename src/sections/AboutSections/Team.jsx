import React from 'react'

function Team() {
  return (
    <section className=' py-8 my-4'>
        <div className="container-wrapper">

          <div>
            <h1 className=' text-center font-sohaBold text-5xl'>Team</h1>
            <p className=' font-sohaReg text-center text-xl'>Leedixpay Leadership Team</p>


          </div>

          <div className=' grid grid-cols-1 sm:grid-cols-3 gap-5 '>

           
              <img src="images/team.png" alt="" className=' mt-3' />
              <img src="images/team.png" alt="" className=' mt-3' />
              <img src="images/team.png" alt="" className=' mt-3' />
              <img src="images/team.png" alt="" className=' mt-3'/>
              <img src="images/team.png" alt="" className=' mt-3' />
              <img src="images/team.png" alt="" className=' mt-3' />
          


          </div>
        </div>
    </section>
  )
}

export default Team