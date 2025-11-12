import React, { Suspense } from "react";
import Categories from "./Categories";
import Review from "./Review";

const LeftSide = () => {
  return (
    <div>
      <div>
        <Suspense fallback="loading....">
          <Categories></Categories>
        </Suspense>
      </div>
      <div>
        <Review></Review>
      </div>
    </div>
  );
};

export default LeftSide;
