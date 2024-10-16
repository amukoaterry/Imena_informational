import React from 'react';
import Image from 'next/image';

const Views = () => {
    return (
        <div id='features' className="flex flex-col justify-between mt-10 lg:mt-20 lg:mb-[230px]"> 
            <div className="lg:py-16">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 py-6 lg:py-10 relative mt-[-120px] lg:mt-[-180px]"> {/* Adjusted negative margin-top for inner container */}
                    <div className="w-full lg:w-1/3 text-center mb-6 sm:mb-0">
                        <Image
                            src="/images/practicals.jpg"
                            alt="Practicals"
                            width={446}
                            height={250}
                            className="mb-4 nh:mb-[0px] mx-auto max-w-[80%] md:max-w-[40%] lg:max-w-[70%]"/>
                        <p className="text-[16px] text-[#644877] sm:text-[16px] md:text-[24px] lg:text-[28px] mh:text-[18px] text-customDarkBlue font-semibold" style={{ fontFamily: '"Darker Grotesque"' }}>
                            Practicals
                        </p>
                    </div>

                    <div className="w-full lg:w-1/3 text-center mb-6 sm:mb-0">
                        <Image
                            src="/images/Q & A.jpg"
                            alt="Q & A Post"
                            width={446}
                            height={250}
                            className="mb-4 nh:w-[140px] sd:w-[170px] mx-auto max-w-[50%] md:max-w-[40%] lg:max-w-[70%]"/>
                        <p className="text-[16px] text-[#644877] sm:text-[16px] md:text-[24px] lg:text-[28px] mh:text-[18px] text-customDarkBlue font-semibold" style={{ fontFamily: '"Darker Grotesque"' }}>
                            Q & A Post
                        </p>
                    </div>

                    <div className="w-full lg:w-1/3 text-center mb-6 sm:mb-0">
                        <Image
                            src="/images/assignments.jpg"
                            alt="Assignments"
                            width={236}
                            height={213}
                            className="mb-4 mx-auto max-w-[80%] md:max-w-[40%] lg:max-w-[70%]"/>
                        <p className="text-[16px] text-[#644877] sm:text-[16px] md:text-[24px] lg:text-[28px] mh:text-[18px] text-customDarkBlue font-semibold" style={{ fontFamily: '"Darker Grotesque"' }}>
                            Assignments
                        </p>
                    </div>
                </div>
            </div>
    </div>
    );
};
// export default Views;

export default Views;
