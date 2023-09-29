import React, { useContext } from 'react';
import { toLower } from 'lodash';

// Components
import FormWrapper from '../common/FormWrapper';
import Footer from '../common/Footer';
import TextInput from '../common/TextInput';

import StateMachineContext from '../StateMachineContext';
import { ADVANCED_DETAILS_TYPE_1, ADVANCED_DETAILS_TYPE_2, CONFIRMATION, stateNamesMap } from '../states';

const FinalDetails = ({ chosenMethodRef }) => {
   const [currentState, setState] = useContext(StateMachineContext);
   return (
      <FormWrapper
         title="Additional information"
         description="Please enter your company name and country"
         onFormSubmit={(formData) => {
            const dataObj = {
               companyName: formData.get('company-name'),
               country: formData.get('country'),
            };
            setState(CONFIRMATION, dataObj);
         }}
         footer={
            <Footer
               mainBtnText={`Submit ${toLower(stateNamesMap[currentState])}`}
               backButton
               prevState={chosenMethodRef.current === 'phone' ? ADVANCED_DETAILS_TYPE_1 : ADVANCED_DETAILS_TYPE_2}
               resetButton
            />
         }
      >
         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <TextInput name="company-name" label="Company name" />

            <div className="sm:col-span-3">
               <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Country
               </label>
               <div className="mt-2">
                  <select
                     id="country"
                     name="country"
                     autoComplete="country-name"
                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                              focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                     <option>United States</option>
                     <option>Canada</option>
                     <option>Mexico</option>
                  </select>
               </div>
            </div>
         </div>
      </FormWrapper>
   );
};

export default FinalDetails;
