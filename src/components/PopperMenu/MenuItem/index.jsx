import classNames from "classnames/bind";
import styles from "./MenuItem.module.scss";

import Button from "../../Button";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx("wrapper", {
    separate: data.separate
  })
  return (
    <div className={classes}>
      <Button className={cx("item")} leftIcon={data.icon} to={data.to} onClick={onClick}>{data.title}</Button>
    </div>
  );
}

export default MenuItem;