import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FaTiktok } from "react-icons/fa";
import { IoIosCloseCircleOutline, IoMdSearch } from "react-icons/io";
import { useState } from "react";
import { Popover } from 'antd';
import PopperContent from "../../../PopperContent";
import PopperMenu from "../../../PopperMenu";
import AccountItem from "../../../AccountItem";
import Button from "../../../Button";
import { CiMenuKebab } from "react-icons/ci";
import { MdLanguage } from "react-icons/md";
import { FaRegKeyboard } from "react-icons/fa";
import { RiInformation2Line } from "react-icons/ri";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <MdLanguage />,
    title: "English"
  },
  {
    icon: <RiInformation2Line />,
    title: "Feedback and help",
    to: "/feedback"
  },
  {
    icon: <FaRegKeyboard />,
    title: "Keyboard shortcuts"
  }

]

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

        <Popover
          open={searchResult.length > 0}
          arrow={false}
          content={
            <PopperContent width="361px">
              <h4 className={cx("search-label")}>Account</h4>
              <AccountItem />
              <AccountItem />
              <AccountItem />
              <AccountItem />
            </PopperContent>
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
        </Popover>

        <div className={cx("action")}>
          <Button text>Upload</Button>
          <Button primary >Login</Button>

          <PopperMenu contents={MENU_ITEMS}>
            <button className={cx("more-button")}>
              <CiMenuKebab />
            </button>
          </PopperMenu>
        </div>
      </div>
    </div >
  );

}

export default Header;