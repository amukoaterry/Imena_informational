import React from 'react';
import Image from 'next/image';

const Landingpage = () => {
    return (
        <div id='landingpage' className="flex flex-col justify-between mt-20">
            <div className="relative bg-customBlue min-h-screen overflow-hidden lg:px-8" style={{ fontFamily: '"Darker Grotesque"' }}>
                <div className="container mx-auto flex flex-col p-6 md:p-10
                    lg:flex-row items-center justify-between space-y-4 mt-6
                    lg:space-y-0 lg:space-x-4 lg:mt-28 nh:mt-4">
                    <div className="w-full lg:w-1/2 ml-[62px] lg:text-left">
                        <h1 className="text-[#644877] text-2xl im:text-[23px] nh:text-3xl md:text-4xl lg:text-4xl text-custom-blue font-nunito font-bold leading-snug mb-6" style={{ fontFamily: '"Darker Grotesque"' }}>
                            Unlocking practical <br /> knowledge
                        </h1>
                        
                        <p className="text-lg im:text-2xl nh:text-2xl md:text-2xl lg:text-[28px] font-nunito textbg-[#644877] mb-8" style={{ fontFamily: '"Darker Grotesque"' }}>
                            At Ubora CBC, we're revolutionizing<br /> education with our cutting-edge tech<br /> platform designed specifically for<br /> Competence Based Curriculum (CBC)
                        </p>
                        <button className="im:text-bold im:px-20 im:py-5 sd:mb-20 italic font-type-bold bg-[#644877] hover:bg-[#503b64] font-semibold text-white py-4 md:py-3 lg:py-[15px] px-8 md:px-8 lg:px-[60px] text-sm md:text-md lg:text-lg rounded-[30px] mb-15 shadow-md">
                            Signup For Free
                        </button>
                    </div>
                    <div className="w-full nh:w-[520px] md:w-1/2 mt-10 md:mt-0 mb-[-20px]"> 
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
