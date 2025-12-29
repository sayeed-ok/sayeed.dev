"use client";
import React from "react";
import { PinContainer } from "./PinContainer";

export default function Project({ projectTitle, projectContent, title, href, src, title2, href2 }) {
  return (
    <PinContainer title={title} href={href} title2={title2} href2={href2}>
      <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-80  ">
        <h3 className="max-w-xs pb-2! m-0! font-bold  text-base text-slate-100">
          {projectTitle}
        </h3>
        <div className="text-base m-0! p-0! font-normal">
          <span className="text-slate-500 ">
            {projectContent}
          </span>
        </div>

        <img src={src} className="flex flex-1 w-full rounded-lg mt-4" />

      </div>
    </PinContainer>
  );
}
