import styles from "../../styles/Diagnosis/diagnosis.module.scss";
import { images } from "../../data/image-list";
import ImageList from "../../components/ImageList";
import EditingCanvas from "../../components/EditingCanvas";

export default function Diagnosis() {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1">
        {
            <ImageList images={images} />
        }
      </div>
      <div className="col-span-5">
        <div className="grid grid-rows-5">
          <div className="row-span-3">
            <EditingCanvas/>
          </div>
          <div className="row-span-2">
            
          </div>
        </div>
      </div>
    </div>
  );
}
