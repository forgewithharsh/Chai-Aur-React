import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-orange-400 text-white p-4 text-3xl flex flex-col items-center gap-3">
      <h2 className="font-semibold">Github followers: {data.followers}</h2>
      <img src={data.avatar_url} alt="Git picture" width={300} />
      <p className="text-lg">Thank you, Hitesh Sir, for shaping our journey with purpose and discipline.</p>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
