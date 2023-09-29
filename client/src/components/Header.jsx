import React from 'react';

const Header = () => (
   <div className="lg:flex lg:items-center lg:justify-between p-3 pb-4">
      <div className="min-w-0 flex">
         <img
            className="h-8 w-auto mr-3"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
         />
         <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Form Wizzard App
         </h2>
      </div>
   </div>
);

export default Header;
