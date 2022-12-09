import Link from "next/link";

export interface New {
  id: Number;
  category: string;
  description: string;
  title: string;
}

export interface INews {
  news: New[];
}

const ListNews = ({ news }: INews) => {
  return (
    <div>
      <h1> list of NEWS</h1>

      <pre>{process.env.NEXT_PUBLIC_ANALITICS}</pre>

      <ul>
        {news.map((nw) => {
          return (
            <Link key={nw.id.toString()} href={`news/${nw.id.toString()}`}>
              <li>
                {nw.title} | {nw.category}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default ListNews;

export async function getServerSideProps() {
  const API_URL = process.env.API_URL;
  console.log(
    "🚀 ~ file: index.tsx:40 ~ getServerSideProps ~ API_URL",
    API_URL
  );
  const DB_USER = process.env.DB_USER;
  console.log(
    "🚀 ~ file: index.tsx:41 ~ getServerSideProps ~ DB_USER",
    DB_USER
  );
  const DB_PASSWORD = process.env.DB_PASSWORD;
  console.log(
    "🚀 ~ file: index.tsx:42 ~ getServerSideProps ~ DB_PASSWORD",
    DB_PASSWORD
  );
  const resp = await fetch("http://localhost:4000/news");
  const data = await resp.json();

  return {
    props: {
      news: data,
    },
  };
}
