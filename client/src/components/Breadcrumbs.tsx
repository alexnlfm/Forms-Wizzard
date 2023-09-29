import { useContext } from 'react';
import { Disclosure } from '@headlessui/react';
import { findIndex } from 'lodash';

import StateMachineContext from '../StateMachineContext';
import {
   GREETINGS,
   BASIC_DETAILS,
   ADVANCED_DETAILS_TYPE_1,
   ADVANCED_DETAILS_TYPE_2,
   ADVANCED_DETAILS,
   FINAL_DETAILS,
   CONFIRMATION,
   stateNamesMap,
   StateType,
} from '../states';

const stateSequence = [GREETINGS, BASIC_DETAILS, ADVANCED_DETAILS, FINAL_DETAILS, CONFIRMATION];

function adjustState(state: StateType) {
   return state === ADVANCED_DETAILS_TYPE_1 || state === ADVANCED_DETAILS_TYPE_2 ? ADVANCED_DETAILS : state;
}

function checkIsCurrentAndClickable(currentState: StateType, state: StateType) {
   const adjustedCurrentState = adjustState(currentState);
   const adjustedState = adjustState(state);
   const currentStateIndex = findIndex(stateSequence, (item) => item === adjustedCurrentState);
   const stateIndex = findIndex(stateSequence, (item) => item === adjustedState);

   return {
      isCurrent: adjustedCurrentState === adjustedState,
      isClickable: currentStateIndex > stateIndex && currentStateIndex !== stateSequence.length - 1,
   };
}

function classNames(...classes: string[]) {
   return classes.filter(Boolean).join(' ');
}

type BreadcrumbsProps = { chosenMethodRef: { current: 'phone' | 'email' | null } };

const Breadcrumbs = ({ chosenMethodRef }: BreadcrumbsProps) => {
   const [currentState, setState] = useContext(StateMachineContext);
   return (
      <Disclosure as="nav" className="bg-indigo-800">
         <div className="mx-auto x-2 sm:px-3 lg:px-3">
            <div className="relative flex h-16 items-center justify-between">
               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                     <div className="flex space-x-4">
                        {stateSequence.map((item: StateType, i: number) => {
                           let state = item;
                           if (item === ADVANCED_DETAILS) {
                              state =
                                 chosenMethodRef.current === 'phone'
                                    ? ADVANCED_DETAILS_TYPE_1
                                    : ADVANCED_DETAILS_TYPE_2;
                           }
                           const isLastItem = i + 1 === stateSequence.length;
                           return (
                              <BreadcrumbItem
                                 key={item}
                                 currentState={currentState}
                                 state={state}
                                 setState={setState}
                                 noArrow={isLastItem}
                              />
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Disclosure>
   );
};

type BreadcrumbItemProps = {
   currentState: StateType;
   state: StateType;
   noArrow: boolean;
   setState: (state: StateType) => {};
};

const BreadcrumbItem = ({ currentState, state, noArrow, setState }: BreadcrumbItemProps) => {
   const { isCurrent, isClickable } = checkIsCurrentAndClickable(currentState, state);
   return (
      <div className="text-sm font-medium" style={{ marginLeft: 0 }}>
         <span
            className={classNames(
               isCurrent ? 'bg-indigo-900 text-white' : 'text-gray-300',
               isClickable ? 'hover:bg-indigo-700 hover:text-white' : '',
               'rounded-md px-3 py-2'
            )}
            style={{ cursor: isClickable ? 'pointer' : 'default' }}
            onClick={() => {
               if (isClickable) {
                  setState(state);
               }
            }}
         >
            {stateNamesMap[state]}
         </span>
         {!noArrow && (
            <span className="text-gray-300" style={{ margin: '0 10px' }}>
               {' > '}
            </span>
         )}
      </div>
   );
};

export default Breadcrumbs;
