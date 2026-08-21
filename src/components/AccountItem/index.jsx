import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

import { CiCircleCheck } from "react-icons/ci";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("avatar")} src="https://marketplace.canva.com/tXH-Q/MAG7IGtXH-Q/1/tl/canva-MAG7IGtXH-Q.jpg" alt="An" />
      <div className={cx("information")}>
        <p className={cx("name")}>
          <span>Nguyen Van An</span>
          <CiCircleCheck className={cx("check-icon")} />
        </p>
        <span className={cx("username")}>AnNV</span>
      </div>
    </div>
  );
}

export default AccountItem;