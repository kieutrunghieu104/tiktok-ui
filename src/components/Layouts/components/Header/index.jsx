import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FaTiktok } from "react-icons/fa";
import { IoIosCloseCircleOutline, IoMdSearch } from "react-icons/io";
import { useState } from "react";
import { Tooltip } from 'antd';
import Popper from "../../../Popper";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import { IoIosLogIn } from "react-icons/io";


const cx = classNames.bind(styles);

function Header() {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <FaTiktok />
          <span className={cx("title")}>Tiktok</span>
        </div>

        <Tooltip
          open={searchResult.length > 0}
          classNames={{ root: cx("tooltip") }}
          arrow={false}
          align={{ offset: [-60, -2] }}
          title={
            <Popper width="361px">
              <h4 className={cx("search-label")}>Account</h4>
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
            </Popper>
          }
        >
          <div className={cx("search")}>
            <input
              type="text"
              placeholder="Search accounts and video"
              spellCheck={false}
              onChange={e => setInput(e.target.value)}
            />

            <button className={cx("clear")}>
              <IoIosCloseCircleOutline />
            </button>

            <button className={cx("loading")}>
            </button>

            <button className={cx("search-button")} style={{ color: input ? "rgba(22, 24, 35, 0.75)" : "" }}>
              <IoMdSearch />
            </button>

          </div>
        </Tooltip>

        <div className={cx("action")}>
          <Button text>Upload</Button>
          <Button primary >Login</Button>
        </div>
      </div>
    </div>
  );

}

export default Header;