import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import {
  FaTiktok,
  FaRegKeyboard,
  FaRegUser
} from "react-icons/fa";
import { Tooltip } from 'antd';
import PopperMenu from "../../../PopperMenu";
import Button from "../../../Button";
import { CiMenuKebab } from "react-icons/ci";
import { MdLanguage, MdOutlineCloudUpload } from "react-icons/md";
import { RiInformation2Line, RiCoinsLine } from "react-icons/ri";
import { TiMessage } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { ImageAvartar } from "../../../Image";
import Search from "../Search";
import { Link } from "react-router-dom";
import routesConfig from "../../../../config/routes";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <MdLanguage />,
    title: "English",

    children: {
      title: "Language",
      items: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        }, {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Việt Nam",
        }
      ]
    }
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
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  }

  const userMenu = [
    {
      icon: <FaRegUser />,
      title: "View profile",
      to: "@annv"
    }, {
      icon: <RiCoinsLine />,
      title: "Get coins",
      to: "/coins"
    }, {
      icon: <IoSettingsOutline />,
      title: "Settings",
      to: "/settings"
    },
    ...MENU_ITEMS,
    {
      icon: <MdLogout />,
      title: "Logout",
      to: "/logout",
      separate: true
    },
  ]


  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={routesConfig.home} className={cx("logo")}>
          <FaTiktok />
          <span className={cx("title")}>Tiktok</span>
        </Link>

        {/* search */}
        <Search />

        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tooltip
                title={"Upload"}
              >
                <button className={cx("action-btn")}>
                  <MdOutlineCloudUpload />
                </button>
              </Tooltip>

              <Tooltip
                title={"Message"}
              >
                <button className={cx("action-btn")}>
                  <TiMessage />
                </button>
              </Tooltip>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary >Login</Button>
            </>
          )
          }
          <PopperMenu contents={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <ImageAvartar
                className={cx("user-avatar")}
                src="https://marketplace.canva.com/tXH-Q/MAG7IGtXH-Q/1/tl/canva-MAG7IGtXH-Q.jpg"
                alt="Nguyen Van An" />
            ) : (
              <button className={cx("more-button")}>
                <CiMenuKebab />
              </button>
            )}
          </PopperMenu>
        </div>
      </div>
    </div >
  );

}

export default Header;