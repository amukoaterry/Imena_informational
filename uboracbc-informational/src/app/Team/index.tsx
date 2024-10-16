"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function TeamSection() {
  return (
    <div id='team' className="w-full bg-gray-50">
      <div className="py-32 mt-[82px] mr-[96px] flex flex-col items-center text-[#644877]" style={{ fontFamily: ' "Darker Grotesque"' }}>
         <h2 className="text-3xl md:text-[36px] lg:text-[48px] font-bold text-purple-800 text-center mb-12">
        Meet Expert Team Members
      </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-0 w-full md:w-1/3 px-2 md:px-4 lg:px-6">
            <div className="overflow-hidden mx-auto mb-4 w-48 h-64 sm:w-56 sm:h-72 md:w-60 md:h-80 lg:w-72 lg:h-96 rounded-3xl">
              <Image
                src="/images/Mitchell.jpg"
                alt="Terry Mitchell"
                width={288}
                height={384}
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-xl md:text-2xl lg:text-2xl mt-4">Terry Mitchell</h3>
            <p className="text-gray-600 text-base mt-1">Software Engineer</p>
          </div>
          <div className="text-center mb-12 md:mb-0 w-full md:w-1/3 px-2 md:px-4 lg:px-6">
            <div className="overflow-hidden mx-auto mb-4 w-48 h-64 sm:w-56 sm:h-72 md:w-60 md:h-80 lg:w-72 lg:h-96 rounded-3xl">
              <Image
                src="/images/Masaku.jpg"
                alt="Susan Masaku"
                width={288}
                height={384}
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-xl md:text-2xl lg:text-2xl mt-4">Susan Masaku</h3>
            <p className="text-gray-600 text-base mt-1">Software Engineer</p>
          </div>
          <div className="text-center w-full md:w-1/3 px-2 md:px-4 lg:px-6">
            <div className="overflow-hidden mx-auto mb-4 w-48 h-64 sm:w-56 sm:h-72 md:w-60 md:h-80 lg:w-72 lg:h-96 rounded-3xl">
              <Image
                src="/images/Karen.jpg"
                alt="Karen Philip"
                width={288}
                height={384}
                className="object-cover"
              />
            </div>
            <h3 className="font-semibold text-xl md:text-2xl lg:text-2xl mt-4">Karen Philip</h3>
            <p className="text-gray-600 text-base mt-1">Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}