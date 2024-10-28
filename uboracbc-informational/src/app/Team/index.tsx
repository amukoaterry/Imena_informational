"use client";

import Image from 'next/image';

export default function TeamSection() {
  return (
    <div id="team" className="bg-gray-50 py-16 sm:py-32">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-800 mb-12">
          Meet Expert Team Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: 'Terry Mitchell', role: 'Software Engineer', image: '/images/Mitchell.jpg' },
            { name: 'Susan Masaku', role: 'Software Engineer', image: '/images/Masaku.jpg' },
            { name: 'Karen Philip', role: 'Software Engineer', image: '/images/Karen.jpg' },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-48 h-64 mx-auto overflow-hidden rounded-3xl sm:w-56 sm:h-72 md:w-60 md:h-80 lg:w-72 lg:h-96">
                <Image src={member.image} alt={member.name} width={288} height={384} className="object-cover" />
              </div>
              <h3 className="text-xl md:text-2xl mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
