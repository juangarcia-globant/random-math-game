import './Button.css';

type ButtonProps = {
  text: string,
  onClick?: () => void,
};

export const Button: React.FunctionComponent<ButtonProps> = ({
  text = 'button',
  onClick,
}) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
