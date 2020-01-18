import { NextPage } from "next";
import Markdown from "react-markdown";
import Layout from "../../components/Layout";

type Show = {
  name: string;
  summary: string;
  image: {
    medium: "string";
  } | null;
};

const Post: NextPage<{ show: Show }> = ({ show }) => (
  <Layout>
    <h1>{show.name}</h1>
    <div className="markdown">
      <Markdown
        source={`
This is our blog post.
We can have a [link](/link).

## This is a title

      `}
      />
    </div>
    <p>{show.summary}</p>
    {show.image && <img src={show.image.medium}></img>}
    <style jsx global>{`
      .markdown {
        font-family: "Arial";
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
);

Post.getInitialProps = async context => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show: Show = await res.json();

  console.log(`Fetched show: ${show.name}`);
  return { show };
};

export default Post;
