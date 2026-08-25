import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  children,
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disable = false,
  size = "medium",
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps
  };

  if (disable) {
    Object.keys(props).forEach(prop => {
      if (prop.startsWith("on") && typeof props[prop] === "function") {
        delete props[prop]
      }
    })
  }

  if (to) {
    props.to = to;
    Comp = Link
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    text,
    rounded,
    disable,
    [size]: true,
  }, className);
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;