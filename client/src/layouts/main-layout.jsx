import BreadCrumb from "../components/Breadcrumb";
import SideBar from "../components/SideBar";
import { pages } from "../data/page-list";

export default function MainLayout({ header, child }) {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <SideBar props={pages} />
        </div>
        <div className="col-span-4">
          <div className="grid grid-rows-6">
            <div className="row-span-1 h-36">
              <BreadCrumb data = {header}/>
            </div>
            <div className="row-span-5">{child}</div>
          </div>
        </div>
      </div>
    </>
  );
}
