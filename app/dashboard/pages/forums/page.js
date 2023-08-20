"use client"

import axios from "axios"
import { useState } from "react"

export default function forum(){
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [description, setDescription] = useState('')
    const [keywords, setKeywords] = useState('')
    const [tags, setTags] = useState('')
    const sendArticle =  async(e)=>{
        e.preventDefault();
        const data = axios.post('http://localhost:3030/article',{
            title,
            slug,
            description,
            keywords,
            tags,
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return(
        <div className="forum-page">
            <div className="container bg-dark text-light p-4">
                <div className="heading mb-4"><h2>add article</h2></div>
                <form onSubmit={sendArticle}>
                    <div className="title mb-4">
                        <input 
                        className="form-control"
                        placeholder="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="slug mb-4">
                        <input 
                        className="form-control"
                        placeholder="slug"
                        value={slug}
                        onChange={e => setSlug(e.target.value)}
                        />
                    </div>
                    <div className="description mb-4">
                        <input 
                        className="form-control"
                        placeholder="description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="keywords mb-4">
                        <input 
                        className="form-control"
                        placeholder="keywords"
                        value={keywords}
                        onChange={e => setKeywords(e.target.value)}
                        />
                    </div>
                    <div className="tags mb-4">
                        <input 
                        className="form-control"
                        placeholder="tags"
                        value={tags}
                        onChange={e => setTags(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}