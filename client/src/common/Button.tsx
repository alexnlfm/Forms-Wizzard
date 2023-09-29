type ButtonProps = {
   text: string;
   clickHandler?: () => {};
   submitType?: Boolean;
};

const Button = ({ text, clickHandler = null, submitType = false }: ButtonProps) => (
   <button
      type={submitType ? 'submit' : 'button'}
      onClick={clickHandler}
      className="rounded-md bg-indigo-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
         hover:bg-indigo-600 focus-visible:outline
         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
   >
      {text}
   </button>
);

export default Button;
