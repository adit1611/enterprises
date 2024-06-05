import React from 'react';
import { MdCall ,MdFacebook,MdWhatsapp,MdMail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <p>Designed with <span role="img" aria-label="heart emoji">❤️</span> by Your Team</p>
        </div>
        <div className='absolute right-0  w-1/2 h-20 mx-10 gap-5 flex'>
        <MdCall  className='bg-cyan-500 h-5 w-20 rounded' style={{ height: '60px' }}/>
        <MdFacebook  className='bg-cyan-500 h-5 w-20 rounded' style={{ height: '60px' }} />
        <MdWhatsapp className='bg-cyan-500 h-5 w-20 rounded' style={{ height: '60px' }}/>
        <MdMail className='bg-cyan-500 h-5 w-20 rounded' style={{ height: '60px' }}/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;