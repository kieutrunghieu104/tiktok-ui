import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  children,
  to,
  href,
  primary,
  outline,
  text,
  rounded,
  disable,
  size = "medium",
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps }) {
  let Component = "button";
  const props = {
    onClick,
    ...passProps
  }

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    text,
    rounded,
    disable,
    [size]: size
  }, className);

  if (disable) {
    Object.keys(props).forEach(prop => {
      if (prop.startsWith("on") && typeof props[prop] === "function") {
        delete props[prop];
      }
    })
  }

  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Component>
  );
}

export default Button;