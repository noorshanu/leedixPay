import React from 'react'

function Team() {
  return (
    <section className=' py-8 my-4'>
        <div className="container-wrapper">

          <div>
            <h1 className=' text-center'>Team</h1>


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