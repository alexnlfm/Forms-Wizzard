import React, { useContext } from 'react';

// Components
import Button from '../common/Button';

import StateMachineContext from '../StateMachineContext';
import { GREETINGS } from '../states';

const Footer = ({ mainBtnText, mainBtnHandler = null, backButton = false, prevState = null, resetButton = false }) => {
   // eslint-disable-next-line
   const [_, setState] = useContext(StateMachineContext);
   return (
      <div className="mt-10 flex items-center justify-center gap-x-6">
         <Button text={mainBtnText} clickHandler={mainBtnHandler} submitType />
         {backButton && <Button text="Go back" clickHandler={() => setState(prevState)} />}
         {resetButton && <Button text="Start from scratch" clickHandler={() => setState(GREETINGS)} />}
      </div>
   );
};

export default Footer;
