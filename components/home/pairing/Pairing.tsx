"use client";
import React, { useState } from "react";

import itemsData from "@/Data/items.json";
import Link from "next/link";
import Star from "@/components/reusablecomponents/Star";
import caropic from "@/Data/caropicData";

import { clickFiltersData } from "@/Data/clickFiltersData";
import avgg from "@/components/reusablecomponents/avgg";
import Sitelink from "@/components/reusablecomponents/Sitelink";
import Menudropdown from "@/components/reusablecomponents/Menudropdown";
import CarouselImage from "@//components/home/pairing/carouselImage/CarouselImage";

function Clothes() {
  const [filter, setfilter] = useState("");

  const handleFilterChange = (newFilter: React.SetStateAction<string>) => {
    setfilter(newFilter);
  };

  return (
    <div className="mb-2 ">
      <div className="text-2xl ">
        <Menudropdown
          name="categories"
          dropdata={clickFiltersData}
          onfilterchange={handleFilterChange}
        />
      </div>
      <div>
        {itemsData.map((group, groupIndex) => (
          <div key={groupIndex}>
            {(filter === "" || group.look === filter) && (
              <section>
                {(group.id + 1) % 3 === 0 && ( // Inside Clothes component
                  <CarouselImage caropicData={caropic} />
                )}
                <div className=" px-4 my-4 bg-stone-100 rounded-lg ">
                  <div className="flex space-x-10 m-1 p-2">
                    <div>
                      <h1 className=" text-xl sm:text-3xl font-bold tracking-tight">
                        {group.desc ? group.desc : "Summer Breeze Outfit"}
                      </h1>
                      <p className="text-gray-500 dark:text-gray-400">
                        Embrace the Season with Effortless Style
                      </p>
                      <Link className=" bg-stone-200 rounded-lg hover:bg-stone-300 text-lg font-semibold text-neutral-950" href={`/details/${groupIndex}`}>
                      
                          Go to Details
                       
                      </Link>
                    </div>
                    <div className="m-1">
                      <div className="font-normal">
                        <div>Expected delivery: {group.expected_delivery}</div>
                        <h2 className="">
                          Total cost :Rs {avgg({ groupid: groupIndex }).total}
                        </h2>
                        <Star len={avgg({ groupid: groupIndex }).avgRating} />
                      </div>
                    </div>
                  </div>
                  <div className=" grid grid-cols-2 lg:grid-cols-4  items-center bg-stone-200 rounded-lg w-full ">
                    {group.cart.map((cart, index) => (
                      <div key={index} className="mb-4 ">
                        <div className=" m-2 sm:m-auto  sm:w-64 h-[22rem] relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg  content-center hover:border-2 hover:border-stone-200 bg-white my-1 ">
                          <img
                            alt="photos"
                            className=" sm:w-46 max-h-[16rem]  object-cover align-middle  aspect-product  overflow-hidden "
                            src={cart.image_url}
                          />
                          <Sitelink
                            setsitelink={cart.image_url}
                            sitelink={cart.link}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clothes;
