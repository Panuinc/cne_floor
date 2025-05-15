import React from "react";

export default function UIIndex() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-2 gap-2 border-2 border-dark border-dashed">
      <div className="flex flex-col items-center justify-center w-full min-h-[500px] p-2 gap-2 border-2 border-dark border-dashed rounded-3xl">
        Hello
      </div>
      <div className="flex items-center justify-center w-full min-h-[500px] p-2 gap-2 border-2 border-dark border-dashed bg-default rounded-3xl">
        Good
      </div>
      <div className="flex items-center justify-center w-full min-h-[500px] p-2 gap-2 border-2 border-dark border-dashed rounded-3xl">
        Black
      </div>
    </div>
  );
}
