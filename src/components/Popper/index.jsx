import classNames from "classnames/bind";
import styles from "./Popper.module.scss";

const cx = classNames.bind(styles);
function Popper({ children, width }) {
  return (
    <div className={cx("wrapper")} style={{ width }}>
      {children}
    </div>
  );
}

export default Popper;