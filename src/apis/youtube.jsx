import axios from "axios";

const KEY = "AIzaSyD3FW4BxOr5irfQVRa5kYjEyN9xLVZcv7o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",

  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
