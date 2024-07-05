import { useEffect, useState } from "react";

export default function HelloWorld2() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="p-5">
        <h2 className="text-xl font-bold ">Hello World 2 Component</h2>
        {data ? (
          <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
