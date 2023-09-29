import React, { useContext } from 'react';

// Components
import Greetings from './Greetings';
import BasicDetails from './BasicDetails';
import AdvancedDetails from './AdvancedDetails';
import FinalDetails from './FinalDetails';
import Confirmation from './Confirmation';

import StateMachineContext from '../StateMachineContext';
import {
   GREETINGS,
   BASIC_DETAILS,
   ADVANCED_DETAILS_TYPE_1,
   ADVANCED_DETAILS_TYPE_2,
   FINAL_DETAILS,
   CONFIRMATION,
} from '../states';

type FormsWizzardProps = { chosenMethodRef: { current: 'phone' | 'email' | null } };

const FormsWizzard = ({ chosenMethodRef }: FormsWizzardProps) => {
   const [currentState] = useContext(StateMachineContext);

   let displayedPage = null;
   switch (currentState) {
      case GREETINGS: {
         displayedPage = <Greetings />;
         break;
      }
      case BASIC_DETAILS: {
         displayedPage = <BasicDetails />;
         break;
      }
      case ADVANCED_DETAILS_TYPE_1: {
         displayedPage = <AdvancedDetails type="phone" chosenMethodRef={chosenMethodRef} />;
         break;
      }
      case ADVANCED_DETAILS_TYPE_2: {
         displayedPage = <AdvancedDetails type="email" chosenMethodRef={chosenMethodRef} />;
         break;
      }
      case FINAL_DETAILS: {
         displayedPage = <FinalDetails chosenMethodRef={chosenMethodRef} />;
         break;
      }
      case CONFIRMATION: {
         displayedPage = <Confirmation />;
         break;
      }
   }

   return (
      <>
         <div>{displayedPage}</div>
      </>
   );
};

export default FormsWizzard;
