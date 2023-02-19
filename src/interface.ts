export interface InitialState {
  videos: HomePageVideos[];
  currentPlaying: CurrentPlaying | null;
  searchItem: string;
  searchResults: [];
  nextPageToken: string | null;
  recommendedVideos: RecommendedVideos[];
}

export interface HomePageVideos {
  videoId: string;
  videoTitle: string;
  videoDescription: string;
  videoThumbnail: string;
  videoLink: string;
  videoDuration: string;
  videoViews: string;
  videoAge: string;
  channelInfo: ChannelInfoInterface;
}

interface ChannelInfoInterface {
  id: string;
  image?: string;
  name: string;
  subscribers?: string;
}

export interface CurrentPlaying {
  videoId: string;
  videoTitle: string;
  videoDescription: string;
  videoViews: string;
  videoLikes: string;
  videoAge: string;
  channelInfo: ChannelInfoInterface;
}

export interface RecommendedVideos {
  videoId: string;
  videoTitle: string;
  videoThumbnail: string;
  videoDuration: string;
  videoViews: string;
  videoAge: string;
  channelInfo: ChannelInfoInterface;
}

export interface Item {
  snippet: Snippet;
  contentDetails: Upload;
}

interface Snippet {
  title: string;
  thumbnails: Thumbnails;
  publishedAt: Date;
  channelTitle: string;
  channelId: string;
}

interface Thumbnails {
  medium: Url;
}

interface Url {
  url: string;
}

interface Upload {
  upload: VideoId;
}

interface VideoId {
  videoId: string;
}