import classNames from "classnames/bind";
import styles from "../Propper.module.scss";

const cx = classNames.bind(styles);

function Tooltip({ children, show }) {
  return (
    <div className={cx("wrapper")} style={{ display: show ? "block" : "none" }}>
      {children}
    </div>
  );
}

export default Tooltip;