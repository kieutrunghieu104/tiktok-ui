
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FaTiktok } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { VscLoadingCompact } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import Tooltip from "../../../Propper/Tooltip";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import { CiLogin } from "react-icons/ci";


const cx = classNames.bind(styles);
function Header() {

  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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

          <Tooltip show={searchResult.length}>
            <h4 className={cx("search-result-title")}>Accounts</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </Tooltip>
        </div>

        <div className={cx("action")}>
          <Button text>Upload</Button>
          <Button primary >Login</Button>
        </div>
      </div>
    </div >
  );
}

export default Header;