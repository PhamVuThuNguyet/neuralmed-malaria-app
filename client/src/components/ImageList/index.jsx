import styles from "../../styles/ImageList/imagelist.module.scss";
import ImageItem from "./item";
// Btn icon
import { ReactComponent as GridIcon } from "../../assets/Grid.svg";
import { ReactComponent as ListIcon } from "../../assets/List.svg";

export default function ImageList(props) {
    return (
        <>
            <div className="flex gap-x-4">
                <button>
                    <i>
                        <GridIcon />
                    </i>
                </button>
                <button>
                    <i>
                        <ListIcon />
                    </i>
                </button>
            </div>
            <div className={styles["image-list"]}>
                {
                    props.images.map((img) => (
                        <ImageItem key={img.id} url={img.url} name={img.name} />
                    ))
                }
            </div>
        </>
    );
}