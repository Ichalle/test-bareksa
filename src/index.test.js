import { render, screen } from '@testing-library/react';
import Logo from './components/elements/Logo';
import Search from './components/elements/Search';
import NotificationsHeader from './components/fragments/NotificationsHeader';
import SettingsHeader from './components/fragments/SettingsHeader';

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
  describe('Notifications Header', () => {
    it('should show notifications on header', () => {
      render(<NotificationsHeader />);
      const notificationHeader = screen.getByTestId('notifications-header')
      expect(notificationHeader).toBeTruthy()
    })
  });
  describe('Settings Header', () => {
    it('should show settings on header', () => {
      render(<SettingsHeader />);
      const settingsHeader = screen.getByTestId('settings-header')
      expect(settingsHeader).toBeTruthy()
    })
  });
})