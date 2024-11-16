'use client';
import React from 'react';
import {useState} from 'react';
import {slideList} from "../data/slideList"
import Image from 'next/image';

function ControlledCarousel(){
    const [index, setIndex] = useState(0);

    function handleClick() {
      setIndex((index + 1) % slideList.length);
    }

    function handleClickPrevious() {
      setIndex((index - 1 + slideList.length) % slideList.length);
    }

    let slide = slideList[index];
    return(
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">

            <div className="item active" 
                id={`slide${slide.id}`}
                style={{
                // background: `#202833 url(${slide.background}) no-repeat left center`,
                background: '#202833',
                backgroundSize: 'cover'
            }}>
                <div className="carousel-caption">
                    <div className="caption sfr slider-title">{slide.title}</div>
                    <div className="caption sfl slider-subtitle">
                        {slide.caption}
                    </div>
                    <a href={slide.id} className="caption sfb btn btn-default btn-lg">
                        Learn More</a>
                </div>
            </div>
        </div>
        <div id="home-search-section"></div>

        <a className="left carousel-control" href="#carousel-example-generic" role="button" onClick={handleClick} data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" onClick={handleClickPrevious} data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    );
};

export default ControlledCarousel;

