import { Link } from "react-router-dom";

import Typography from "./Typography";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "./Button";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const [isSidebarOpen, setSidebarVisibility] = useState(false);

  const closeSidebar = () => setSidebarVisibility(false);
  const openSidebar = () => setSidebarVisibility(true);

  return (
    <nav className="  ">
      <header className=" relative">
        <div className="container-wrapper h-[72px] flex items-center justify-between">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt=""
              width="150px"
              height="28px"
              className="cursor-pointer"
            />
          </Link>

          <button
            onClick={isSidebarOpen ? closeSidebar : openSidebar}
            className="flex lg:hidden text-black text-3xl"
          >
            {isSidebarOpen ? <MdClose /> : <AiOutlineMenu />}
          </button>

          <aside
            className={twMerge(
              "max-lg:fixed bottom-0 right-0 max-lg:w-[320px] max-lg:h-[calc(100vh-72px)] max-lg:bg-text  flex flex-col lg:flex-row lg:items-center lg:space-x-10 max-lg:text-white lg:[&>*]:text-black/60 [&>*]:tracking-[1px] max-lg:p-5 max-lg:[&>a]:py-2 max-lg:[&>a]:border-b max-lg:[&>a]:px-3 max-lg:[&>a]:mb-2 max-lg:[&>a]:uppercase transition-all duration-200 translate-x-[320px] lg:translate-x-0 z-[1000] max-lg:overflow-y-auto",
              isSidebarOpen ? "translate-x-0" : null
            )}
          >
            <Typography
              as={Link}
              variant="sm"
              className="font-medium cursor-pointer"
              onClick={() => setSidebarVisibility(false)}
            >
              Staking
            </Typography>
            <Typography
              onClick={closeSidebar}
              id="about"
              variant="sm"
              className="font-medium cursor-pointer"
            >
              About
            </Typography>

            <Typography
              as="a"
              onClick={closeSidebar}
              id="how-to-buy"
              href=""
              variant="sm"
              className="font-medium cursor-pointer"
            >
              How To Buy
            </Typography>

            <Typography
              as="a"
              onClick={closeSidebar}
              id="roadmap"
              href="/"
              variant="sm"
              className="font-medium cursor-pointer"
            >
              Roadmap
            </Typography>

            <Typography
              onClick={closeSidebar}
              id="faqs"
              to=""
              variant="sm"
              className="font-medium cursor-pointer"
            >
              FAQS
            </Typography>

            <button className=" btn-nav rounded-md text-sm h-10 mt-4 mb-6 text-white ">
              Buy ETHETF Token
            </button>

            <div className="flex max-lg:space-x-8 space-x-4 justify-center max-lg:[&>*]:invert">
              <a
                rel="noreferrer"
                href="https://x.com/ethetf_token"
                target="_blank"
              >
                <img
                  src="/images/icons/twitter.svg"
                  className="max-lg:h-8 h-6"
                  alt=""
                />
              </a>
              <a
                rel="noreferrer"
                href="https://t.me/ETHETF_Token"
                target="_blank"
              >
                <img
                  src="/images/icons/telegram.svg"
                  className="max-lg:h-8 h-6"
                  alt=""
                />
              </a>
            </div>
          </aside>
        </div>
      </header>
    </nav>
  );
}
