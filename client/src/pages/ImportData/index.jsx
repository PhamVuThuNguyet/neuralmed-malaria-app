import { ReactComponent as ArrowLeft } from "../../assets/ArrowLeft.svg";
import styles from "../../styles/ImportData/importdata.module.scss";
import { Link } from "react-router-dom";
import ImportButton from "./components/import-button";
import { useEffect, useState } from "react";
import axios from "axios";
import Diagnosis from "../Diagnosis";
import { useNavigate } from "react-router-dom";

export default function ImportData() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [preview, setPreview] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedFiles) {
      setPreview([]);
      return;
    }

    const objectUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreview(objectUrls);

    return () => {
      objectUrls.forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [selectedFiles]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFiles([]);
      return;
    }
    setSelectedFiles(Array.from(e.target.files));
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("image", selectedFiles[0]);

    axios
      .post("http://localhost:5000/detect_objects", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        navigate("/diagnosis", { state: {image: response.data.image} });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="w-full">
        <Link to="/">
          <button className={styles["back-button"]}>
            <ArrowLeft />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div className={styles["form-cont"]}>
          <form id="import-form" onSubmit={submitHandle}>
            <div className="mb-6">
              <label htmlFor="id">Citizen ID</label>
              <input type="text" name="id" id="id" required />
            </div>
            <div className="mb-6">
              <label htmlFor="receive_dep">Receive Department</label>
              <input type="text" name="receive_dep" id="receive_dep" required />
            </div>
            <div className="mb-6">
              <label htmlFor="receive_doc">Receive Doctor ID</label>
              <input type="text" name="receive_doc" id="receive_doc" required />
            </div>
            <div className="mb-6">
              <label htmlFor="datetime">Datetime</label>
              <input type="date" name="datetime" id="datetime" required />
            </div>
            <div className="mb-6">
              <label htmlFor="age">Age</label>
              <input type="number" name="age" id="age" required />
            </div>
            <div className="mb-6">
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address" required />
            </div>
          </form>
        </div>
        <section className={styles["preview-section-cont"]}>
          {selectedFiles.length > 0 || (
            <div className={styles["import-button"]}>
              <input
                multiple
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="import-button"
                onChange={onSelectFile}
              />
              <label htmlFor="import-button">
                <ImportButton />
              </label>
            </div>
          )}
          {selectedFiles.length > 0 && (
            <div className={[styles["preview-image"], "m-6"].join(" ")}>
              <div className={[styles["preview-label"], "py-6"].join(" ")}>
                {
                  //TODO: replace actual data
                }
                Preview {9} of {12}
              </div>
              <div
                className={[
                  styles["image-grid"],
                  "p-6",
                  "grid",
                  "grid-cols-3",
                  "gap-6",
                ].join(" ")}
              >
                {preview.map((src) => (
                  <div className={["rounded-md", "aspect-square"].join(" ")}>
                    <img src={src} alt="hehe" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
      <div className="w-full flex justify-end text-3xl gap-8">
        <Link to="/">
          <button className={styles["cancel-button"]}>CANCEL</button>
        </Link>
        <button
          type="submit"
          form="import-form"
          className={styles["next-button"]}
        >
          NEXT
        </button>
      </div>
    </>
  );
}
