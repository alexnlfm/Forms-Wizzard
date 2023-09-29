function checkIfObject(value) {
   return typeof value === 'object' && !Array.isArray(value) && value !== null;
}

const FSM = {
   currentState: null,
   states: null,
   isLoggingOn: false,

   init(statesConfig, initialState = null, isLoggingOn = false) {
      if (!checkIfObject(statesConfig)) {
         console.error('Invalid configuration');
         return;
      }
      this.states = statesConfig;
      if (typeof initialState === 'string') {
         this.currentState = initialState;
      }
      if (typeof isLoggingOn === 'boolean') {
         this.isLoggingOn = isLoggingOn;
      }
   },

   getCurrentState() {
      return this.currentState;
   },

   transition(toState, onExitData = null, onEnterData = null) {
      if (this.states === null) {
         if (this.isLoggingOn) {
            console.error('State machine is not configured');
         }
         return;
      }
      if (typeof toState !== 'string' || !Object.keys(this.states).includes(toState)) {
         if (this.isLoggingOn) {
            console.error('Invalid next state');
         }
         return;
      }
      const fromState = this.currentState;
      if (fromState === toState) {
         if (this.isLoggingOn) {
            console.error(`Aborting transition to the same state (${fromState})`);
         }
         return;
      }

      const { validNextStates, onExit } = this.states[fromState] || {};
      if (fromState && (!validNextStates || validNextStates?.length === 0)) {
         if (this.isLoggingOn) {
            console.error(`State machine is in final state (${fromState})`);
         }
         return;
      }
      if (fromState && !validNextStates?.includes(toState)) {
         if (this.isLoggingOn) {
            console.error(`Transition from "${fromState}" to "${toState}" is not configured`);
         }
         return;
      }

      if (typeof onExit === 'function') {
         onExit(onExitData);
      }
      this.currentState = toState;
      const { onEnter } = this.states[this.currentState] || {};
      if (typeof onEnter === 'function') {
         onEnter(onEnterData);
      }
   },

   reset(toState) {
      if (typeof toState !== 'string' || !Object.keys(this.states).includes(toState)) {
         if (this.isLoggingOn) {
            console.error('Invalid state to reset to');
         }
         return;
      }
      this.currentState = toState;
   },
};

export default FSM;
