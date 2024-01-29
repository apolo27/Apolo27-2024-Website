import request from "superagent";

const keywords = ['tutorial', 'diy', 'DIY'];
const keywordQuery = keywords.join('|');
 
export function getTutorials(callback) {

    request.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCzfVpVDOvqLXVKLMDPczp5BUcs2jzU7Dg&channelId=UCUb8Jn33w9TgVRim_wwWoGA&q=${keywordQuery}&part=snippet,id&order=date&maxResults=4&type=video`).end((err, resp) => {
        if (!err) {
          const videos = [];
          JSON.parse(resp.text).items.map(video => {
            return videos.push({
              title: video.snippet.title,
              thumbnail: video.snippet.thumbnails.medium.url,
              url: "https://www.youtube.com/watch?v=" + video.id.videoId
            });
          });
          sessionStorage.setItem("tutorials", JSON.stringify(videos))
          const storedTutorialsString = sessionStorage.getItem('tutorials');
          const storedTutorialsArray = JSON.parse(storedTutorialsString);
          callback(storedTutorialsArray)
        }
      });
}

export function getRecentVideos(callback) {
  request.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCzfVpVDOvqLXVKLMDPczp5BUcs2jzU7Dg&channelId=UCUb8Jn33w9TgVRim_wwWoGA&q&part=snippet,id&order=date&maxResults=3&type=video`).end((err, resp) => {
    if (!err) {
      const videos = [];
      JSON.parse(resp.text).items.map(video => {
        return videos.push({
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.high.url,
          url: "https://www.youtube.com/watch?v=" + video.id.videoId
        });
      });
      sessionStorage.setItem("recentVideos", JSON.stringify(videos))
      const storedRecentVideosString = sessionStorage.getItem('recentVideos');
      const storedRecentVideosArray = JSON.parse(storedRecentVideosString);
      callback(storedRecentVideosArray)
    }
  });
}