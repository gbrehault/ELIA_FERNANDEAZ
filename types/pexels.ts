export interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
}

export interface PexelsSearchResponse {
  photos: PexelsPhoto[];
  total_results: number;
  page: number;
  per_page: number;
  next_page?: string;
}

export interface ProcessedPexelsPhoto {
  id: number;
  alt: string;
  photographer: string;
  src: {
    large: string;
    large2x: string;
    portrait: string;
    landscape: string;
  };
}
