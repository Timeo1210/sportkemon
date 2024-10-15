import Image from "next/image";
import localFont from "next/font/local";

import navStyles from "@/styles/NavMenu.module.css";
import { useState } from "react";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [displayScrollingMenu, setDisplayScrollingMenu] = useState(false);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col justify-start min-h-screen gap-16`}
    >
      <header
        style={{ fontFamily: "Alata" }}
        className="flex justify-between w-full relative p-8 h-32"
      >
        <div className="relative z-10 text-3xl sm:text-5xl font-bold flex items-center">
          <Image
            className="dark:invert mt-2 mx-1"
            src="/images/icon-pokeball.svg"
            alt="Pokeball logo"
            width={40}
            height={40}
            priority
          />
          <Link href="/">Sportkemon</Link>
          <Image
            className="dark:invert mt-2 mx-1"
            src="/images/icon-pokeball.svg"
            alt="Pokeball icon"
            width={40}
            height={40}
            priority
          />
        </div>
        <nav className="flex items-center">
          <button
            className={`burger-menu flex md:hidden ${
              displayScrollingMenu ? "open" : ""
            }`}
            onClick={() => setDisplayScrollingMenu(!displayScrollingMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul
            className={`${navStyles.list} ${
              displayScrollingMenu ? "flex" : "hidden"
            }  md:flex md:flex-row md:justify-around text-5xl md:text-3xl`}
          >
            <li className="m-6 md:mr-4 font-bold">
              <Link href="/contacts">Contacts</Link>
            </li>
            <li className="m-6 md:mr-4 font-bold">
              <Link href="/about">A Propos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col justify-center gap-8 row-start-2 items-center">
        <div className="isolate px-6 pt-14 lg:px-8 -z-10">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 w-screen h-screen"
            aria-hidden="true"
          >
            {/* from-[#ff80b5]  to-[#9089fc]*/}
            {/* from-[#9089fc] to-[#f2ff00] */}
            <div
              className="left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5]  to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>
        <Image
          className="dark:invert"
          src="/images/sportkemon-logo.png"
          alt="Sportkemon logo"
          width={360}
          height={76}
          priority
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/Plaquette.pdf"
          style={{ fontFamily: "Alata", letterSpacing: "0.1em" }}
          className="font-bold text-lg text rounded-md bg-indigo-600 px-3.5 py-2.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Plaquette
        </a>
      </main>
    </div>

    //   className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    // >
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="https://nextjs.org/icons/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           src/pages/index.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="https://nextjs.org/icons/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
