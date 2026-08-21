
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FaTiktok } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { VscLoadingCompact } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";


const cx = classNames.bind(styles);
function Header() {

  const [input, setInput] = useState("");

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <FaTiktok className={cx("icon")} />
          <strong>TikTok</strong>
        </div>

        <div className={cx("search")}>
          <input
            placeholder="search account and videos"
            onChange={e => setInput(e.target.value)}
          />
          {/* <button className={cx("clear")}>
            <IoIosCloseCircleOutline />
          </button>
          <VscLoadingCompact className={cx("loading")} /> */}
          <button className={cx("search-icon")} style={{ color: input ? "#000" : "rgba(22, 34, 35, 0.75)" }}>
            <IoIosSearch />
          </button>
        </div>

        <div className={cx("action")}>Hello</div>
      </div>
    </div >
  );
}

export default Header;