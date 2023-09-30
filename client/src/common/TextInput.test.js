import React from 'react';
import { render } from '@testing-library/react';

import TextInput from './TextInput';

describe('TextInput component', () => {
   test('should render with correct label and default type', () => {
      const { getByText, getByLabelText } = render(<TextInput name="test" label="Test label" />);
      const label = getByText('Test label');
      expect(label).toBeDefined();
      const input = getByLabelText('Test label');
      expect(input.type).toBe('text');
      expect(input.name).toBe('test');
   });
   test('should render with correct type', () => {
      const { getByLabelText } = render(<TextInput name="test" label="Test label" type="email" />);
      const input = getByLabelText('Test label');
      expect(input.type).toBe('email');
   });
});
