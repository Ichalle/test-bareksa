import * as React from 'react';

import Header from '../../elements/Header';

export default function PageBase({ children }) {

  return (
    <div className="w-full bg-zinc-200 min-h-screen">
      <Header />
      {children}
    </div>
  );
}