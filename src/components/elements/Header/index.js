import * as React from 'react';

import Logo from '../Logo'
export default function Header() {

  return (
    <nav
      className="w-full px-8 bg-white flex justify-between items-center fixed top-0 left-0 z-99 h-24">
      <div className='flex items-center'>
        <Logo />
        Header,,,,
      </div>
      <div>
        tools
      </div>
    </nav>
  );
}