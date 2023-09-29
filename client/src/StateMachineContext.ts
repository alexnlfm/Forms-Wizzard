import { createContext, Context } from 'react';
import { StateType } from './states';

type StateMachineContextType = Context<[StateType, (state: StateType, data?: {}) => {}]>;

const StateMachineContext: StateMachineContextType = createContext(null);

export default StateMachineContext;
