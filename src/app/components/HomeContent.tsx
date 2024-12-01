"use client";

import React from "react";
import AOS from 'aos'
import { useEffect } from "react";
import 'aos/dist/aos.css';

const HomeContent =() =>{
    useEffect(() =>{
        AOS.init({
            duration:1000,
            once:true,
        });
    },[]);
    return(
        <section className="hero h-screen flex items-center bg-contain bg-center" style={{backgroundImage:"url(homepage.webp)"}}>
        <div className="pl-0 md:pl-16 text-white text-center">
        <h1 className="text-6xl font-bold drop-shadow-md" data-aos="fade-up">Welcome to Brands-Shop</h1>
        <p className="text-2xl mt-4">Welcome to Brands House — your go-to online destination for premium shoes, stylish shirts, and a curated selection of high-quality products. We are committed to offering top brands and the latest trends, ensuring you stay ahead in fashion and comfort. Shop with confidence and elevate your style, one click at a time. </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-md font-bold">Shop Now</button>
        </div>
        </section>
    );
};

export default HomeContent;