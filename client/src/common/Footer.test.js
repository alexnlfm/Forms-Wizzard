import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Footer from './Footer';
import StateMachineContext from '../StateMachineContext';
import { GREETINGS } from '../states';

describe('Footer component', () => {
   test('should render with button that has correct text and submit type', () => {
      const { getByText } = render(
         <StateMachineContext.Provider value={[]}>
            <Footer mainBtnText="test" />
         </StateMachineContext.Provider>
      );
      const mainButton = getByText('test');
      expect(mainButton).toBeDefined();
      expect(mainButton.type).toBe('submit');
   });
   test('should call passed in mainBtnHandler when button is clicked', () => {
      const mockMainBtnHandler = jest.fn();
      const { getByText } = render(
         <StateMachineContext.Provider value={[]}>
            <Footer mainBtnText="test" mainBtnHandler={mockMainBtnHandler} />
         </StateMachineContext.Provider>
      );
      const mainButton = getByText('test');
      fireEvent.click(mainButton);
      expect(mockMainBtnHandler.mock.calls).toHaveLength(1);
   });
   test('should render "Go back" button with proper click handler when "backButton" is passed', () => {
      const mockSetState = jest.fn();
      const testStateMachine = [null, mockSetState];
      const { getByText } = render(
         <StateMachineContext.Provider value={testStateMachine}>
            <Footer mainBtnText="test" backButton prevState="something" />
         </StateMachineContext.Provider>
      );
      const backButton = getByText('Go back');
      expect(backButton).toBeDefined();
      fireEvent.click(backButton);
      expect(mockSetState.mock.calls).toHaveLength(1);
      expect(mockSetState.mock.calls[0][0]).toBe('something');
   });
   test('should render "Start from scratch" button with proper click handler when "resetButton" is passed', () => {
      const mockSetState = jest.fn();
      const testStateMachine = [null, mockSetState];
      const { getByText } = render(
         <StateMachineContext.Provider value={testStateMachine}>
            <Footer mainBtnText="test" resetButton />
         </StateMachineContext.Provider>
      );
      const resetButton = getByText('Start from scratch');
      expect(resetButton).toBeDefined();
      fireEvent.click(resetButton);
      expect(mockSetState.mock.calls).toHaveLength(1);
      expect(mockSetState.mock.calls[0][0]).toBe(GREETINGS);
   });
});
