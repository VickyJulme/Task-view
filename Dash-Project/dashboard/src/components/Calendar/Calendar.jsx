import React from "react";
import Tasklist from "../Calendar/Tasklist";
import Taskli from "../Calendar/Taskli";
import Sub from "../images/Subtract.png";
import Top from "./Top";
import Tasklie from "./Tasklie";

const Calendar = () => {
  return (
    <div className=" p-3 flex bg-gray-100 flex-col w-full overflow-hidden ">
      
      <div className="bg-white w-full items-center font-bold px-5 flex flex-col m-2">
        <div className="w-full flex justify-between items-center p-3">
          <div className="text-2xl">Task Preview</div>
          <button className=" hover:bg-indigo-600 text-black  hover:text-white rounded-full p-3 font-medium">+ Add Task</button>
        </div>
        <div className="w-full p-2 pr-0 pt-0 ">
          <Top />
        </div>
      </div>
    

      {/* 11111111111111111111111111111111111111111111111111111111111111111111111111111111111 */}

      <div className="p-2 pr-0">
        <Tasklist />
      </div>

      <div className="p-2 pr-0">
        <Taskli />
      </div>
      <div className="p-2 pr-0">
        <Tasklie />
      </div>

     
     

      {/*first & last */}
    </div>
  );
};

export default Calendar;
