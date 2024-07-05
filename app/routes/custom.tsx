import React, { useState, Suspense } from "react";

const Customcomponents = () => {
  const [CurrentComponent, setCurrentComponent] =
    useState<React.Component<any, any, any>>(null);

  const loadComponent = (component: any) => {
    setCurrentComponent(() => component);
  };

  console.log(CurrentComponent);

  return (
    <>
      <div className="p-6 flex gap-5">
        <button
          onClick={() => {
            import("./pdfViewer").then((module) => {
              loadComponent(module.default);
            });
          }}
          className="text-xl border  border-gray-300 p-2 hover:bg-zinc-900 hover:text-white"
        >
          PDF Viewer
        </button>
        <button
          onClick={() => {
            import("./hello1").then((module) => {
              loadComponent(module.default);
            });
          }}
          className="text-xl border  border-gray-300 p-2 hover:bg-zinc-900 hover:text-white"
        >
          Hello 1
        </button>
        <button
          onClick={() => {
            import("./hello2").then((module) => {
              loadComponent(module.default);
            });
          }}
          className="text-xl border  border-gray-300 p-2 hover:bg-zinc-900 hover:text-white"
        >
          Hello 2
        </button>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        {CurrentComponent && <CurrentComponent />}
      </Suspense>
    </>
  );
};

export default Customcomponents;
