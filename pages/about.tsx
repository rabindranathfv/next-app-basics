import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../src/components/footer";

interface IAbout {
  title: string;
  description: string;
}

const About = ({ title, description }: IAbout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="content">
        <h1>About VIEW</h1>

        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </div>
    </>
  );
};

About.getLayout = function PageLayout(page: NextPage) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      title: "About page",
      description: "About description and learning basics of Next 12",
    },
  };
}

export default About;
