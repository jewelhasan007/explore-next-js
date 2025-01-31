import React from 'react';

const page = ({params}) => {
   
console.log(params.details)
  
     const {blog_name, description} = blogs.find((blog)=> blog.blog_name == params.details);
 
     
    return (
        <div>
            the details page of blogs
           <p>{blog_name}</p>
          <p>{description}</p> 
        </div>
    );
};

const blogs = [
    {
      "blog_id": 1,
      "blog_name": "The-Football-Hub",
      "description": "Your go-to source for the latest football news, match analysis, and player insights."
    },
    {
      "blog_id": 2,
      "blog_name": "Soccer-Central",
      "description": "Covering everything from grassroots football to the biggest leagues in the world."
    },
    {
      "blog_id": 3,
      "blog_name": "Goal-Line-News",
      "description": "Breaking news, transfer updates, and in-depth tactical breakdowns for football fans."
    },
    {
      "blog_id": 4,
      "blog_name": "The Tactical Analyst",
      "description": "Expert analysis of football tactics, formations, and strategies from around the globe."
    },
    {
      "blog_id": 5,
      "blog_name": "Football Fanatics",
      "description": "A community-driven blog for passionate football fans to share opinions and insights."
    },
    {
      "blog_id": 6,
      "blog_name": "Premier League Pulse",
      "description": "Dedicated to the English Premier League, featuring match previews, reviews, and stats."
    },
    {
      "blog_id": 7,
      "blog_name": "Champions League Chronicles",
      "description": "Focusing on the UEFA Champions League, with exclusive interviews and match coverage."
    },
    {
      "blog_id": 8,
      "blog_name": "The Youth Scout",
      "description": "Highlighting the next generation of football stars and youth academy talents."
    },
    {
      "blog_id": 9,
      "blog_name": "Football History Corner",
      "description": "Exploring the rich history of football, from legendary players to iconic matches."
    },
    {
      "blog_id": 10,
      "blog_name": "Fantasy Football Insider",
      "description": "Tips, tricks, and advice for dominating your fantasy football league."
    }
  ]

export default page;