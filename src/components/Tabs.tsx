"use client"
import React from "react";


const Tabs = () => {
  return (
    <div className="mt-12">
      <div className="border-b">
        <button className="text-gray-700 font-medium px-4 py-2 border-b-2 border-black">
          Description
        </button>
        <button className="text-gray-500 px-4 py-2 hover:text-gray-700">
          Additional Information
        </button>
        <button className="text-gray-500 px-4 py-2 hover:text-gray-700">
          Reviews (5)
        </button>
      </div>

      <div className="mt-6 text-sm text-gray-700">
        <p>
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        <br/>
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>
    </div>
  );
};

export default Tabs;
