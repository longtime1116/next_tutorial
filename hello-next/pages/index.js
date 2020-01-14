import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href={"./p/[id]"} as={`/p/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
const Blog = () => (
  <div>
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js" />
        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  </div>
);

export default Blog;
