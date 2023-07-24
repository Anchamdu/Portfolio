
import { FC, ReactNode } from "react"

interface ButtonProps {
  text?: string,
  type?: 'submit' | 'button' | 'reset',
  children?: ReactNode,
  onClick?: () => void,
  variant?: 'home' | 'click',
}

const Button: FC<ButtonProps> = ({ text, variant = 'home', children, onClick, type = 'button' }) => {
  let buttonStyle = "bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700 uppercase";

  if (variant === "home") {
    buttonStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow";
  } else if (variant === "click") {
    buttonStyle = "bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700 uppercase";
  }

  return (
    <button type={type} className={buttonStyle} onClick={onClick}>{text || children}</button>
  );
};

export default Button;
