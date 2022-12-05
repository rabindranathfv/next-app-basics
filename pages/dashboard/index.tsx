import { useState, useEffect } from "react";

const Dashboard = () => {
  const [isLoading, setisLoading] = useState(true);
  const [dasboardData, setDasboardData] = useState(null);

  useEffect(() => {
    (async function fetchDasboard() {
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
      <p> POSTS: {dasboardData?.post}</p>
      <p> LIKES: {dasboardData?.likes}</p>
      <p> FOLLOWERS: {dasboardData?.followers}</p>
      <p> FOLLOWING: {dasboardData?.following}</p>
    </div>
  );
};

export default Dashboard;
