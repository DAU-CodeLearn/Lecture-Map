import React from "react";

export default function MyPageInfo() {
  const name = "김륜영";
  const id = "starfbsdud";
  const studentId = "1923809";

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex items-center mb-4">
        <p className="font-bold w-16">이름</p>
        <div className="border border-black p-2 w-48 text-left pl-4">{name}</div>
      </div>
      <div className="flex items-center mb-4">
        <p className="font-bold w-16">아이디</p>
        <div className="border border-black p-2 w-48 text-left pl-4">{id}</div>
      </div>
      <div className="flex items-center">
        <p className="font-bold w-16">학번</p>
        <div className="border border-black p-2 w-48 text-left pl-4">{studentId}</div>
      </div>
    </div>
  );
}
