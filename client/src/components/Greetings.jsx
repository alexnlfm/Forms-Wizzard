import React, { useContext } from 'react';

// Components
import Footer from '../common/Footer';

import StateMachineContext from '../StateMachineContext';
import { BASIC_DETAILS } from '../states';

const Greetings = () => {
   // eslint-disable-next-line
   const [_, setState] = useContext(StateMachineContext);
   return (
      <>
         <div className="mx-auto max-w-2xl py-32">
            <div className="text-center">
               <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Welcome to registration form
               </h1>
            </div>
         </div>

         <Footer mainBtnText="Start the process" mainBtnHandler={() => setState(BASIC_DETAILS)} />
      </>
   );
};

export default Greetings;
