import { FC, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {};

const Searchbar: FC<Props> = (props) => {
  const [isSearching, setIsSearching] = useState(false);
  const searchInput = useRef<HTMLInputElement>(null);

  const onClickSearch = useCallback(() => {
    if (!isSearching) {
      setIsSearching(true);
    }
  }, [isSearching]);

  useEffect(() => {
    if (searchInput && searchInput.current) {
      searchInput.current.onblur = () => setIsSearching(false);
    }
  }, []);

  useEffect(() => {
    if (isSearching && searchInput && searchInput.current) {
      searchInput.current.focus();
    }
  }, [isSearching]);
  return (
    <div
      className={[
        "flex flex-row items-center border-white rounded-lg mr-[2px] transition-all ease-in-out duration-300",
        isSearching ? "border-2 mr-0" : "",
      ].join(" ")}
    >
      <div className="flex flex-row items-center">
        <label>
          <input
            ref={searchInput}
            className="transition-all ease-in-out duration-300 text-[#292A28] text-right w-[0px] focus:p-2 focus:w-[300px]"
          />
        </label>
      </div>
      <div className="px-2" onClick={onClickSearch}>
        <Image
          src="/assets/SearchIcon.svg"
          alt="Search icon"
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};

export default Searchbar;
