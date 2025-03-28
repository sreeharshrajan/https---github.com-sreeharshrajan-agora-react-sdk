import React from 'react';
import { UserCircle2 } from 'lucide-react';

export const VideoPlaceholder = ({ isRemoteUser, userName, status, userType }) => {
  return (
    <div
      className={`relative w-full rounded-lg overflow-hidden bg-gray-800 flex flex-col items-center justify-center ${isRemoteUser ? 'sm:col-span-2 sm:h-full h-[50vh] order-2 sm:order-none' : 'sm:h-[50%] h-[30vh]'}`}>
      <UserCircle2 className="w-16 h-16 sm:w-24 sm:h-24 text-gray-600 mb-2 sm:mb-4" />
      <p className="text-gray-400 text-xs sm:text-sm px-4 text-center">{status}</p>
      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white bg-black/50 px-2 py-1 rounded text-sm sm:text-base">
        {userName}
      </div>
    </div>
  );
};
