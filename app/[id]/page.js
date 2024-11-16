"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";
import { slideList } from "../data/slideList.js";

export const runtime = "edge";

export default function SlideItem({ params }) {
  // get the param from the url
  // 'http://localhost/gallery/1'
  // useParams => 1
  const { id } = use(params);

  const slide = slideList.find((item) => item.id == id);

  if (!slide) {
    notFound();
  }
  // render template
  return (
    <div className="container">
      
        {slide ? (
          
            <div className="card shadow-sm mx-auto">
              <div className="card-body mx-auto">
                <h3 className="card-title text-center">{slide.title}</h3>
                {/* <span className="text-muted">({slide.id} of 2)</span> */}
                <Image
                  src={slide.background}
                  alt={slide.caption}
                  width={1150}
                  height={500}
                  className="img-fluid mx-auto d-block"
                />
                <p className="mt-3 text-center">{slide.caption}</p>
              </div>
            </div>
          
        ) : (
          <div className="col-12">
            <p>Item not found</p>
          </div>
        )}
      
    </div>
  );
}
