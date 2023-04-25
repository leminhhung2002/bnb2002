import React, { useState } from "react";
import "./Select.css";

const SelectInput = () => {
  const [selectedValue, setSelectedValue] = useState(""); // State to store the selected value

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value); // Update the selected value when the select input changes
  };

  return (
    <div>
      <select
        class="input-bordered-presale"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="">-- PLEASE CHOOSE PACKAGE --</option>
        <option class="option" value="90 DAYS">
          Package 1: GOLD
        </option>
        <option class="option" value="150 DAYS">
          Package 2: RUBY
        </option>
        <option class="option" value="180 DAYS">
          Package 3: PLATINUM
        </option>
        <option class="option" value="240 DAYS">
          Package 4: SAPPHIRE
        </option>
        <option class="option" value="300 DAYS">
          Package 5: DIAMOND
        </option>
        <option class="option" value="360 DAYS">
          Package 6: DOUBLE DIAMOND
        </option>
      </select>

      {selectedValue && <p class="text-black">• Time Period: {selectedValue}</p>}
    </div>
  );
};

export default SelectInput;
