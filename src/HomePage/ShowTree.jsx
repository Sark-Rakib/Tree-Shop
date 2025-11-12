import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import TreeCard from "../Component/TreeCard";
import DetailsHeadhile from "../Component/DetailsHeadhile";
import NotFound from "../Component/NotFound";

const ShowTree = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [trees, setTrees] = useState([]);
  const [validCategory, setValidCategory] = useState(true);

  useEffect(() => {
    if (id === "0") {
      // All category
      setTrees(data);
      setValidCategory(true);
    } else {
      const filtered = data.filter(
        (tree) => tree.category_id.toString() === id
      );
      if (filtered.length === 0) {
        setValidCategory(false);
      } else {
        setTrees(filtered);
        setValidCategory(true);
      }
    }
  }, [id, data]);

  if (!validCategory) {
    return <NotFound />;
  }

  return (
    <div>
      <h2 className="font-semibold mb-3">
        Total Trees <span className="text-accent">{trees.length}</span> Found
      </h2>

      {/* Marquee filter trees title */}
      <DetailsHeadhile trees={trees} />

      {/* Tree cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {trees.map((tree) => (
          <TreeCard key={tree.id} tree={tree} />
        ))}
      </div>
    </div>
  );
};

export default ShowTree;
