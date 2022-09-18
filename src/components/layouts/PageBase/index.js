import * as React from 'react';

import { HeaderMain, HeaderSecondary } from '../../elements';

export default function PageBase({ children }) {
  return (
    <div className="w-full bg-zinc-200 min-h-screen">
      <HeaderMain />
      <HeaderSecondary />
      {children}
    </div>
  );
}