import { render, screen } from '@testing-library/react';
import Logo from './components/elements/Logo';
import Search from './components/elements/Search';

describe('Main page', () => {
  describe('Logo Header', () => {
    it('should show logo Bareksa on header', () => {
      render(<Logo />);
      const logoHeader = screen.getByTestId('logo-header')
      expect(logoHeader).toBeTruthy()
    })
  });
  describe('Search Header', () => {
    it('should show Search input on header', () => {
      render(<Search />);
      const searchHeader = screen.getByTestId('search-header')
      expect(searchHeader).toBeTruthy()
    })
  });
})