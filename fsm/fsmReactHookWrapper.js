import { useState, useEffect } from 'react';
import FSM from './fsm';

export default function useStateMachine(statesConfig, initialState, isLoggingOn) {
   const [currentState, setCurrentState] = useState(null);

   useEffect(() => {
      FSM.init(statesConfig, initialState, isLoggingOn);
      setCurrentState(FSM.getCurrentState());
   }, []);

   function setState(toState, onExitData, onEnterData) {
      FSM.transition(toState, onExitData, onEnterData);
      setCurrentState(FSM.getCurrentState());
   }

   return [currentState, setState];
}
