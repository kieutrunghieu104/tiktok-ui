import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";
import styles from "./Search.module.scss";
import { Popover } from 'antd';
import { IoIosCloseCircleOutline, IoMdSearch } from "react-icons/io";
import PopperContent from "../../../PopperContent";
import AccountItem from "../../../AccountItem";
import { RiLoader4Line } from "react-icons/ri";
import { useDebounce } from "../../../../hooks";
import * as searchServices from "../../../../apiServices/searchServices"

const cx = classNames.bind(styles);

function Search() {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounceInput = useDebounce(input, 500)
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

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchServices.search(debounceInput, 1, 5);
      setSearchResult(result);
      setLoading(false);
    }

    fetchApi();

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