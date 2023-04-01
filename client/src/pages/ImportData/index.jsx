import { ReactComponent as ArrowLeft } from "../../assets/ArrowLeft.svg";
import styles from "../../styles/ImportData/importdata.module.scss";
import { Link } from "react-router-dom";
import ImportButton from "./components/import-button";
import { useEffect, useState } from "react";
export default function ImportData() {

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [preview, setPreview] = useState([]);

    useEffect(() => {
        if (!selectedFiles) {
            setPreview([]);
            return
        }

        console.log(selectedFiles);

        const objectUrls = selectedFiles.map((file) => (URL.createObjectURL(file)));
        setPreview(objectUrls);

        return () => {
            objectUrls.forEach((url) => {
                URL.revokeObjectURL(url)
            })
        }
    }, [selectedFiles]);

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFiles([]);
            return;
        }
        setSelectedFiles(Array.from(e.target.files));
    }

    return (
        <>
            <div className="w-full">
                <Link to="/">
                    <button className="px-10 bg-transparent text-blue-700 font-semibold  py-2 border border-gray-500 hover:border-blue-500 rounded">
                        <ArrowLeft />
                    </button>
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-12">
                <div className={styles["form-cont"]}>
                    <form>
                        <div className="mb-6">
                            <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                            <input type="text" name="fullname" id="fullname" className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
                            <input type="text" name="id" id="id" className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="receive_dep" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Receive Department</label>
                            <input type="text" name="receive_dep" id="receive_dep" className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="receive_doc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Receive Doctor ID</label>
                            <input type="text" name="receive_doc" id="receive_doc" className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="datetime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Datetime</label>
                            <input type="date" name="datetime" id="datetime" className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                            <input type="number" name="age" id="age" className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                            <input type="text" name="address" id="address" className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                    </form>
                </div>
                <section className={styles["preview-section-cont"]}>
                    {
                        selectedFiles.length > 0 || <div className={styles["import-button"]}>
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
                    }
                    {
                        selectedFiles.length > 0 && <div className={[styles["preview-image"], "m-6"].join(" ")}>
                            <div className={[styles["preview-label"], "py-6"].join(" ")}>
                                {
                                    //TODO: replace actual data
                                }
                                Preview {9} of {12}
                            </div>
                            <div className={[styles["image-grid"], "p-6", "grid", "grid-cols-3", "gap-6"].join(" ")}>
                                {
                                    preview.map((src) => (
                                        <div className={["rounded-md", "aspect-square"].join(" ")}>
                                            <img src={src} alt="hehe" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    }
                </section>
            </div>
            <div className="w-full flex justify-end text-3xl gap-8">
                <Link to="/">
                    <button className="p-24 py-8 bg-transparent text-gray-700 font-semibold border border-gray-500 rounded">
                        CANCEL
                    </button>
                </Link>
                <Link to="/">
                    <button className="p-24 py-8 bg-transparent text-white font-semibold bg-blue-500 rounded">
                        NEXT
                    </button>
                </Link>
            </div>
        </>
    )
}