import React from 'react';
import Link from 'next/link';
import Star from '@/components/reusablecomponents/Star';
import Sitelink from '@/components/reusablecomponents/Sitelink';
import avgg from '@/components/reusablecomponents/avgg';
interface CartItem {
  id: number;
  name: string;
  code: string;
  link: string;
  image_url: string;
  price: string;
  review: {
    image: string;
    rname: string;
    date: string;
    content: string;
    rating: number;
  }[];
  description: string;
}

interface FilteredItems {
  cart: CartItem[];
}

interface Props {
  filteredItems: FilteredItems;
  groupIndex: number;
}
function Summary({ filteredItems, groupIndex }: Props) {
  return (
    <>
      {filteredItems.cart.map((cart, cartIndex) => (
        <div key={cartIndex}>
          <div className=" grid grid-cols-2 md:flex md:ml-10 m-2 bg-stone-200 ">
            {cart && (
              <>
                <div className="m-2 overflow-hidden  bg-cover bg-top   sm:w-52 h-52  bg-white hover:border-4 rounded-lg  border-2 hover:border-stone-300">
                  <img
                    className=" mx-auto max-w-full h-full object-cover align-middle  "
                    src={cart.image_url}
                    alt=""
                  />
                </div>

                <div className=" m-2 pl-3  ">
                  <div className="     rounded-md  font-bold ">
                    {cart.name}
                  </div>
                  <div className="flex items-center">
                    <Star len={cart.review} />

                    <div className="mx-2">
                      {avgg({ groupid: groupIndex, cartid: cartIndex }).avgRating} Reviews
                    </div>
                  </div>
                  <div className="font-semibold my-1">{cart.price}</div>
                  <div className="mb-2">{cart.description}</div>
                  <Sitelink setsitelink={cart.image_url} sitelink={cart.link}/>

                  <div className=" flex my-2 items-center space-x-3 font-medium">
                    <Link
                      href={`/moredetails/${groupIndex}/${cartIndex}`}
                      rel="noopener noreferrer"
                      className=" flex   items-center   rounded-lg bg-stone-300 hover:bg-stone-400 p-1  "
                    >
                      Details
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2} // Corrected property name
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="my-4 border-t border-gray-200"></div>
        </div>
      ))}
    </>
  );
}

export default Summary;
