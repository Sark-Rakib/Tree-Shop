import React, { Suspense } from "react";
import { Navigate } from "react-router";

const Homes = () => {
  return (
    <div>
      <Suspense fallback="Loading...">
        <Navigate to="/category/0" />
      </Suspense>
    </div>
  );
};

export default Homes;
