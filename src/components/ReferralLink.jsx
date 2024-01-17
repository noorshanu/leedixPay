import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCopy, FaRegCopy } from "react-icons/fa";

export default function ReferralLink() {
  const [referralLink, setReferralLink] = useState('');
  const [isCopied, setCopied] = useState(false);

  // Genera una stringa casuale
  function generateRandomString(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  // Imposta il link di referral
  useEffect(() => {
    const currentSite = window.location.hostname;
    const randomString = generateRandomString();
    setReferralLink(`https://${currentSite}/?aff=${randomString}`);
  }, []);

  // Gestione del copia-incolla e del timeout
  useEffect(() => {
    let timeOut;
    if (isCopied) {
      new Promise((resolve) => {
        timeOut = setTimeout(() => {
          resolve();
        }, 2000);
      }).then(() => {
        clearTimeout(timeOut);
        setCopied(false);
      });
    }
  }, [isCopied]);

  async function handleCopy() {
    setCopied(true);
  }

  return (
    <CopyToClipboard text={referralLink} onCopy={handleCopy}>
      <button className="h-[36px] border-2 border-text-2 rounded-full flex items-center px-3 space-x-4 w-full active:bg-text-2/20">
        <span className="overflow-hidden w-full">
          <span className="cut-text text-[13px] font-medium">
            {referralLink ? referralLink : "loading..."}
          </span>
        </span>

        <button className="text-base text-text-2" disabled={isCopied}>
          {isCopied ? <FaCopy /> : <FaRegCopy />}
        </button>
      </button>
    </CopyToClipboard>
  );
}
