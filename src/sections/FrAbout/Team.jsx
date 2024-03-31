import React from 'react'

function Team() {
  return (
    <section className=' py-8 my-4'>
        <div className="container-wrapper">

          <div>
            <h1 className=' text-center font-sohaBold text-5xl mb-1'>Équipe</h1>
            <p className=' font-sohaReg text-center text-4xl py-3'>Équipe de direction Leedixpa</p>


          </div>

          <div className=' grid grid-cols-1 sm:grid-cols-3 gap-5 py-8'>

          <img src="/images/4.png" alt="" className=' mt-3 h-[300px] mx-auto'/>
              <img src="/images/1.png" alt="" className=' mt-3 h-[300px] mx-auto' />
              <img src="/images/2.png" alt="" className=' mt-3 h-[300px] mx-auto' />
              <img src="/images/3.png" alt="" className=' mt-3 h-[300px] mx-auto' />
          
              {/* <img src="/images/team.png" alt="" className=' mt-3 h-[300px] mx-auto' />
              <img src="/images/team.png" alt="" className=' mt-3 h-[300px] mx-auto' /> */}
          


          </div>
        </div>
    </section>
  )
}

export default Team