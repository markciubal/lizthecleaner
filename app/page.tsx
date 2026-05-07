import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-800 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div className="flex flex-col">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Hi, I'm Liz!
            </h1>
            <h2 className="max-w-md text-lg leading-8 text-grey-200 dark:text-zinc-400">
              Looking for a cleaner?<br/>You found the best!
            </h2>
          </div>
          <div>
            <img src="/woman-user-circle-black-icon.svg"></img>
          </div>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-10">Cleaning Checklist</h1>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wide">Kitchen</h2>
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
              <h2 className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wide">Bathrooms</h2>
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
              <h2 className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wide">Bedrooms</h2>
              <ul className="list-decimal pl-6 space-y-1.5 text-gray-200">
                <li>Carpets vacuumed and edged</li>
                <li>Furniture cleaned</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wide">Formal Room, Great Room, Den</h2>
              <ul className="list-decimal pl-6 space-y-1.5 text-gray-200">
                <li>Furniture cleaned</li>
                <li>Upholstery cleaned and dust free</li>
                <li>Vacuum furniture including under any cushions</li>
                <li>Carpets vacuumed and edged</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wide">Laundry Room</h2>
              <ul className="list-decimal pl-6 space-y-1.5 text-gray-200">
                <li>All appliances cleaned</li>
                <li>Floors vacuumed and mopped</li>
                <li>All sinks and counters cleaned</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wide">All Rooms</h2>
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
              <h2 className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wide">Rotational</h2>
              <ul className="list-decimal pl-6 space-y-1.5 text-gray-300">
                <li>Light fixtures shiny clean</li>
                <li>Baseboards</li>
                <li>Remove cobwebs throughout the house</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-200 mb-3 uppercase tracking-wide">Special Requests <span className="text-sm font-normal normal-case text-gray-200">(additional charges)</span></h2>
              <ul className="list-decimal pl-6 space-y-1.5 text-gray-400">
                <li>Windows washing (inside/outside, screens & tracks)</li>
                <li>Cabinets washed throughout the home</li>
                <li>Refrigerator cleaning</li>
                <li>Oven cleaning</li>
                <li>Bed changing</li>
              </ul>
            </section>

          </div>
        </div>
       
      </main>
    </div>
  );
}
