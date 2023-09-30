import React from 'react';
import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer component', () => {
   test('should render with button that has correct text', () => {
      const { getByText } = render(<Footer mainBtnText="test" />);
      const button = getByText('test');
      expect(button).toBeDefined();
      expect(button.type).toBe('submit');
   });
});
