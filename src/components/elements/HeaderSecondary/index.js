import { useState } from 'react';

const HeaderSecondary = () => {
  const [date] = useState('8 April 2021');
  return (
    <div className='bg-neutral-100 px-4 py-2 mt-16 flex justify-end'>
      <span>{date}</span>
    </div>
  )
}

export default HeaderSecondary;