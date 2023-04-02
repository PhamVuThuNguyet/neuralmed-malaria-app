import { React, useState } from "react";
import SummaryData from "./summary-data";
import { data } from "../../data/admin-console";
import DoctorRegister from "./register-form";
export default function AdminConsole() {

    return (
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-3 gap-20">
          {data.map((item) => (
          <SummaryData item={item} />
          ))}   
        </div>
        <div className="ml-32 bg-[#252525] rounded-xl">
          <div>
           
          </div>
          <DoctorRegister />
        </div>
      </div>
    );
  }