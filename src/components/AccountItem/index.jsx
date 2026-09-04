import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FaRegCircleCheck } from "react-icons/fa6";
import { ImageAvartar } from "../Image";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")} >
      <ImageAvartar
        src={data.avatar}
        alt={data.full_name}
        className={cx("avatar")}
      />

      <div className={cx("information")}>
        <p className={cx("fullname")}>
          <span>{data.full_name}</span>
          {data.tick && <FaRegCircleCheck className={cx("icon")} />}
        </p>
        <span className={cx("username")}>{data.nickname}</span>
      </div>
    </Link>
  );
}

export default AccountItem;