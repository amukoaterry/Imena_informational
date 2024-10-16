import React from 'react';
import Image from 'next/image';

const Views = () => {
    return (
        <div id='features' className="h-screen flex flex-col justify-center items-center snap-start"> 
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 py-6 lg:py-10">
                <div className="w-full lg:w-1/3 text-center">
                    <Image
                        src="/images/practicals.jpg"
                        alt="Practicals"
                        width={446}
                        height={250}
                        className="mb-4 mx-auto max-w-[80%] md:max-w-[40%] lg:max-w-[70%]"
                    />
                    <p className="text-[16px] text-[#644877] sm:text-[16px] md:text-[24px] lg:text-[28px] font-semibold" style={{ fontFamily: '"Darker Grotesque"' }}>
                        Practicals
                    </p>
                </div>

                <div className="w-full lg:w-1/3 text-center">
                    <Image
                        src="/images/Q & A.jpg"
                        alt="Q & A Post"
                        width={446}
                        height={250}
                        className="mb-4 mx-auto max-w-[50%] md:max-w-[40%] lg:max-w-[70%]"
                    />
                    <p className="text-[16px] text-[#644877] sm:text-[16px] md:text-[24px] lg:text-[28px] font-semibold" style={{ fontFamily: '"Darker Grotesque"' }}>
                        Q & A Post
                    </p>
                </div>

                <div className="w-full lg:w-1/3 text-center">
                    <Image
                        src="/images/assignments.jpg"
                        alt="Assignments"
                        width={236}
                        height={213}
                        className="mb-4 mx-auto max-w-[80%] md:max-w-[40%] lg:max-w-[70%]"
                    />
                    <p className="text-[16px] text-[#644877] sm:text-[16px] md:text-[24px] lg:text-[28px] font-semibold" style={{ fontFamily: '"Darker Grotesque"' }}>
                        Assignments
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Views;
