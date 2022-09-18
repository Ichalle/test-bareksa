import * as React from 'react';
import LogoAsset from '../../../assets/logo.svg'
export default function Logo() {

  return (
    <img className="h-8" data-testid="logo-header" src={LogoAsset} alt="logo" />
  );
}