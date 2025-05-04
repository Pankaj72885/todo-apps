import React from "react";

/**
 * A component that renders buttons to filter the todo list.
 *
 * @param {object} props - The component props.
 * @param {string} props.filter - The currently active filter ('all', 'active', 'completed').
 * @param {Function} props.setFilter - Function to update the active filter.
 * @returns {JSX.Element}
 */
function FilterButtons({ filter, setFilter }) {
  /**
   * Generates the appropriate CSS classes for a filter button based on whether it's active.
   * @param {string} buttonFilter - The filter type associated with the button ('all', 'active', 'completed').
   * @returns {string} The CSS classes for the button.
   */
  const buttonClasses = (buttonFilter) =>
    `px-3 py-1 rounded ${
      filter === buttonFilter // Check if this button's filter is the active one
        ? "bg-blue-500 text-white" // Active button styles
        : "bg-gray-200 dark:bg-gray-600 dark:text-gray-100" // Inactive button styles
    }`;

  return (
    <div className="flex justify-center space-x-4 mb-4">
      {/* Button to set filter to 'all' */}
      <button onClick={() => setFilter("all")} className={buttonClasses("all")}>
        All
      </button>
      {/* Button to set filter to 'active' */}
      <button
        onClick={() => setFilter("active")}
        className={buttonClasses("active")}
      >
        Active
      </button>
      {/* Button to set filter to 'completed' */}
      <button
        onClick={() => setFilter("completed")}
        className={buttonClasses("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
