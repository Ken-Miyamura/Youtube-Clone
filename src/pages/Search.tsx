import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import SearchCard from '../components/SearchCard';
import Sidebar from '../components/Sidebar'
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../interface';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import { clearVideos } from '../store/slice';

const Search = () => {
	const dispatch = useAppDispatch();
	const videos: HomePageVideos[] = useAppSelector((state) => state.youtubeApp.videos);
  const searchItem: string = useAppSelector((state) => state.youtubeApp.searchItem);
  const navigate = useNavigate();

	useEffect(() => {
    dispatch(clearVideos());
    if (searchItem === "") navigate("/");
    dispatch(getSearchPageVideos(false));
	}, [dispatch, navigate, searchItem]);

	return (
		<div className="max-h-screen overflow-hidden">
			<Navbar />
			<div className="flex" style={{ height: "92.5vh" }}>
				<Sidebar />
				{videos.length ? (
          <div className="py-8 pl-8 flex flex-col gap-5 w-full">
            <InfiniteScroll 
              dataLength={videos.length} 
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={600}
              >
              <div className="my-5">
                {videos.map((item: HomePageVideos) => {
                  return <SearchCard key={item.videoId} data={item} />
                })}
              </div>

            </InfiniteScroll>
          </div>
				) : (
					<Spinner />
				)}
			</div>
		</div>
	)
}

export default Search;