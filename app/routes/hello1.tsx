import { useEffect, useState } from "react";

export default function HelloWorld1() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="p-5">
        <h1 className="text-xl font-bold ">Hello World 1 Component</h1>
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
