import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Spinner from '../components/Spinner';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { getHomePageVideo } from '../store/reducers/getHomePageVideos';

const Home = () => {
	const dispatch = useAppDispatch();
	const videos = useAppSelector((state) => state.youtubeApp.videos);

	useEffect(() => {
		dispatch(getHomePageVideo(false));
		console.log(videos);
	}, [dispatch]);

	return (
		<div className="max-h-screen overflow-hidden">
			<Navbar />
			<div className="flex" style={{ height: "92.5vh" }}>
				<Sidebar />
				{videos.length ? (
					<InfiniteScroll>

					</InfiniteScroll>
				) : (
					<Spinner />
				)}
			</div>
		</div>
	)
}

export default Home