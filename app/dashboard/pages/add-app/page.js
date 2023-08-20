"use client";

import axios from "axios";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component"; 

export default function addApp() {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [about, setAbout] = useState("");
  const [tags, setTags] = useState([]);
  const [platforms, setPlatforms] = useState("");
  const [btnType, setBtnType] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [buyUrl, setBuyUrl] = useState("");
  const [ownVotes, setOwnVotes] = useState("");
  const [pageView, setPageView] = useState("");
  const [developer, setDeveloper] = useState("");
  const [license, setLicense] = useState("");
  const [img, setImg] = useState('');
  const [file, setFile] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const formdata = new FormData();
    formdata.append('file', file);
    await axios.post("http://localhost:3030/add-app", {
      name,
      summary,
      about,
      tags,
      platforms,
      btnType,
      category,
      subcategory,
      buyUrl,
      ownVotes,
      pageView,
      developer,
      license,
      img
    })
    .then(res=> console.log(res))
    .catch(err => console.log(err))
  }
  const hanleUpp = async (e)=>{
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('file', file);
    await axios.post("http://localhost:3030/upp-img", formdata).then(res => setImg(res.data))
  }
  return (
    <div className="add-app">
      <div className="container">
        <div className="add-form ">
          <div className="heading"></div>
          <form className="d-flex" onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="row bg-dark justify-content-between p-4">
              <h1 className="text-light mb-3">create app</h1>
              <div className="col-6 d-flex flex-wrap ">
                <div className="col-md-12 mb-4">
                  <div className="name">
                    <input
                      className="form-control"
                      placeholder="Name"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="summary">
                    <input
                      className="form-control"
                      placeholder="Summary"
                      required
                      value={summary}
                      onChange={(e) => {
                        setSummary(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="about">
                    <textarea
                      className="form-control"
                      placeholder="About"
                      required
                      value={about}
                      style={{ resize: "none" }}
                      onChange={(e) => {
                        setAbout(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <div className="tag">
                    {/* <pre>{JSON.stringify(tags)}</pre> */}
                    <TagsInput
                      value={tags}
                      onChange={setTags}
                      name="tags"
                      placeHolder="tags"
                    />
                  </div>
                </div>
              </div>
              <div className="col-5 d-flex flex-wrap justify-content-between">
                <div className="col-md-5">
                  <div className="platform">
                    <select
                      className="form-control"
                      required
                      value={platforms}
                      onChange={(e) => {
                        setPlatforms(e.target.value);
                      }}
                    >
                      <option selected>choose value</option>
                      <option>val one</option>
                      <option>val two</option>
                      <option>val three</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="btn-type">
                    <select
                      className="form-control"
                      required
                      value={btnType}
                      onChange={(e) => {
                        setBtnType(e.target.value);
                      }}
                    >
                      <option selected>choose value</option>
                      <option>val one</option>
                      <option>val two</option>
                      <option>val three</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="category">
                    <select
                      className="form-control"
                      required
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    >
                      <option selected>choose value</option>
                      <option>val one</option>
                      <option>val two</option>
                      <option>val three</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="subcategory">
                    <select
                      className="form-control"
                      value={subcategory}
                      onChange={(e) => {
                        setSubcategory(e.target.value);
                      }}
                    >
                      <option selected>choose value</option>
                      <option>val one</option>
                      <option>val two</option>
                      <option>val three</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="page-view">
                    <input
                      className="form-control"
                      placeholder="page views"
                      value={pageView}
                      onChange={(e) => {
                        setPageView(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="buy-url">
                    <input
                      className="form-control"
                      placeholder="buy url"
                      value={buyUrl}
                      onChange={(e) => {
                        setBuyUrl(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="vote">
                    <input
                      className="form-control"
                      placeholder="own votes"
                      value={ownVotes}
                      onChange={(e) => {
                        setOwnVotes(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="license">
                    <input
                      className="form-control"
                      placeholder="license"
                      value={license}
                      onChange={(e) => {
                        setLicense(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="developer">
                    <input
                      className="form-control"
                      placeholder="developer"
                      value={developer}
                      onChange={(e) => {
                        setDeveloper(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="add-img d-flex">
              <input type="file" id="file" onChange={e => setFile(e.target.files[0])} />
              <label htmlFor="file" className="text-center">
                <h2>add image</h2>
                <i className="bi bi-plus-circle"></i>
              </label>
              <button onClick={hanleUpp}> upp </button>
              <input type="file" id="screen" />
              <label htmlFor="screen" className="text-center">
                <h2>add screenshot</h2>
                <i className="bi bi-plus-circle"></i>
              </label>
            </div>
            <div className="submit">
              <button className="btn text-light" type="submit">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

                    }