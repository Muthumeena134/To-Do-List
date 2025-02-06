// src/pages/News.js
import React from 'react';
import ent1 from './Pages/ent1.jpg';
import './News.css';

const News = () => {
  return (
    <div>
       <header id="showcase">
       <div class="category category-sports">Sports</div>
          <h1>Sooome Sports Article</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus rerum officia quibusdam mollitia
            deserunt animi soluta laudantium. Quam sapiente a dolorum magnam necessitatibus quis tempore facere totam.
            Dolor, sequi distinctio!</p>
          <a href="article.html" class="btn btn-primary">Read More</a>
          </header>
          <section id="home-articles" class="py-2">
    <div class="container">
      <h2>Editor Picks</h2>
      <div class="articles-container">
        <article class="card">
        return <img src={ent1} alt="ent1" />;
          <div>
            <div class="category category-ent">Entertainment</div>
            <h3>
              <a href="article.html">Lorem ipsum dolor sit amet</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil
              beatae ea autem. Doloribus.</p>
          </div>
        </article>
        <article class="card bg-dark">
          <div class="category category-sports">Sports</div>
          <h3>
            <a href="article.html">Lorem ipsum dolor sit amet</a>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil
            beatae ea autem. Doloribus.</p>
        </article>
        <article class="card">
        return <img src={tech1} alt="tech1" />;
          <div class="category category-tech">Technology</div>
          <h3>
            <a href="article.html">Lorem ipsum dolor sit amet</a>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil
            beatae ea autem. Doloribus.</p>
        </article>
        <article class="card">
          <div class="category category-sports">Sports</div>
          <h3>
            <a href="article.html">Lorem ipsum dolor sit amet</a>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil
            beatae ea autem. Doloribus.</p>
            return <img src={sports1} alt="sports1" />;
        </article>
        <article class="card">
        return <img src={tech2} alt="tech2" />;
          <div class="category category-tech">Technology</div>
          <h3>
            <a href="article.html">Lorem ipsum dolor sit amet</a>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil
            beatae ea autem. Doloribus.</p>
        </article>
        <article class="card bg-primary">
          <div class="category category-sports">Sports</div>
          <h3>
            <a href="article.html">Lorem ipsum dolor sit amet</a>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil
            beatae ea autem. Doloribus.</p>
        </article>
        <article class="card">
          <div>
            <div class="category category-ent">Entertainment</div>
            <h3>
              <a href="article.html">Lorem ipsum dolor sit amet</a>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam eius ducimus optio veniam sit nihil
              beatae ea autem. Doloribus.</p>
          </div>
          return <img src={ent2} alt="ent2" />;
        </article>
      </div>
    </div>
  </section>
        </div>
       
       
  );
};

export default News;
