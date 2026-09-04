// import classNames from "classnames/bind";
// import styles from "./PopperMenu.module.scss";
import { Popover } from 'antd';
import PopperContent from "../PopperContent"
import MenuItem from "./MenuItem";
import { useState } from "react";
import MenuHeader from "./MenuHeader";

const defaultFn = () => { }

function ProperMenu({ children, contents, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ items: contents }]);
  const currents = history[history.length - 1];

  const renderContents = () => {
    return currents.items.map((current, index) => {
      return (
        <MenuItem
          key={index}
          data={current}
          onClick={() => {
            if (current.children) {
              setHistory(prev => [...prev, current.children])
            } else {
              onChange(current)
            }
          }}
        />
      )
    })
  };

  return (
    <Popover
      trigger="click"
      mouseEnterDelay={0.1}
      mouseLeaveDelay={0.4}
      arrow={false}
      placement="bottomRight"
      align={{ offset: [0, 10] }}
      onOpenChange={() => {
        setHistory(prev => prev.slice(0, 1));
      }}
      content={
        <PopperContent width="224px">
          {history.length > 1 && <MenuHeader title="Language" onBack={() => {
            setHistory(history.slice(0, history.length - 1))
          }} />}
          {renderContents()}
        </PopperContent>
      }
    >
      {children}
    </Popover>
  )
}

export default ProperMenu;