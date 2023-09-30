import { useContext } from 'react';
import { toLower } from 'lodash';

// Components
import FormWrapper from '../common/FormWrapper';
import Footer from '../common/Footer';
import TextInput from '../common/TextInput';

import StateMachineContext from '../StateMachineContext';
import { BASIC_DETAILS, ADVANCED_DETAILS, FINAL_DETAILS, stateNamesMap } from '../states';

const titlesMap = {
   phone: 'Please enter your phone number',
   email: 'Please enter your email address',
};
export const labelsMap = {
   phone: 'Phone number',
   email: 'Email address',
};

type AdvancedDetailsProps = {
   type: 'phone' | 'email';
   chosenMethodRef: { current: string | null };
};

const AdvancedDetails = ({ type, chosenMethodRef }: AdvancedDetailsProps) => {
   const [_, setState] = useContext(StateMachineContext);
   return (
      <FormWrapper
         title="Registration method"
         description={titlesMap[type]}
         onFormSubmit={(formData) => {
            const dataObj = {
               [type]: formData.get(type),
            };
            if (chosenMethodRef?.current) {
               chosenMethodRef.current = type;
            }
            setState(FINAL_DETAILS, dataObj);
         }}
         footer={
            <Footer
               mainBtnText={`Submit ${toLower(stateNamesMap[ADVANCED_DETAILS])}`}
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
