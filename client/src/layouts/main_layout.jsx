export default function MainLayout({ props }) {
  return (
    <>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-1">SIDEBAR</div>
        <div className="col-span-5">
          <div className="grid-rows-10">
            <div className="grid-span-1">TITLE</div>
            <div className="grid-span-9">MAIN</div>
          </div>
        </div>
      </div>
    </>
  );
}
