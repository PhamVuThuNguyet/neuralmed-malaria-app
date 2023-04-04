import BreadCrumb from "../components/Breadcrumb";
import SideBar from "../components/SideBar";
import { pages } from "../data/page-list";

export default function MainLayout(props) {
  return (
    <div className="flex h-screen w-screen">
      <div className="fixed">
        <SideBar pages={pages} />
      </div>
      <div className="flex flex-1 flex-col" style={{ marginLeft: "33rem" }}>
        <div className="h-36">
          <BreadCrumb data={props.header} />
        </div>
        <div className="flex-1 p-24 m-auto">{props.children}</div>
      </div>
    </div>
  );
}
