import React, { Fragment } from "react";

const ExpenseFilterForm = () => {
  return (
    <div className="ExpenseFilterForm">
      <div className="container filter-content">
        <input
          type="text"
          placeholder="Search Expenses"
          name="searchInput"
          autoComplete="off"
        />
        <select name="filterDropdown" className="filter-dropdown">
          <option value="1" >
            Date
          </option>
          <option value="2">Amount</option>
        </select>
        <h1>Date Picker</h1>
      </div>
    </div>
  );
};

export default ExpenseFilterForm;
