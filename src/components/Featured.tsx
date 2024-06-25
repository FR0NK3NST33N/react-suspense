import { Suspense } from "react";
import { Card } from "./Card";

export const Featured = () => {
  return (
    <div className="text-white flex flex-col m-8">
      <h1 className="text-4xl mb-4">Featured</h1>
      <div className="flex flex-wrap justify-center gap-2">
        {/* <Suspense fallback={"Loading..."}> */}
        <Card id={1} />
        <Card id={2} />
        <Card id={3} />
        {/* </Suspense> */}
      </div>
    </div>
  );
};
