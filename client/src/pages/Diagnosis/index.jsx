import styles from "../../styles/Diagnosis/diagnosis.module.scss";
import { images } from "../../data/image-list";
import { patient } from "../../data/patient-example";
import ImageList from "./components/ImageList";
import InfoList from "./components/InfoList";
import EditingCanvas from "./components/EditingCanvas";
import ResultTabs from "./components/ResultTabs";

// Btn icon
import { ReactComponent as GridIcon } from "../../assets/Grid.svg";
import { ReactComponent as ListIcon } from "../../assets/List.svg";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Diagnosis() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentView, setCurrentView] = useState("images");

  const handleImageClick = (image) => {
    console.log(image);
    setSelectedImage(image);
  };

  function SwitchView(view) {
    setCurrentView(view);
  }
  return (
    <div
      className={[styles["diagnosis-cont"], "grid", "grid-cols-6"].join(" ")}
    >
      <div className="col-span-1">
        <div className="flex gap-x-4">
          <button
            onClick={() => {
              SwitchView("images");
            }}
          >
            <i>
              <GridIcon />
            </i>
          </button>
          <button
            onClick={() => {
              SwitchView("info");
            }}
          >
            <i>
              <ListIcon />
            </i>
          </button>
        </div>
        <div>
          {currentView === "images" ? (
            <ImageList images={images} onClick={handleImageClick} />
          ) : (
            <InfoList info={patient} />
          )}
        </div>
      </div>  
      <div className="col-span-5 p-3">
        <div className="grid grid-rows-5">
          <div className="row-span-3">
            <EditingCanvas image={selectedImage} />
          </div>
          <div className="row-span-2">
            <ResultTabs />
          </div>
        </div>
      </div>
    </div>
  );
}
