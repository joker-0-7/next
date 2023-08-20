"use client";

import { useState } from "react";
export default function Category() {
  const [parent, setParent] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  function hanleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="category-page">
      <div className="container bg-dark w-50 text-light">
        <div className="title">
          <h2 className="mb-5">creat category</h2>
        </div>
        <form onSubmit={hanleSubmit}>
          <select
            className="form-control mb-5"
            value={parent}
            onChange={(e) => setParent(e.target.value)}
          >
            <option selected>Parent Category</option>
          </select>
          <input
            className="form-control mb-5"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="form-control mb-5"
            placeholder="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
          <select className="form-control mb-5">
            <option selected>Icon(Option)</option>
          </select>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="navBar"
            />
            <label className="form-check-label" htmlFor="navBar">
              nav bar
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="footer"
            />
            <label className="form-check-label" htmlFor="footer">
              footer
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="rightColumn"
            />
            <label className="form-check-label" htmlFor="rightColumn">
              right column
            </label>
          </div>
            <button type="submit" className="btn text-light mt-5 w-25 ms-auto me-auto"> add category</button>
        </form>
      </div>
    </div>
  );
}
