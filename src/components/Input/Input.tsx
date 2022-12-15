import './Input.css';

type InputProps = {
  type?: string,
  placeholder?: string,
  size?: string,
  error?: string,
  hasError?: boolean,
  onKeyDown?: (evt: React.InputHTMLAttributes<HTMLInputElement>) => void,
  onInputChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void,
};

export const Input: React.FunctionComponent<InputProps> = ({
  type,
  placeholder,
  size = 'sm',
  error,
  hasError,
  onKeyDown,
  onInputChange,
}) => {
  return (
    <>
      <input 
        id="textId"
        type={ type || "text" } 
        className={`input input-${size}`} 
        placeholder={placeholder} 
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />
      {
        hasError && <p className='input-error'> {error} </p>
      }
    </>
  )
}

export default Input;
