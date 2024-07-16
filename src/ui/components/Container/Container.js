import styles from "./container.module.scss";

const Container = ({ children, className, ...rest }) => {
  let containerClass = styles.container;
  if (className) {
    containerClass += ` ${className}`;
  }
  let containerProps = {
    className,
    ...rest,
  };
  return <div {...containerProps}>{children}</div>;
};

export default Container;
