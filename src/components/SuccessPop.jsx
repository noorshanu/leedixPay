import React from 'react'
import { useState } from "react";
import { IoClose } from "react-icons/io5";
function SuccessPop({handleClose}) {
  return (
   <>
    <div className="bg-[#fff] p-[.6rem] relative rounded-lg border border-[#000]">
      <div className="py-0 bg-main-bg max-h-[20rem] h-[26vh] relative z-10">
        <button
          onClick={() => {
            if (handleClose) {
              handleClose();
            }
          }}
          className="flex absolute top-[-1rem] right-[-1rem] text-2xl bg-black text-white w-[1.6em] h-[1.6em] rounded-full items-center justify-center shadow-[0_0_10px_black]"
        >
          <IoClose />
        </button>

        
<div>
    thanks for setBuying
</div>
      
      </div>
    </div>
   </>
  )
}

export default SuccessPop