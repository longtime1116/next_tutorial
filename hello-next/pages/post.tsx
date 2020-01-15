import { useRouter, NextRouter } from "next/router";
import Layout from "../components/Layout";

const Page: React.FunctionComponent = () => {
  const router: NextRouter = useRouter();
  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};

export default Page;
