import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toLower } from 'lodash';

import AdvancedDetails, { labelsMap } from './AdvancedDetails';
import StateMachineContext from '../StateMachineContext';
import { ADVANCED_DETAILS_TYPE_1, FINAL_DETAILS, stateNamesMap } from '../states';

describe('AdvancedDetails component', () => {
   test('should render with input that has correct label and correct attributes', () => {
      const type = 'phone';
      const { getByText, getByLabelText } = render(
         <StateMachineContext.Provider value={[]}>
            <AdvancedDetails type={type} />
         </StateMachineContext.Provider>
      );
      const label = getByText(labelsMap[type]);
      expect(label).toBeDefined();
      const input = getByLabelText(labelsMap[type]);
      expect(input.type).toBe('tel');
      expect(input.name).toBe(type);
   });
   test('should call setState with correct arguments when submit button is clicked', () => {
      const mockSetState = jest.fn();
      const testStateMachine = [null, mockSetState];
      const type = 'email';
      const { getByText } = render(
         <StateMachineContext.Provider value={testStateMachine}>
            <AdvancedDetails type={type} />
         </StateMachineContext.Provider>
      );
      const submitButton = getByText(`Submit ${toLower(stateNamesMap[ADVANCED_DETAILS_TYPE_1])}`);
      fireEvent.click(submitButton);
      expect(mockSetState.mock.calls[0][0]).toBe(FINAL_DETAILS);
      expect(mockSetState.mock.calls[0][1]).toEqual({ email: '' });
   });
});
