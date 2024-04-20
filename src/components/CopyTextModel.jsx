import React, { useState } from 'react';
import { IoMdCopy } from "react-icons/io";

const CopyTextModal = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div className=' flex flex-col sm:flex-row justify-center gap-4 items-center'>
      <p className='text-xs sm:text-lg font-semibold'>{text}</p>
      <button onClick={handleCopy} className='flex items-center gap-2 text-base font-bold'> <IoMdCopy className=' text-xl' />{copied ? 'Copied' : ' '}</button>
    </div>
  );
};

export default CopyTextModal;