import BreadCrumb from "../components/Breadcrumb";
import SideBar from "../components/SideBar";
import { pages } from "../data/page-list";

export default function MainLayout(props) {
  return (
    <div className="flex h-screen w-screen">
      <div className="fixed inset-x-0 top-0 left-0 w-1/6">
        <SideBar pages={pages} />
      </div>
      <div className="flex flex-1 flex-col" style={{ marginLeft: "31rem" }}>
        <div className="h-36">
          <BreadCrumb data={props.header} />
        </div>
        <div className="flex-1 p-24">{props.children}</div>
      </div>
    </div>
  );
}
