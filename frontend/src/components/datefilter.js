import React from "react";

export const DateFilter = ({ filter, setFilter }) => {
  return (
    <div class="container pb-2">
        <span>
          {" "}
          <input
            class="form-control"
            type="text"
            value={filter || ""}
            onChange={(e) => setFilter(e.target.value)}
          />
        </span>
    </div>
  );
};