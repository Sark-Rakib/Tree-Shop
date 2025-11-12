import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/treeId.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <p className="font-semibold">All Categories ({categories.length}) </p>
      <div className="grid grid-cols-1 mt-5">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className={"btn mt-5 bg-base-100 hover:bg-base-200"}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
