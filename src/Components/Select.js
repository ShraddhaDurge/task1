import React from "react";

export const Select = () => {
  return (
    <div>
      <select class="form-select" aria-label="Default select example">
        <option selected>Select the Type of Chart</option>
        <option value="linechart" >LineChart</option>
        <option value="barchart" selected>BarChart</option>
        <option value="piechart">PieChart</option>
      </select>
    </div>
  );
};
