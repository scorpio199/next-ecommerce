"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

const slides = [
    {
        id: 1,
        title: "Summer Sale Collections",
        description: "Sale! Up to 50% off!",
        image: "https://images.pexels.com/photos/748870/pexels-photo-748870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50"
    },
    {
        id: 2,
        title: "Winter Sale Collections",
        description: "Sale! Up to 50% off!",
        image: "https://images.pexels.com/photos/1462011/pexels-photo-1462011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50"
    },
    {
        id: 3,
        title: "Spring Sale Collections",
        description: "Sale! Up to 50% off!",
        image: "https://images.pexels.com/photos/1462011/pexels-photo-1462011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50"
    }
]

const Slider = () => {
    const [current, setCurrent] = useState(0)
    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <div className="w-max h-full flex transition-all ease-in-out duration-1000">
                {slides.map((slide)=>(
                    <div 
                        className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} 
                        key={slide.id}>
                        {/* TEXT CONTAINER*/}
                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                            <Link href={slide.url}>
                                <button className="rounded-md bg-black text-white py-3 px-4">SHOP NOW</button>
                            </Link>
                        </div>
                        {/* IMAGE CONTAINER*/}
                        <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                            <Image 
                                src={slide.image} 
                                alt="" fill 
                                sizes="100%" 
                                className="object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider