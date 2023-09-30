import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { toLower } from 'lodash';

import BasicDetails from './BasicDetails';
import StateMachineContext from '../StateMachineContext';
import { BASIC_DETAILS, ADVANCED_DETAILS_TYPE_1, stateNamesMap } from '../states';

const dataForRadioInputs = [
   {
      name: 'phone',
      displayedName: 'Phone number',
   },
   {
      name: 'email',
      displayedName: 'Email address',
   },
];
jest.mock('../services', () => {
   return {
      fetchData: jest.fn(async () => {
         return dataForRadioInputs;
      }),
   };
});

describe('BasicDetails component', () => {
   test('should render first name and last name inputs', () => {
      const { getByText, getByLabelText } = render(
         <StateMachineContext.Provider value={[]}>
            <BasicDetails />
         </StateMachineContext.Provider>
      );
      const firstNameLabel = getByText('First name');
      expect(firstNameLabel).toBeDefined();
      const firstNameInput = getByLabelText('First name');
      expect(firstNameInput.type).toBe('text');
      expect(firstNameInput.name).toBe('first-name');
      const lastNameLabel = getByText('Last name');
      expect(lastNameLabel).toBeDefined();
      const lastNameInput = getByLabelText('Last name');
      expect(lastNameInput.type).toBe('text');
      expect(lastNameInput.name).toBe('last-name');
   });
   test('should render "Loading..." message before the data is sent from server', () => {
      const { getByText } = render(
         <StateMachineContext.Provider value={[]}>
            <BasicDetails />
         </StateMachineContext.Provider>
      );
      const message = getByText('Loading...');
      expect(message).toBeDefined();
   });
   test('should render radio input for all options sent from server', async () => {
      const { getByText, getByLabelText } = render(
         <StateMachineContext.Provider value={[]}>
            <BasicDetails />
         </StateMachineContext.Provider>
      );
      await waitFor(() => {
         dataForRadioInputs.forEach(({ displayedName, name }) => {
            const label = getByText(displayedName);
            expect(label).toBeDefined();
            const input = getByLabelText(displayedName);
            expect(input.type).toBe('radio');
            expect(input.name).toBe('registration-method');
            expect(input.value).toBe(name);
         });
      });
   });
   test('should call setState with correct arguments when specific radio button is chosen and submit button is clicked', async () => {
      const mockSetState = jest.fn();
      const testStateMachine = [null, mockSetState];
      const { getByText } = render(
         <StateMachineContext.Provider value={testStateMachine}>
            <BasicDetails />
         </StateMachineContext.Provider>
      );
      await waitFor(() => {
         const label = getByText(dataForRadioInputs[0].displayedName);
         fireEvent.click(label);
         const submitButton = getByText(`Submit ${toLower(stateNamesMap[BASIC_DETAILS])}`);
         fireEvent.click(submitButton);
         expect(mockSetState.mock.calls[0][0]).toBe(ADVANCED_DETAILS_TYPE_1);
         expect(mockSetState.mock.calls[0][1]).toEqual({
            firstName: '',
            lastName: '',
            registrationMethod: dataForRadioInputs[0].name,
         });
      });
   });
});
