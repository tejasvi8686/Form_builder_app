import Image from "next/image";
import Link from "next/link";
import React from "react";
import Sideimg from "../../../../public/sideimg.jpg"


const page = () => {
  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
         <Image   src={Sideimg}  alt=""  width={700}
              height={700}
              className="absolute inset-0 h-full
          rounded-3xl 
          w-full object-cover" />
        </div>

        <div className="lg:py-24">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-4xl">
            Create Custom Forms
            <span className="sm:block"> Easily with Our Form Builder. </span>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Create, customize, and deploy forms in minutes with our intuitive drag-and-drop interface.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href={"/sign-up"}
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            >
              Get Started
            </Link>

            
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default page;