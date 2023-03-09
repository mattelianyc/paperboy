import logo from './logo.svg';
import './App.css';
import getTopHeadlines, { getBusinessNews } from './api/services/news';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
    
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  
  const [articles, setArticles] = useState([]);

  useEffect(() => {

    getBusinessNews()
      .then(response => {
        setArticles(response.articles)
      });

  }, []);

  const handleGPTSubmission = (e) => {
    e.preventDefault();
    // Send a request to the server with the prompt
    fetch("http://localhost:8080/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      // Update the response state with the server's response
      setResponse(data);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="#">News</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search" onSubmit={handleGPTSubmission}>
              <input
                type="text"
                class="form-control me-2"
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
              />
              <button class="btn btn-danger" type="submit">GPT</button>
            </form>
          </div>
        </div>
      </nav>

      <div className='container-fluid p-3'>
        <div className='row'>
          <div className='col-3'>

            <Sidebar />

          </div>
          <div className='col-9'>
            <div className='row row-cols-1 row-cols-sm-1 gy-4 gx-3'>
            
              {
                articles.map(article => {
                  return (
                    <div className='col'>
                      <div class="card news-article-card border-dark mb-3 d-flex" data-article-url={article.url}>
                        <div class="card-header bg-dark text-white">
                          <strong class="card-title">{article.title}</strong>
                        </div>
                        <div className='card-body p-0'>
                          <div className='d-flex'>
                            <div className='flex-1'>
                              <div className='article-thumbnail-wrapper'>
                                <img src={article.urlToImage} class="img-fluid article-thumbnail h-100" alt="..." />
                              </div>
                            </div>
                            <div className='flex-6'>
                              <div className='article-description-wrapper px-3'>
                                <b className={`article-source-id-${article.source.id} article-source text-muted mb-2`}>{article.source.name} </b>
                                <strong class="card-content">{article.description}</strong>
                                <small class="card-content">{article.content}</small>
                              </div>
                            </div>
                          </div>
                          </div>
                          <div className='card-footer'>
                            <p class="card-text"><small class="text-muted">Last updated {article.publishedAt} by {article.author}</small></p>
                        </div>
                      </div>
                    </div>
                  )
                }) 
              }
            </div>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
