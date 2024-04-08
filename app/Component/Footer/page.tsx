"use client"
import React from "react";

export default function Footer() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('https://cm1.narvii.com/6520/3b103973169af1af80f04d5e06842fb47be23c15_00.jpg')`,
        }}
      >
        <div className=" py-2 px-2 sm:py-8 sm:px-24 lg:flex">
          <div className=" rounded-lg bg-white p-2 "  >
            <div className="font-serif text-black text-3xl">
              sign up for urstyle
            </div>
            <div className=" text-xl font-mono text-black">
              Get E-mail updates about our latest clothes collection and
              <span className="text-orange-700"> special offer </span>
            </div>
          </div>
          <div className=" flex">
            <textarea
              name=""
              id=""
              cols={30} 
              rows={1}
              placeholder="your email address"
              className=" text-center w-64 h-10 bg-red-100 text-slate-950 rounded-lg m-1"
            ></textarea>
            <textarea
              name=""
              id=""
              cols={10}
              rows={1}
              placeholder="sing up"
              className=" text-center w-32 h-10 bg-red-100 text-slate-950 rounded-lg m-1"
            ></textarea>
          </div>
        </div>
      </div>
      <div className=" p-4 bg-gray-900 text-white text-sm pt-10">
      <div className=" font-serif text-cyan-300 font-extrabold">
              {" "}
              URSTYLE{" "}
            </div>
        <div className=" text-sm  grid grid-cols-5 sm:grid-cols-3  sm:space-x-4  ">
          <div className="pt-2  col-span-3 sm:col-span-1">
           
            <div className="font-bold">Contact</div>
            <div className="flex   ">
              <div className="font-semibold ">Address:</div>
              <div className="text-wrap">Chuaras, Sringar, Uttarakhand</div>
            </div>

            <div className="flex  ">
              <div className="font-semibold">phone:</div>
              <div className="text-wrap">+6306441401/ (+91)0123456789</div>
            
            </div>
            <div>
              <span className="font-semibold text-wrap">hours:</span>10:00-18:00, mon-sat
            </div>
          </div>
          <div className="pt-2  col-span-2 sm:col-span-1">
            <div className="font-bold">About</div>
            <div>About us</div>
            <div>Delivery Information</div>
            <div>Privacy Policy</div>
            <div>Terms & Conditions</div>
            <div>Contact us</div>
          </div>
          <div className="pt-2  col-span-3 sm:col-span-1">
            <div className="font-bold">My Account</div>
            <div>Sign In</div>
            <div>View Cart</div>
            <div>My Wishlist</div>
            <div>Track My Order</div>
            <div>Help</div>
          </div>
          {/* <div className="pt-2">
            <div className="font-bold ">Follow us</div>
            <div>From App Store or Google Play</div>
            <div className="flex space-x-4 pt-10">
             
              <div className=" md:flex items-center">
                <img
                  className="object-contain h-10"
                  src="https://logos-download.com/wp-content/uploads/2016/06/Download_on_the_App_Store_logo.png"
                  alt="App Store Logo"
                />
                <img
                  className="object-contain h-10"
                  src="https://i1.wp.com/www.oispice.com/wp-content/uploads/2020/07/Google-Play-Store-app.jpg?fit=1200%2C675&ssl=1"
                  alt="Google Play Store Logo"
                />
              </div>
            </div>

            <div>Secured Payment Gateway</div>
          </div> */}
        </div>
        {/* <div>follow us on</div>
              <div className="flex">
                  <img src="" alt="" /><img src="" alt="" /><img src="" alt="" /><img src="" alt="" />
              </div> */}
      </div>
      <div className="pl-6 pt-4 pb-10">© 2023-2024 urstyle.com </div>
    </div>
  );
}
