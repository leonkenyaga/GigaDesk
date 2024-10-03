import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {

    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

    return (
        <section
            id="home"
            className="w-full xl:flex-row flex-col justify-center min-h-screen gap-10"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10">Your trusted partner for  </span>
                    <span className="text-coral-red inline-block mt-3">digital</span> success.
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                Outsource your IT worries, unleash your business potential with our expert team.
                </p>
                <div className="flex justify-start items-start flex-wrap w-full gap-16">
                    {
                        statistics.map((stat) => (
                            <div key={stat.label}>
                                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                                <p className="leading-7 font-montserrat text-slate-gray font-semibold">{stat.label}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

      
        </section>
    )
}

export default Hero;