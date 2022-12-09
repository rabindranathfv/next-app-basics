import React, { useState, useEffect } from "react";
import { getSession, signIn, signOut } from "next-auth/react";

interface DashboardInfo {
  post: Number;
  likes: Number;
  followers: Number;
  following: Number;
}

const Dashboard: () => React.ReactNode | React.ReactNode[] = () => {
  const [isLoading, setisLoading] = useState(true);
  const [dasboardData, setDasboardData] = useState<DashboardInfo | null>(null);

  useEffect(() => {
    (async function fetchDasboard() {
      const session = await getSession();
      if (!session) {
        console.log("NO ESTA LOGEADO*******************");
        signIn();
      } else {
        setisLoading(false);
      }
      const fetchUrl = `http://localhost:4000/dashboard`;
      const resp = await fetch(fetchUrl);
      const data = await resp.json();

      setDasboardData(data);
      setisLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div>
      <h1>Dashboard Data</h1>
      <>
        <p>POSTS: {dasboardData?.post.toString()}</p>
        <p>LIKES: {dasboardData?.likes.toString()}</p>
        <p>FOLLOWERS: {dasboardData?.followers.toString()}</p>
        <p>FOLLOWING: {dasboardData?.following.toString()}</p>
      </>
    </div>
  );
};

export default Dashboard;
