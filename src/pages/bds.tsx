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
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col justify-start min-h-screen gap-16 w-screen relative`}
    >
      <header
        style={{ fontFamily: "Alata" }}
        className="flex justify-between w-full relative p-8 h-32 z-10"
      >
        <div className="relative z-10 text-3xl sm:text-5xl font-bold flex items-center">
          <Image
            className={`${displayScrollingMenu ? "dark:invert" : ""} mt-2 mx-1`}
            src="/images/icon-ricks.png"
            alt="Pokeball logo"
            width={40}
            height={40}
            priority
          />
          <Link href="/">Sportkemon</Link>
          <Image
            className={`${displayScrollingMenu ? "dark:invert" : ""} mt-2 mx-1`}
            src="/images/icon-ricks.png"
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
        {/* from-[#ff80b5]  to-[#9089fc]*/}
        {/* from-[#9089fc] to-[#f2ff00] */}
        <div className="isolate px-6 pt-14 lg:px-8 z-2">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 w-screen h-screen"
            aria-hidden="true"
          >
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
          src="/images/logo-ricks.png"
          alt="Rick et Sporty logo"
          width={414}
          height={88}
          style={{ zIndex: 7 }}
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/Plaquette.pdf"
          style={{ fontFamily: "Alata", letterSpacing: "0.1em", zIndex: 7 }}
          className="font-bold text-lg text rounded-md bg-indigo-600 px-3.5 py-2.5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Plaquette
        </a>
        <div className="isolate px-6 pt-14 lg:px-8 z-2">
          <div
            className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-30 sm:right-0"
            aria-hidden="true"
          >
            <div
              className="left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] translate-y-1/2 translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5]  to-[#9089fc] opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>
        <section
          style={{ maxWidth: "850px" }}
          className="relative flex items-center justify-center min-h-screen"
        >
          <div className="relative mx-5 p-8 bg-white rounded-lg shadow-2xl">
            <div className="absolute inset-0 transform-gpu overflow-hidden blur-3xl -z-10">
              <div
                className="left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-x-8 h-full">
              <div className="h-full w-full flex justify-center items-center mb-5 sm:mb-0">
                <Image
                  src="/images/affiche1-ricks.jpg"
                  alt="Affiche 1 Rick et Sporty"
                  width={414}
                  height={88}
                  className="relative z-10 rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center h-full w-full">
                <div className="flex flex-col mb-6">
                  <h1
                    style={{ color: "#8ae686" }}
                    className="text-3xl font-extrabold text-gray-800"
                  >
                    SOIREE RICK ET SPORTY
                  </h1>
                  <h1 className="text-3xl font-bold text-gray-800">🚀 🌌 👽</h1>
                  <h1
                    style={{ color: "#fa4bdf" }}
                    className="text-3xl font-bold text-gray-800"
                  >
                    TRIQUE ET HORNY
                  </h1>
                  <h2 className="text-3xl font-extrabold text-gray-800">
                    14/12 20h-00h
                  </h2>
                </div>
                <div>
                  <p className="mt-2 text-gray-600">
                    ☢️ Attention Terriens ! Prêts pour la prochaine destination
                    ? Les Ricks vous ont concocté une soirée à retourner votre
                    continuum espace-temps! ⏳ Au programme: - Roulette à lots -
                    Stand photo 📸 - Tire ton cocktail 🍸 - Chamboule tout 🥎 Tu
                    pourras également profiter d&#39;un repas succulent: des
                    tacos 🌮 (avec option végé) et des barbes à papas! Ne rate
                    pas cette ambiance incroyable, et surtout la petite surprise
                    de fin 👀, tout est dans le titre…😈
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{ bottom: "-55px", right: "-55px" }}
              className="absolute p-4 -rotate-45"
            >
              <Image
                src="/images/drunk-rick.png"
                alt="Pickle Rick"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
        <section
          style={{ maxWidth: "850px" }}
          className="relative flex items-center justify-center min-h-screen"
        >
          <div className="relative mx-5 p-8 bg-white rounded-lg shadow-2xl">
            <div className="absolute inset-0 transform-gpu overflow-hidden blur-3xl -z-10">
              <div
                className="left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-x-8 h-full">
              <div className="h-full w-full flex justify-center items-center mb-5 sm:mb-0">
                <Image
                  src="/images/affiche2-ricks.png"
                  alt="Affiche 1 Rick et Sporty"
                  width={414}
                  height={88}
                  className="relative z-10 rounded-lg shadow-lg"
                />
              </div>
              <div className="text-center h-full w-full">
                <div className="flex flex-col mb-6">
                  <h1
                    style={{ color: "#d9f359" }}
                    className="text-3xl font-extrabold text-gray-800"
                  >
                    APRÈM RICK ET SPORTY
                  </h1>
                  <h1 className="text-3xl font-bold text-gray-800">🫧 🌶️ 🥊</h1>
                  <h1
                    style={{ color: "#8ebfe0" }}
                    className="text-3xl font-bold text-gray-800"
                  >
                    LE MULTIVERS
                  </h1>
                  <h2 className="text-3xl font-extrabold text-gray-800">
                    14/12 14h-18h
                  </h2>
                </div>
                <div>
                  <p className="mt-2 text-gray-600">
                    ☢️ Attention Terriens ! Accrochez-vous pour une aprèm à vous
                    couper le souffle 💨préparée par les Ricks! Au programme: -
                    Bubble 🫧foot - Rick and Spicy 🌶️ - Machine à coup de poing
                    🥊 - Et d’autres jeux à découvrir ... Le tout en musique
                    avec l’EH! Ramène tes potes et prépare-toi à vivre la
                    meilleure aprèm des campagnes! On vous attend nombreux chez
                    les Ricks 💥
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{ bottom: "-55px", right: "-55px" }}
              className="absolute p-4 -rotate-45"
            >
              <Image
                src="/images/pickle-rick.png"
                alt="Pickle Rick"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
