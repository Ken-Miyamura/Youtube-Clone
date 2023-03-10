import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube, BsBell } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import { TiMicrophone } from "react-icons/ti";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { changeSearchItem, clearSearchItem, clearVideos } from '../store/slice';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';

const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchItem = useAppSelector((state) => state.youtubeApp.searchItem);

  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    dispatch(clearVideos());
    dispatch(getSearchPageVideos(false));
  };

  return (
    <div className="flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-medium">YouTube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex items-center bg-zinc-900 h-10 pl-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              <AiOutlineSearch className="text-xl" />
              <input 
                type="text" 
                className="w-96 bg-zinc-900 focus:outline-none border-none"
                value={searchItem}
                onChange={(e) => dispatch(changeSearchItem(e.target.value))}
              />
              <AiOutlineClose 
                className={`text-xl cursor-pointer ${!searchItem ? "invisible" : "visible"}`} 
                onClick={() => dispatch(clearSearchItem())}
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <TiMicrophone />
        </div>
      </div>
      <div className="flex gap-5 items-center text-xl">
        <BiVideoPlus />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <img 
          src="https://yt3.ggpht.com/wgnEbc2Ec2JYkeyzUbiHzDlAFObI2Btwo2YRCEF1aCMBiRc5E_zWy8-URBQS3EMQ1yzzaGFR=s88-c-k-c0x00ffffff-no-rj-mo" 
          className="w-9 h-9 rounded-full" 
          alt="logo" 
        />
      </div>
    </div>
  )
}

export default Navbar
