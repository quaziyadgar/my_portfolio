import { useState } from "react";
import { portfolioData } from "../../../utils.ts/portfolio";

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];
export const usePortfolioPage = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState<number|null>(null);

  const handleFilter = (id: number) => {
    setFilteredValue(id);
  };

  const handleHover = (value: number|null) => {
    setHoveredValue(value);
  };

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  return { filterData, handleFilter, handleHover, hoveredValue, filteredItems,filteredValue };
};
