import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FormWrapper from './FormWrapper';

describe('FormWrapper component', () => {
   test('should render with correct title and description text', () => {
      const { getByText } = render(<FormWrapper title="Test title" description="test description" />);
      const title = getByText('Test title');
      expect(title).toBeDefined();
      const description = getByText('test description');
      expect(description).toBeDefined();
   });
   test('should render passed in children', () => {
      const { getByText } = render(
         <FormWrapper>
            <div>Test children</div>
         </FormWrapper>
      );
      const children = getByText('Test children');
      expect(children).toBeDefined();
   });
   test('should render passed in footer', () => {
      const { getByText } = render(<FormWrapper footer={<div>Test footer</div>} />);
      const footer = getByText('Test footer');
      expect(footer).toBeDefined();
   });
   test('should call passed in onFormSubmit when submit button is clicked', () => {
      const mockOnFormSubmit = jest.fn();
      const { getByText } = render(
         <FormWrapper onFormSubmit={mockOnFormSubmit} footer={<button type="submit">Submit</button>} />
      );
      const button = getByText('Submit');
      fireEvent.click(button);
      expect(mockOnFormSubmit.mock.calls).toHaveLength(1);
   });
});
