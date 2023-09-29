import { useRef } from 'react';
import { createRoot } from 'react-dom/client';

// Components
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import FormsWizzard from './components/FormsWizzard';

// @ts-ignorets
import { useStateMachine } from '../../fsm';
import statesConfig, { GREETINGS } from './states';
import StateMachineContext from './StateMachineContext';

const App = () => {
   const stateMachine = useStateMachine(statesConfig, GREETINGS, true);
   const chosenMethodRef = useRef(null);
   return (
      <>
         <Header />
         <StateMachineContext.Provider value={stateMachine}>
            <Breadcrumbs chosenMethodRef={chosenMethodRef} />
            <FormsWizzard chosenMethodRef={chosenMethodRef} />
         </StateMachineContext.Provider>
      </>
   );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
