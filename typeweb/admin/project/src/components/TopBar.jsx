import { User } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Notification from '../pages/Notification';

function TopBar() {
  return (
    <div className="bg-white p-4 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="relative capitalize font-mono text-2xl font-bold text-gray-800">
        KHORANIYA TYRES
        </div>
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full hover:bg-gray-100">
            
            <Notification />
          </div>
          <Link to={"/profile"} className="w-9 h-9 rounded-full bg-gray-300 flex justify-center items-center"><User/></Link>
        </div>
      </div>
    </div>
  );
}

export default TopBar;