import React from "react";
import { ClickAwayListener } from "@mui/material";
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";


const SearchBox = () => {
    const { t, i18n } = useTranslation();

    const [locations, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState(false);
    const [searching, setSearching] = useState(false);


    return (
        <ClickAwayListener /* onClickAway={handleClickAway} */>
            <div className="d-flex justify-content-center w-100 ">
                {!searching}
                <input
                    className="w-50 search-box p-3"
                    type="search"
                    value={searchTerm}
                    /* onFocus={handleFocus} */
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={t("search-box.placeholder-part")}
                />
                {searchResult &&
                    <>
                        <div className="absolute right-1/2 -bottom-5 rotate-45 h-4 w-4 drop-shadow-lg bg-white rounded-sm border-l border-t"></div>

                        <div className={`${loading ? 'justify-center items-center' : locations.length < 1 && 'justify-center items-center'} absolute overflow-y-auto overflow-x-hidden flex flex-col top-[49px] w-[23rem] -left-11 h-80 bg-white drop-shadow-xl rounded`}>

                            {loading ?
                                <svg aria-label="Loading..." className="h-6 w-6 my-2 animate-spin" viewBox="0 0 100 100"><rect fill="#555555" height="6" opacity="0" rx="3" ry="3" transform="rotate(-90 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.08333333333333333" rx="3" ry="3" transform="rotate(-60 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.16666666666666666" rx="3" ry="3" transform="rotate(-30 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.25" rx="3" ry="3" transform="rotate(0 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.3333333333333333" rx="3" ry="3" transform="rotate(30 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.4166666666666667" rx="3" ry="3" transform="rotate(60 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.5" rx="3" ry="3" transform="rotate(90 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.5833333333333334" rx="3" ry="3" transform="rotate(120 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.6666666666666666" rx="3" ry="3" transform="rotate(150 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.75" rx="3" ry="3" transform="rotate(180 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.8333333333333334" rx="3" ry="3" transform="rotate(210 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.9166666666666666" rx="3" ry="3" transform="rotate(240 50 50)" width="25" x="72" y="47"></rect></svg>
                                : locations.length > 0 ?
                                    locations.map((user) => (
                                        {/* <SearchUserItem {...user} key={user._id} /> */ }
                                    ))
                                    :
                                    <span className="text-gray-400 text-sm">No results found.</span>
                            }

                        </div>
                    </>
                }
            </div>
        </ClickAwayListener>

    )
}

export default SearchBox