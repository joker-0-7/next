"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('')
  useEffect(() => {
    const res = axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data));
  }, []);
  // console.log(data);
  return (
    <div className="app-list">
      <div className="row">
      <div className="center col-12 p-4">
        <div className="search m-0">
          <form
            className="d-flex justify-content-center align-items-center"
            role="search"
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e)=>{setQuery(e.target.value)}}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      {data.filter((data)=> data.title.toLowerCase().includes(query)).map((data) => {
        return (
          <div className="card m-2" style={{ width: "18rem" }} key={data.id}>
            <img
              src="https://app.apkbaba.com/wp-content/uploads/Crash-Bandicoot-%D9%85%D9%87%D9%83%D8%B1%D8%A9-icon-apkbaba-150x150.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.body}</p>
              <Link href={`pages/applications/${data.id}`} className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default App;
