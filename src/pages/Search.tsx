import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/Navbar'
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
		return () => {
			dispatch(clearVideos());
      if (searchItem === "") navigate("/");
      dispatch(getSearchPageVideos(false));
		}
	}, [dispatch, navigate, searchItem]);

	return (
		<div className="max-h-screen overflow-hidden">
			<Navbar />
			<div className="flex" style={{ height: "92.5vh" }}>
				<Sidebar />
				{videos.length ? (
					<InfiniteScroll 
						dataLength={videos.length} 
						next={() => dispatch(getSearchPageVideos(true))}
						hasMore={videos.length < 500}
						loader={<Spinner />}
						height={600}
					>
						<div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
							{videos.map((item: HomePageVideos) => {
								return <Card key={item.videoId} data={item} />
							})}
						</div>

					</InfiniteScroll>
				) : (
					<Spinner />
				)}
			</div>
		</div>
	)
}

export default Search;