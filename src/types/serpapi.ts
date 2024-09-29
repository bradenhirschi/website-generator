type SearchMetadata = {
  id: string;
  status: string;
  json_endpoint: string;
  created_at: string;
  processed_at: string;
  google_maps_url: string;
  raw_html_file: string;
  total_time_taken: number;
};

type SearchParameters = {
  engine: string;
  type: string;
  q: string;
  ll: string;
  google_domain: string;
  hl: string;
};

type SearchInformation = {
  local_results_state: string;
  query_displayed: string;
};

type GpsCoordinates = {
  latitude: number;
  longitude: number;
};

type RatingSummary = {
  stars: number;
  amount: number;
};

type UserReview = {
  username: string;
  rating: number;
  contributor_id: string;
  description: string;
  link: string;
  images: { title: string; thumbnail: string }[];
  date: string;
};

type PlaceResults = {
  title: string;
  place_id: string;
  data_id: string;
  data_cid: string;
  reviews_link: string;
  photos_link: string;
  gps_coordinates: GpsCoordinates;
  place_id_search: string;
  provider_id: string;
  thumbnail: string;
  rating_summary: RatingSummary[];
  rating: number;
  reviews: number;
  type: string[];
  type_ids: string[];
  extensions: { planning: string[] }[];
  booking_link: string;
  website: string;
  phone: string;
  open_state: string;
  hours: { [key: string]: string }[];
  images: { title: string; thumbnail: string }[];
  questions_and_answers: {
    question: { text: string; date: string; language: string };
    answer: { text: string; date: string; language: string };
    total_answers: number;
  }[];
  user_reviews: { most_relevant: UserReview[] };
};

type SerpApiResponseItem = {
  search_metadata: SearchMetadata;
  search_parameters: SearchParameters;
  search_information: SearchInformation;
  place_results: PlaceResults;
};
