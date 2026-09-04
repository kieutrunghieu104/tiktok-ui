import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useState, useEffect, useRef } from "react";
import { Popover } from 'antd';
import { IoIosCloseCircleOutline, IoMdSearch } from "react-icons/io";
import PopperContent from "../../../PopperContent";
import AccountItem from "../../../AccountItem";
import { RiLoader4Line } from "react-icons/ri";
import { useDebounce } from "../../../../hooks"

const cx = classNames.bind(styles);

function Search() {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounceInput = useDebounce(input, 800)
  const inputRef = useRef();

  const handleClear = () => {
    setInput("");
    setSearchResult([]);
    inputRef.current.focus();
  }

  useEffect(() => {
    if (!debounceInput.trim()) {
      setSearchResult([]);
      return;
    };

    setLoading(true);

    fetch(`http://localhost:8888/data?full_name:contains=${encodeURIComponent(debounceInput)}&_page=2&_per_page=5 `)
      .then(res => res.json())
      .then(res => {
        setSearchResult(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [debounceInput]);

  return (
    <Popover
      trigger="click"
      open={showResult && searchResult.length > 0}
      onOpenChange={open => setShowResult(open)}
      arrow={false}
      content={
        <PopperContent width="361px">
          <h4 className={cx("search-label")}>Account</h4>
          {searchResult.map(account => (
            <AccountItem key={account.id} data={account} />
          ))}
        </PopperContent>
      }
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={input}
          type="text"
          placeholder="Search accounts and video"
          spellCheck={false}
          onChange={e => setInput(e.target.value)}
        />

        {input && !loading && (
          <button className={cx("clear")} onClick={handleClear}>
            <IoIosCloseCircleOutline />
          </button>
        )
        }

        {loading && <button className={cx("loading")}>
          <RiLoader4Line />
        </button>}

        <button className={cx("search-button")} style={{ color: input ? "rgba(22, 24, 35, 0.75)" : "" }}>
          <IoMdSearch />
        </button>

      </div>
    </Popover>
  );
}

export default Search;