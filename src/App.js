import React, { useState, useEffect } from "react";
import { ImageCard } from "./components/ImageCard";
import { ImageSearch } from "./components/ImageSearch";
import { Loading } from "./components/Loading";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXEL_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      });
    return () => {};
  }, [term]);

  return (
    <>
      {isLoading && <Loading />}

      <div className="container mx-auto">
        <ImageSearch searchText={(val) => setTerm(val)} />
        <div className="grid grid-cols-3 gap-4">
          {!isLoading &&
            images.map((i) => <ImageCard imageData={i} key={i.id}></ImageCard>)}
        </div>
      </div>
    </>
  );
}

export default App;
