export const GREETINGS = 'greetings';
export const BASIC_DETAILS = 'basic-details';
export const ADVANCED_DETAILS_TYPE_1 = 'advanced-details-type-1';
export const ADVANCED_DETAILS_TYPE_2 = 'advanced-details-type-2';
export const ADVANCED_DETAILS = 'advanced-details';
export const FINAL_DETAILS = 'final-details';
export const CONFIRMATION = 'confirmation';

export const stateNamesMap = {
   [GREETINGS]: 'Greetings',
   [BASIC_DETAILS]: 'Basic info',
   [ADVANCED_DETAILS_TYPE_1]: 'Registration method',
   [ADVANCED_DETAILS_TYPE_2]: 'Registration method',
   [ADVANCED_DETAILS]: 'Registration method',
   [FINAL_DETAILS]: 'Additional info',
   [CONFIRMATION]: 'Confirmation',
};

const statesConfig = {
   [GREETINGS]: {
      validNextStates: [BASIC_DETAILS],
   },
   [BASIC_DETAILS]: {
      validNextStates: [ADVANCED_DETAILS_TYPE_1, ADVANCED_DETAILS_TYPE_2, GREETINGS],
      // onEnter: () => {
      //    console.log(`Entering ${BASIC_DETAILS}`);
      // },
      onExit: (onExitData) => {
         if (onExitData) {
            console.log('Posting to server...');
            console.log(onExitData);
         }
      },
   },
   [ADVANCED_DETAILS_TYPE_1]: {
      validNextStates: [FINAL_DETAILS, BASIC_DETAILS, GREETINGS],
      // onEnter: () => {
      //    console.log(`Entering ${ADVANCED_DETAILS_TYPE_1}`);
      // },
      onExit: (onExitData) => {
         if (onExitData) {
            console.log('Posting to server...');
            console.log(onExitData);
         }
      },
   },
   [ADVANCED_DETAILS_TYPE_2]: {
      validNextStates: [FINAL_DETAILS, BASIC_DETAILS, GREETINGS],
      // onEnter: () => {
      //    console.log(`Entering ${ADVANCED_DETAILS_TYPE_2}`);
      // },
      onExit: (onExitData) => {
         if (onExitData) {
            console.log('Posting to server...');
            console.log(onExitData);
         }
      },
   },
   [FINAL_DETAILS]: {
      validNextStates: [CONFIRMATION, ADVANCED_DETAILS_TYPE_1, ADVANCED_DETAILS_TYPE_2, BASIC_DETAILS, GREETINGS],
      // onEnter: () => {
      //    console.log(`Entering ${FINAL_DETAILS}`);
      // },
      onExit: (onExitData) => {
         console.log('Posting to server...');
         console.log(onExitData);
      },
   },
   [CONFIRMATION]: {
      validNextStates: [],
   },
};

export default statesConfig;
