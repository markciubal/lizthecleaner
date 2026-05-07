'use client'

import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header/Header";
export default function Home() {
  const [windowSum, setWindowSum] = useState(0);
  const [windowSumCost, setWindowSumCost] = useState(0);

  const [squareFootage, setSquareFootage] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const perWindowCost = 20;
  const pricePerSquareFoot = 400/1298;

  const calculateWindowSum = (windowCount) => {
    setWindowSumCost(windowCount * perWindowCost);
  }

  return (
    <>
      <Header />
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-800 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-8 px-8 bg-white dark:bg-black sm:items-start">
          <div className="flex flex-col justify-between gap-2 sm:items-start sm:text-left">
            <div className="flex items-center">
              <div className="">
                <h1 className="liz text-left max-w-xs text-5xl font-semibold text-black uppercase">
                  Hi, I'm Liz!
                </h1>
                <p className="tagline mx-2 align-top text-center max-w-md text-md leading-8 text-gray-500">
                  Looking for a cleaner?<br/>You found the best!
                </p>
              </div>
              <div>
                <Image height="200" width="200" className="mx-2" src="/woman-user-circle-black-icon.svg" alt="" />
              </div>
            </div>
            <div>
              <span>🌎 Sacramento, CA</span>
            </div>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold my-2 uppercase" id="cleaning-checklist">🫧 Cleaning Checklist</h2>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wide">🧑‍🍳 Kitchen</h2>
                <ul className="list-decimal pl-6 space-y-1.5 text-gray-200">
                  <li>Counter tops cleaned & sanitized</li>
                  <li>Top and front of range cleaned</li>
                  <li>Outside of the range hood cleaned</li>
                  <li>Microwave cleaned inside and out</li>
                  <li>Floors deep cleaned, hand washed or cotton string mopped</li>
                  <li>Top and exterior of refrigerator cleaned</li>
                  <li>Faucets, sinks and drains scrubbed with a toothbrush</li>
                  <li>Sinks washed and sanitized</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wide">🚽 Bathrooms</h2>
                <ul className="list-decimal pl-6 space-y-1.5 text-gray-200">
                  <li>Vanity and sinks cleaned and sanitized</li>
                  <li>Scrub and sanitize bathtubs, tile walls and showers, mildew free</li>
                  <li>Floors deep cleaned and sanitized</li>
                  <li>Toilets thoroughly cleaned and sanitized</li>
                  <li>Doors, baseboards and cabinets spot cleaned</li>
                  <li>Mirrors and chrome fixtures cleaned and shined</li>
                  <li>Faucets, sinks, and drains scrubbed with a toothbrush</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wide">🛏️ Bedrooms</h2>
                <ul className="list-decimal pl-6 space-y-1.5 text-gray-200">
                  <li>Carpets vacuumed and edged</li>
                  <li>Furniture cleaned</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wide">🎩 Formal Room, Great Room, Den</h2>
                <ul className="list-decimal pl-6 space-y-1.5 text-gray-200">
                  <li>Furniture cleaned</li>
                  <li>Upholstery cleaned and dust free</li>
                  <li>Vacuum furniture including under any cushions</li>
                  <li>Carpets vacuumed and edged</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wide">🧺 Laundry Room</h2>
                <ul className="list-decimal pl-6 space-y-1.5 text-gray-200">
                  <li>All appliances cleaned</li>
                  <li>Floors vacuumed and mopped</li>
                  <li>All sinks and counters cleaned</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wide">🏡 All Rooms</h2>
                <ul className="list-decimal pl-6 space-y-1.5 text-gray-200">
                  <li>Mirrors cleaned and shined</li>
                  <li>Picture frames dusted</li>
                  <li>Flat surfaces hand wiped</li>
                  <li>Lamp shades dusted</li>
                  <li>Carpets vacuumed and edged</li>
                  <li>Stairs vacuumed</li>
                  <li>Empty closet floors vacuumed</li>
                  <li>All readily floors vacuumed</li>
                  <li>Window sills cleaned and ledges hand wiped</li>
                  <li>Cobwebs removed</li>
                  <li>Doors cleaned</li>
                  <li>Empty and clean wastebaskets</li>
                  <li>Ceiling fans dusted</li>
                  <li>Blinds or shutters dusted</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wide">🔃 Rotational</h2>
                <ul className="list-decimal pl-6 space-y-1.5 text-gray-300">
                  <li>Light fixtures shiny clean</li>
                  <li>Baseboards</li>
                  <li>Remove cobwebs throughout the house</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wide">✨ Special Requests <span className="text-sm font-normal normal-case text-gray-200"><br/>(additional charges)</span></h2>
                <ul className="list-decimal pl-6 space-y-1.5 text-gray-400">
                  <li>Windows washing (inside/outside, screens & tracks)</li>
                  <li>Cabinets washed throughout the home</li>
                  <li>Refrigerator cleaning</li>
                  <li>Oven cleaning</li>
                  <li>Bed changing</li>
                </ul>
              </section>

            </div>
              <h2 className="text-2xl font-bold my-2 uppercase" id="price-estimate">
                💵 Pricing Estimate
                <span className="block text-sm font-normal normal-case text-gray-200">
                  (subject to change)
                </span>
              </h2>

              <section className="price-estimate-area mb-8">
                <fieldset>
                  <h3 className="text-lg font-semibold my-2 uppercase tracking-wide text-gray-200">
                    Square Footage
                  </h3>
                  <div className="mx-auto text-center">
                    <input
                      className="square-footage mx-auto"
                      type="number"
                      placeholder="How large is your home?"
                      onChange={(e) => setSquareFootage(Number(e.target.value))}
                    />
                  </div>
                </fieldset>

                <fieldset className="stepper">
                  <h3 className="text-lg font-semibold my-2 uppercase tracking-wide text-gray-200">
                    Windows
                  </h3>
                  <div className="mx-auto text-center">
                    <button
                      type="button"
                      className="window-button"
                      onClick={() => {
                        const next = Math.max(0, windowSum - 1);
                        setWindowSum(next);
                        calculateWindowSum(next);
                      }}
                    >
                      -
                    </button>
                    <span className="stepper-value mx-2"> {windowSum} </span>
                    <button
                      type="button"
                      className="window-button"
                      onClick={() => {
                        const next = windowSum + 1;
                        setWindowSum(next);
                        calculateWindowSum(next);
                      }}
                    >
                      +
                    </button>
                    <p className="text-xs m-2 text-gray-200">
                      @ ${perWindowCost} per window: ${windowSumCost}
                    </p>
                  </div>
                </fieldset>

               <fieldset>
                  <h3 className="text-lg font-semibold my-2 uppercase tracking-wide text-gray-200">
                    Cost Estimate
                  </h3>
                  <div className="mx-auto text-center">
                    <h4 className="mx-auto">${(windowSumCost + squareFootage * pricePerSquareFoot).toFixed(0)}</h4>
                  </div>
                </fieldset>

              </section>
          </div>          

        </main>
      </div>
    </> 
  );
}
