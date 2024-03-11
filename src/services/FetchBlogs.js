
import request from "superagent";
import moment from 'moment';

let BLOGGER_URL = "https://www.googleapis.com/blogger/v3/blogs/4816302503592460113/posts?key=AIzaSyARD4hXPEU2klOLmJPjPDHP_tE6x7fzNOA"

export function getBlogs(callback) {
  request.get(BLOGGER_URL).end((err, resp) => {
    if (!err) {
      const blogs = [];
      let parser = new DOMParser();
      
      JSON.parse(resp.text).items.map(blog => {
          let doc = parser.parseFromString(blog.content, "text/html");
          let text = blog.title.split("|")
          return blogs.push({
            blogURL: blog.url,
            theme: text[0].trim(),
            title: text[1].trim(),
            author: blog.author.displayName,
            imgURL: doc.querySelector("img").getAttribute("src"),
            content: Array.from(doc.querySelectorAll("p")).map(function(item){return item.textContent}),
            date: moment(blog.published).toDate()
        });
      });

      sessionStorage.setItem("blogs", JSON.stringify(blogs))
      const storedBlogsString = sessionStorage.getItem('blogs');
      const storedBlogsArray = JSON.parse(storedBlogsString);

      callback(storedBlogsArray)
    }
  });
}