import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div  id='about' className=" mt-[200px] px-7 md:px-8 lg:px-32" style={{ fontFamily: ' "Darker Grotesque"' }}>
      <h2 className=" text-3xl md:text-[36px] lg:text-[48px] font-bold text-purple-800 text-center mb-12">
        Why Choose <span className="text-pink-500">Ubora CBC</span> ?
      </h2>
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-28 mb-16">
        <div className="w-full lg:w-1/2 relative">
          <Image 
            src="/images/boychild.jpg" 
            alt="Boy child" 
            width={320}
            height={200} 
            className="w-full  ml-[148px] h-auto max-w-[400px] mt-[-25px] max-h-[385px] object-cover rounded-lg"
          />
          <div className="absolute h-[254px] mb-14 right-[680px] bottom-0 w-1 bg-pink-500"></div>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="pd-[25px] ml-[60px] text-[14px] mt-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-gray-800 font-nunito leading-relaxed max-w-[610px] mx-auto">
  Our mission is to bridge the gap between theoretical learning and real-world 
  application through innovative technology that includes performance of 
  practicals. We believe in creating an interactive learning environment that 
  fosters collaboration, communication, and knowledge sharing among students and 
  teachers alike. Join us in shaping the future of education, one interaction at 
  a time.
</p>

        </div>         

      </div>

      <div className=" mt-[3-2px] flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-28">
      <div className="w-full mt-[-42px] lg:w-1/2 relative">
          <Image 
            src="/images/babygirl.jpg" 
            alt="Boy child" 
            width={320}
            height={200} 
            className="w-full  ml-[148px] h-auto max-w-[400px] mt-[-25px] max-h-[385px] object-cover rounded-lg"
          />
          <div className="absolute h-[254px] mb-14 right-[680px] bottom-0 w-1 bg-pink-500"></div>
        </div>
        <div className="w-full lg:w-1/2">
        <p className="pd-[25px] ml-[60px] text-[14px] mt-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-gray-800 font-nunito leading-relaxed max-w-[610px] mx-auto">
        Hands-on exercises and projects are rendered that apply theoretical
         knowledge to real-world scenarios, helping students develop practical
          skills that are directly applicable in their everyday lives. By
           engaging in interactive tasks, students gain a deeper understanding 
           of key concepts, allowing them to see the connection between what they
            learn in the classroom and its practical applications.
</p>
        </div>
      </div>
    </div>
  );
};

export default About;



