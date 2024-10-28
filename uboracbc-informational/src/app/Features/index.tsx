import React from 'react';
import Image from 'next/image';

const Views = () => {
  return (
    <div
      id="features"
      className="h-screen flex flex-col justify-center items-center snap-start"
    >
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20 py-10">
        <div className="w-full lg:w-1/3 text-center">
          <Image
            src="/images/practicals.jpg"
            alt="Practicals"
            width={446}
            height={250}
            className="mb-4 mx-auto max-w-[70%]"
          />
          <p
            className="text-[#644877] text-[18px] md:text-[24px] lg:text-[28px] font-semibold"
            style={{ fontFamily: '"Darker Grotesque"' }}
          >
            Practicals
          </p>
        </div>

        <div className="w-full lg:w-1/3 text-center">
          <Image
            src="/images/Q & A.jpg"
            alt="Q & A Post"
            width={446}
            height={250}
            className="mb-4 mx-auto max-w-[70%]"
          />
          <p
            className="text-[#644877] text-[18px] md:text-[24px] lg:text-[28px] font-semibold"
            style={{ fontFamily: '"Darker Grotesque"' }}
          >
            Q & A Post
          </p>
        </div>

        <div className="w-full lg:w-1/3 text-center">
          <Image
            src="/images/assignments.jpg"
            alt="Assignments"
            width={236}
            height={213}
            className="mb-4 mx-auto max-w-[70%]"
          />
          <p
            className="text-[#644877] text-[18px] md:text-[24px] lg:text-[28px] font-semibold"
            style={{ fontFamily: '"Darker Grotesque"' }}
          >
            Assignments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Views;
