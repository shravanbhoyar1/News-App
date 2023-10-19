import React, { useEffect, useState } from 'react';
import "./Home.css"
import axios from "axios"

function Home() {
    const[news, setNews] = useState([])
    const[searchQuery, setSearchQuery] = useState('nagpur')
    
    const loadNews = async () =>{
        try{
            const response = await axios.get(https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-10-06&to=2023-10-06&sortBy=popularity&apiKey=${process.env.REACT_APP_KEY});
     
        setNews(response.data.articles)
        }
        catch(error){
           console.log(error)
        }
    }
    useEffect(() =>{
        loadNews()
    },[] )

    useEffect(() =>{
        loadNews()
    }, [searchQuery] )

   
    return(
           <div>
            <h1>News App</h1>

            <input type="text"
            className='search-input'
            value={searchQuery}
            onChange={(e)=>{setSearchQuery(e.target.value)}}></input>

            <div className='news-container'>

            {
                news.map((newsArticle, index)=>{
                    const {author, title, description, url, urlToImage, publishedAt} = newsArticle
                    
                    return(
                        <div className='news-article-card'>
                            <img src={urlToImage} alt="" className='news-article-img'/>
                            <h1 className='article-title'>{title}</h1>

                            <div className='article-info'>
                            <p className='article-author'>{author}</p>
                            <p className='article-publishedAt'>{publishedAt}</p>
                            
                            </div>

                            <p className='article-description'>{description}</p>

                           <a href={url} target='' className='btn-read-more'>Read More...</a>
                       </div>
                    )
                })
            }
            </div>
           </div>
        

        )
    
}
export default Home