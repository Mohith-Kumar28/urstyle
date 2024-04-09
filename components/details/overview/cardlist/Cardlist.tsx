import React from 'react';

function Cardlist({ filteredItems }) {
  return (
    <div className="  h-[340px] w-[450px]  m-auto  px-2 items-center ">
      <div className="flex flex-col flex-wrap h-96 m-2">
        {filteredItems.cart.map((cart, cartIndex) => {
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
  );
}

export default Cardlist;
