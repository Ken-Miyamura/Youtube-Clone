export interface InitialState {
  videos: HomePageVideos[];
  currentPlaying: CurrentPlaying | null;
  searchItem: string;
  searchResults: [];
  nextPageToken: string | null;
  recommendedVideos: RecommendedVideos[];
}

export interface HomePageVideos {}
export interface CurrentPlaying {}
export interface RecommendedVideos {}