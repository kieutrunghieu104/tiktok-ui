import classNames from "classnames/bind";
import styles from "./MenuHeader.module.scss";

import { IoChevronBack } from "react-icons/io5";

const cx = classNames.bind(styles);

function MenuHeader({ title, onBack }) {
  return (
    <header className={cx("wrapper")}>
      <button className={cx("back")} onClick={onBack}>
        <IoChevronBack />
      </button>

      <h4 className={cx("title")}>
        {title}
      </h4>
    </header>
  );
}

export default MenuHeader;