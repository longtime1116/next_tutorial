import Layout from "../components/Layout";
import Link from "next/link";
import { NextPage } from "next";

type Props = {
  id: string;
  title: string;
};

const PostLink: React.FunctionComponent<Props> = ({ id, title }) => (
  <li>
    <Link href={"./p/[id]"} as={`/p/${id}`}>
      <a>{title}</a>
    </Link>
  </li>
);
const Blog: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <div>
    <Layout>
      <h1>This is my Blog.</h1>
      user-agent: {userAgent}
      <ul>
        <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js" />
        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  </div>
);

Blog.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Blog;
