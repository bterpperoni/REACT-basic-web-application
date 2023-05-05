import type { ButtonProps } from '../../interface';
import "./Button.css";

function Button({href, children, ...props }: ButtonProps) {
  const buttonProps = {
    ...props,
    children,
  };

  if (href) {
    return (
      <a href={href} {...buttonProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button {...buttonProps}>
        {children}
      </button>
    );
  }
}

export default Button;