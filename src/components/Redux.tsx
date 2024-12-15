"use client"
import React from "react"
import Image from "next/image"

const AddToCardContainer = () => {
    return (
        <div className='border border-gray-300 rounded-md h-fit text-sm'>
            <div className='p-4'>
                <Image src={prime} width={40} height={40} alt={"prime"}/>

            </div>
        <div className='p-4'>
            <h1><span className='text-[#147C8F]'>FREE delivery</span> Thursday,21 March.<span className='text-[#147C8F]'></span></h1>
            <h1 className='mt-4'>Or fastest delivery Tomorrow, 20 March. Order it in 15 hrs 53 min. Details
            </h1>
            <p className="text-black> my-2">Delivery to Karachi</p>
            <button className="bg-black text-white width-full rounded-full py-1 ">Add to cart</button>
            <button className="bg-black text-white width-full rounded-full py-1 my-2">buy now</button>
        </div>
        </div>
    )
}
export default AddToCardContainer;