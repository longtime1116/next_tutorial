import Layout from "../components/Layout";
import Link from "next/link";
import { NextPage } from "next";
import fetch from "isomorphic-unfetch";

type Show = {
  id: number;
  name: string;
};

const Index: NextPage<{ shows: Show[] }> = ({ shows }) => (
  <div>
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      {
        // styling component:
        //  babel plugin として機能するので、ビルドプロセス時に適用される
      }
      <style jsx>{`
        h1,
        a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  </div>
);

Index.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  // NOTE: This log is only shown at server side.
  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    shows: data.map((entry: { show: Show }) => entry.show)
  };
};

export default Index;
