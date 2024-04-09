import React from 'react';
import { useRouter } from 'next/navigation';
import avgg from '@/components/reusablecomponents/avgg';
import CalendarIcon from '@/components/reusablecomponents/CalendarIcon';
import Star from '@/components/reusablecomponents/Star';
import Sitelink from '@/components/reusablecomponents/Sitelink';
import itemsData from '@/Data/items.json';
import Cardlist from './Cardlist';
import Summary from './Summary';

function Details() {
  // const router = useRouter();
  // const { groupindex } = router.index;
  const groupIndex = 2;
  const filteredItems = itemsData[groupIndex];

  return (
    <div className="    m-1">
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
        <Cardlist filteredItems={filteredItems} />
      </div>
      <div>
        <Summary filteredItems={filteredItems} groupIndex={groupIndex} />
      </div>
    </div>
  );
}

export default Details;

