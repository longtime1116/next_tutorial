import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href={`./post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
const Blog = () => (
  <div>
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  </div>
);

export default Blog;

//const Index = () => (
//  <div>
//    <Layout>
//      <p>Hello Next.js</p>
//    </Layout>
//  </div>
//);
//
//export default Index;
//
