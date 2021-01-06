import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("techzone");
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className={"ui grid"}>
        <div className={"ui row"}>
          <div className={"eleven wide column"}>
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className={"five wide column"}>
            <VideoList
              videos={videos}
              VideoSelect={(video) => setSelectedVideo(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// class App extends React.Component {
//   state = { videos: [], selectedVideo: null };
//   onFormSubmit = async (term) => {
//     const response = await youtube.get("/search", {
//       params: { q: term },
//     });
//     this.setState({
//       videos: response.data.items,
//       selectedVideo: response.data.items[0],
//     });
//   };
//   VideoSelect = (video) => {
//     this.setState({ selectedVideo: video });
//     console.log(video);
//   };
//   componentDidMount() {
//     this.onFormSubmit("building");
//   }

//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onSubmit={this.onFormSubmit} />
//         <div className={"ui grid"}>
//           <div className={"ui row"}>
//             <div className={"eleven wide column"}>
//               <VideoDetail selectedVideo={this.state.selectedVideo} />
//             </div>
//             <div className={"five wide column"}>
//               <VideoList
//                 videos={this.state.videos}
//                 VideoSelect={this.VideoSelect}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
export default App;
