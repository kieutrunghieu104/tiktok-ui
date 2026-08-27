import classNames from "classnames/bind";
import styles from "./PopperMenu.module.scss";
import { Popover } from 'antd';
import PopperContent from "../PopperContent"
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);


function ProperMenu({ children, contents }) {

  const renderContents = () => {
    return contents.map((content, index) => (
      <MenuItem data={content} key={index} />
    ));
  }

  return (
    <Popover
      trigger="hover"
      mouseEnterDelay={0.1}
      mouseLeaveDelay={0.5}
      arrow={false}
      placement="bottomRight"
      align={{ offset: [0, 10] }}
      content={
        <PopperContent width="224px">
          {renderContents()}
        </PopperContent>
      }
    >
      {children}
    </Popover>
  )
}

export default ProperMenu;