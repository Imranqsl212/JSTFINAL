import styles from "./FilterHotels.module.css";

const FilterHotels = ({ sortingOrder, setSortingOrder }) => {
  const filterOptions = {
    all: "",
    cheap: "asc",
    expensive: "desc",
  };

  const handleFilterChange = (event) => {
    setSortingOrder(filterOptions[event.target.id]);
  };

  const optionKeys = Object.keys(filterOptions);

  return (
    <div className={styles.mydict}>
      <div>
        {optionKeys.map((option) => (
          <label key={option} htmlFor={option}>
            <input
              type="radio"
              name="filter"
              id={option}
              checked={sortingOrder === filterOptions[option]}
              value={filterOptions[option]}
              onChange={handleFilterChange}
            />
            <span>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterHotels;
