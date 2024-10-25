import React from 'react';
import Image from 'next/image';

const Landingpage = () => {
  return (
    <div id="landingpage" className="mt-20 flex flex-col justify-between min-h-screen">
      <div
        className="relative bg-customBlue min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{ fontFamily: '"Darker Grotesque"' }}
      >
        <div
          className="container mx-auto flex flex-col p-6 md:p-10 lg:flex-row items-center justify-between
            space-y-8 sm:space-y-4 lg:space-y-0 lg:space-x-4 mt-6 lg:mt-28"
        >
          {/* Left Section */}
          <div className="w-full lg:w-1/2 ml-4 sm:ml-[62px] text-left">
            <h1
              className="text-[#644877] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-6"
              style={{ fontFamily: '"Darker Grotesque"' }}
            >
              Unlocking practical <br /> knowledge
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-[28px] textbg-[#644877] mb-8"
              style={{ fontFamily: '"Darker Grotesque"' }}
            >
              At Ubora CBC, we're revolutionizing <br />
              education with our cutting-edge tech <br />
              platform designed for the Competence-Based Curriculum (CBC)
            </p>
            <button
              className="bg-[#644877] hover:bg-[#503b64] text-white py-3 px-8 sm:px-16 rounded-3xl text-md lg:text-lg shadow-md mb-8"
            >
              Signup For Free
            </button>
          </div>

          {/* Right Section with Image */}
          <div className="w-full sm:w-[520px] lg:w-1/2 mt-10 sm:mt-0 mb-[-20px]">
            <Image
              src="/images/homepage.jpg"
              alt="Children Studying"
              width={500}
              height={300}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
