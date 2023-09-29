import { useContext } from 'react';

// Components
import Button from '../common/Button';

import StateMachineContext from '../StateMachineContext';
import { GREETINGS, StateType } from '../states';

type FooterProps = {
   mainBtnText: string;
   mainBtnHandler?: () => {};
   backButton?: boolean;
   prevState?: StateType;
   resetButton?: boolean;
};

const Footer = ({
   mainBtnText,
   mainBtnHandler = null,
   backButton = false,
   prevState = null,
   resetButton = false,
}: FooterProps) => {
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
