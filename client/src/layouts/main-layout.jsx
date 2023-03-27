import SideBar from "../components/SideBar";
import {pages} from "../data/page-list";

export default function MainLayout({ child }) {
  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        <div className="col-span-1">
          <SideBar props={pages} />
        </div>
        <div className="col-span-4">
          <div className="grid-rows-10">
            <div className="grid-span-1">TITLE</div>
            <div className="grid-span-9">{child}</div>
          </div>
        </div>
      </div>
    </>
  );
}
