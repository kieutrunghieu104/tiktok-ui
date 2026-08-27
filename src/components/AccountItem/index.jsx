import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FaRegCircleCheck } from "react-icons/fa6";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img src="https://marketplace.canva.com/tXH-Q/MAG7IGtXH-Q/1/tl/canva-MAG7IGtXH-Q.jpg" alt="Hoa" className={cx("avatar")} />

      <div className={cx("information")}>
        <p className={cx("fullname")}>
          <span>Nguyen Van An</span>
          <FaRegCircleCheck className={cx("icon")} />
        </p>
        <span className={cx("username")}>AnNV</span>
      </div>
    </div>
  );
}

export default AccountItem;