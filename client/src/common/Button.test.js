import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button component', () => {
   test('should render with correct text and default type', () => {
      const { getByText } = render(<Button text="test" />);
      const button = getByText('test');
      expect(button).toBeDefined();
      expect(button.type).toBe('button');
   });
   test('should render with correct button type', () => {
      const { getByText } = render(<Button text="test" submitType />);
      const button = getByText('test');
      expect(button.type).toBe('submit');
   });
   test('should call passed in clickHandler when button is clicked', () => {
      const mockClickHandler = jest.fn();
      const { getByText } = render(<Button text="test" clickHandler={mockClickHandler} />);
      const button = getByText('test');
      fireEvent.click(button);
      expect(mockClickHandler.mock.calls).toHaveLength(1);
   });
});
