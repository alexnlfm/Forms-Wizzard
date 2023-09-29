import React, { useContext } from 'react';
import { toLower } from 'lodash';

// Components
import FormWrapper from '../common/FormWrapper';
import Footer from '../common/Footer';
import TextInput from '../common/TextInput';

import StateMachineContext from '../StateMachineContext';
import { BASIC_DETAILS, FINAL_DETAILS, stateNamesMap } from '../states';

const titlesMap = {
   phone: 'Please enter your phone number',
   email: 'Please enter your email address',
};
const labelsMap = {
   phone: 'Phone number',
   email: 'Email address',
};

const AdvancedDetails = ({ type, chosenMethodRef }) => {
   const [currentState, setState] = useContext(StateMachineContext);
   return (
      <FormWrapper
         title="Registration method"
         description={titlesMap[type]}
         onFormSubmit={(formData) => {
            const dataObj = {
               [type]: formData.get(type),
            };
            chosenMethodRef.current = type;
            setState(FINAL_DETAILS, dataObj);
         }}
         footer={
            <Footer
               mainBtnText={`Submit ${toLower(stateNamesMap[currentState])}`}
               backButton
               prevState={BASIC_DETAILS}
               resetButton
            />
         }
      >
         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <TextInput name={type} label={labelsMap[type]} type={type === 'phone' ? 'tel' : 'email'} />
         </div>
      </FormWrapper>
   );
};

export default AdvancedDetails;
