type FormWrapperProps = {
   onFormSubmit: (formData: FormData) => void;
   title: string;
   description: string;
   children: React.ReactNode;
   footer: React.ReactNode;
};

const FormWrapper = ({ onFormSubmit, title, description, children, footer }: FormWrapperProps) => (
   <form
      onSubmit={(e) => {
         e.preventDefault();
         const formEl = e.target as HTMLFormElement;
         const formData = new FormData(formEl);
         onFormSubmit(formData);
      }}
   >
      <div className="space-y-12 mt-5 ml-12" style={{ width: '40%' }}>
         <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">{title}</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
            {children}
         </div>
         {footer}
      </div>
   </form>
);

export default FormWrapper;
