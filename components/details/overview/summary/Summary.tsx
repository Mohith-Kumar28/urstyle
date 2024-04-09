import React from 'react';
import { useSearchParams } from "next/navigation";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import CalendarIcon from "@/components/reusablecomponents/CalendarIcon";
import itemsData from "@/Data/items.json";
export default function Summary() {
    const router = useRouter();
    const { groupindex } = router.query;
  
   
    // Ensure that groupid is properly extracted and available for use
    const groupIndex = groupindex;
   
  
    const filteredItems = itemsData[groupIndex];
    if (filteredItems) {
      // `filteredItems` is not `undefined`, so it's safe to access its properties
      console.log(filteredItems.expected_delivery); // This should work
    } else {
      // `filteredItems` is `undefined`, handle this case accordingly
      console.error("filteredItems is undefined.");
    }
  return (
    <div>
       <div className="grid sm:grid-cols-2 border-2 rounded-lg border-stone-300  md:ml-10 m-2 ">
        <div className="m-4 ">
          <div className="m-1 font-bold text-xl">
            {filteredItems && filteredItems.desc && (
              <div className="m-1 font-bold text-xl">{filteredItems.desc}</div>
            )}
          </div>
          <div className="font-bold m-1">
            Total Price : Rs {avgg({ groupid: groupIndex }).total}
          </div>

          <div className=" m-1 flex">
            <Star len={avgg({ groupid: groupIndex }).avgRating} />

            <span className="text-xs text-muted-foreground pl-2">
              (★{avgg({ groupid: groupIndex }).avgRating}.0)
            </span>
          </div>
          <div className=" sm:flex items-center">
            <div className=" m-1 font-bold">
              Expected delivery date :{filteredItems.expected_delivery}
            </div>
            <CalendarIcon />
          </div>
          <div className="m-1">{filteredItems.overall_description}</div>
        </div>
        <div className="  h-[340px] w-[450px]  m-auto  px-2 items-center ">
          <div className="flex flex-col flex-wrap h-96 m-2">
            {filteredItems.cart.map((cart,cartIndex) => {
              const code = parseInt(cart.code);
              return (
                <div key={cartIndex}>
                  {code === 3 && (
                    <img
                      className="max-h-[300px] w-auto rounded-lg"
                      src={cart.image_url}
                      alt=""
                    />
                  )}
                  {code === 1 && (
                    <div className="">
                      <img
                        className="max-h-[100px] w-auto  rounded-lg"
                        src={cart.image_url}
                        alt=""
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
