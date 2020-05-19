import React from "react";

export const FilterOptions = ({setMyFilter}) => {
  return (

    <form className="filter-options">
      <select 
        id="likes" 
        name="likes"
        onChange={(event) => setMyFilter(`/?hearts=${event.target.value}`)}>

      <option value="">
        Filter by likes:
      </option>

      <option value="-1">
        High-to-low
      </option>

      <option value="1">
        Low-to-high
      </option>

      </select>
    </form>
  )
}

