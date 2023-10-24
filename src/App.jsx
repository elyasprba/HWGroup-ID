import { useEffect, useState } from "react";

import Tooltip from "./components/tooltip/Tooltip";
import PhotoGallery from "./components/photoGalery/photoGalery";
import ImageCarousel from "./components/imageCarousel/imageCarousel";
import AutoComplete from "./components/autoComplete/autoComplete";

import { useGetResponseData } from "./api/Hooks/hooksApi";

import "./App.css";

import { Edit } from "react-feather";

function App() {
  const { data: datas, isLoading } = useGetResponseData();

  return (
    <>
      <div>
        <h1>AutoComplete</h1>
        <AutoComplete data={datas?.data} />

        <h1>Tooltip</h1>
        <Tooltip text="Edit">
          <Edit color="blue" size={35} />
        </Tooltip>

        <h1>Image Carousel</h1>
        <ImageCarousel data={datas} />

        <h1>Photo Gallery & Rating</h1>
        <PhotoGallery photos={datas?.data} isLoading={isLoading} />
      </div>
    </>
  );
}

export default App;
