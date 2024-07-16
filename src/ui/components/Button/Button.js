import Link from "next/link";
import styles from "./button.module.scss";

const Button = ({ children, href, className, ...rest }) => {
  let btnClass = styles.button;
  if (className) {
    btnClass += ` ${className}`;
  }

  let btnProps = {
    className: btnClass,
    ...rest,
  };

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} {...btnProps}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} {...btnProps}>
        {children}
      </a>
    );
  }
  return <button {...btnProps}>Button</button>;
};

export default Button;
