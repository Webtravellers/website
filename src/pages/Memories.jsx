import { useState, useEffect } from "react";

import PostInFeed from "../components/PostInFeed";
import PostService from "../services/postService";
import InfiniteScroll from "react-infinite-scroll-component";

const Memories = () => {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const postService = new PostService();
  useEffect(() => {
    postService.getAllPosts(skip).then((res) => {
      if (res.data.data === []) setIsEnd(true);
      setPosts([...posts, ...res.data.data].reverse());
    });
  }, [skip]);

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={() => setSkip((s) => s + 10)}
      hasMore={!isEnd}
    >
      {posts?.map((post) => {
        return (
          <PostInFeed
            key={post._id}
            postId={post._id}
            postPhoto={post.photo}
            caption={post.caption}
            likes={post.likes}
            postDate={post.createdAt}
            postedBy={post.postedBy}
          />
        )
      })}
    </InfiniteScroll>
  );
};

export default Memories;
