import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-4xl">
          Welcome to my blog—a space where I share thoughts, stories, and
          insights across three meaningful categories:
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          
          <p>
          <b>Love and Shayari :  </b>This section dives into the beauty of human
          connection and the power of kindness. From reflections on love to
          stories about giving back, it’s all about celebrating what it means to
          care deeply.
            </p>
            <p>
           <b> Personal Experiences: </b>  Life is full of lessons and moments
          that shape us. Here, I share snippets of my own journey—the
          challenges, triumphs, and everything in between. 
              </p>
              <p> 
                <b>Technology:
                   </b> As a Data
          Engineer, I’m passionate about the world of data and innovation. This
          section explores tools, trends, and ideas that are transforming the
          way we live and work. Through these categories, I aim to connect,
          inspire, and create a space where ideas and emotions come together.
          Let’s explore this journey together!
                </p>
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
