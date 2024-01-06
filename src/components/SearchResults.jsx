import React from 'react'

const SearchResults = ({results}) => {
  return (
  <ul className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll  ${darkMode ? "bg-gray-900 border-gray-800 custom-scrollbar-dark" : "bg-white border-neutral-200 custom-scrollbar"}`}>
    {results.map((item) => {
      return (
        <li
          key={item.symbol}
          className={`flex cursor-pointer p-4 m-2 item-center justify-between rounded-md hover:bg-indigo-200 ${darkMode ? "hover:bg-indigo-600": "hover::bg-indigo-200"}`}
        >
          <span>{item.symbol}</span>
          <span>{item.description}</span>
        </li>
      );
    })}
  </ul>
  );
};
export default SearchResults