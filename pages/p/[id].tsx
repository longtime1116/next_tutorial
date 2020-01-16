import { NextPage } from "next";
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
    <p>{show.summary}</p>
    {show.image && <img src={show.image.medium}></img>}
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
