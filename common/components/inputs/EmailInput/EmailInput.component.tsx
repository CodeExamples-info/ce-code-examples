import { InformationCircleIcon } from '@heroicons/react/solid';
import { Dispatch, SetStateAction, useState } from 'react';

interface EmailInputProps {
  showLabel?: boolean;
  showTip?: boolean;
  inputClassNames?: string;
  emailState: string;
  handleInputChange: Dispatch<SetStateAction<string>>;
}

const EmailInput = (props: EmailInputProps) => {
  // const [invalidEmailError] = useState("Please enter a valid email address");
  const [isTouched, setIsTouched] = useState(false);
  const baseClassNames =
    'border border-gray-300 shadow py-2 px-3 rounded-md placeholder:font-light text-sm focus:border-accent-dark focus:ring-accent-dark focus:ring-1 focus:outline-none peer';
  const validationClassNames =
    'invalid:border-red-300 invalid:ring-red-300 invalid:text-red-900 valid:border-green-300 valid:ring-green-300 valid:text-green-900';

  const handleOnBlur = () => {
    setIsTouched(true);
  };

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleInputChange(e.target.value);
  };

  return (
    <>
      {/* TODO: Check if we can pass the id for the email as props to avoid the duplicate id issue for multiple inputs on the page */}
      {props.showLabel && (
        <label htmlFor="email" className="block font-medium mb-1.5">
          Email
        </label>
      )}
      <div>
        <input
          type="email"
          id="email"
          placeholder="your.email@example.com"
          className={`${baseClassNames} ${isTouched ? validationClassNames : ''}`}
          required
          onBlur={handleOnBlur}
          onInput={handleOnInput}
        />
        <p
          className={
            'text-xs text-red-900 font-medium mt-1 ml-1 ' +
            (!isTouched ? 'hidden' : 'peer-invalid:block peer-valid:hidden')
          }
        >
          Please enter a valid email address
        </p>
      </div>
      {props.showTip && (
        <p className="text-xs text-gray-500 mt-2 ml-1">
          <InformationCircleIcon className="h-4 inline-block" /> Only used to check if you are already registered.
        </p>
      )}
    </>
  );
};

export default EmailInput;
