import React, { useState } from "react";

const chocolates = [
  { id: 1, name: "Almond Rich", price: "$10", image: "c1.jpg", category: "Dark" },
  { id: 2, name: "White Rich", price: "$8", image: "c2.jpg", category: "White" },
  { id: 3, name: "Milk Crunch", price: "$9", image: "c3.jpg", category: "Milk" },
  { id: 4, name: "Roasted Cashew", price: "$10", image: "c4.jpg", category: "Milk" },
  { id: 5, name: "Roasted Almond", price: "$10", image: "c5.jpg", category: "Dark" },
  { id: 6, name: "flavor Filling", price: "$10", image: "c6.jpg", category: "Milk" },
  { id: 7, name: "Strawbery Filling", price: "$10", image: "c7.jpg", category: "" },
  { id: 8, name: "Blueberry Filling", price: "$10", image: "c8.jpg", category: "oil" },
  { id: 9, name: "Chocolate Crunchs", price: "$10", image: "c9.jpg", category: "White" },
  { id: 10, name: "Mixed Chocolate", price: "$10", image: "c10.jpg", category: "Dark" },
  { id: 11, name: "Filling Chocolate", price: "$10", image: "c11.jpg", category: "Milk" },
  { id: 12, name: "Chocolate Filling", price: "$10", image: "c12.jpg", category: "Milk" },
  { id: 13, name: "Lolipop", price: "$10", image: "c13.jpg", category: "Candy" },
  { id: 14, name: "Jujubes", price: "$10", image: "c14.jpg", category: "Candy" },
  { id: 15, name: "Jelly Candy", price: "$10", image: "c15.jpg", category: "Candy" },
  { id: 16, name: "Mango Sheet", price: "$10", image: "c16.jpg", category: "Candy" },
  { id: 17, name: "Choco Powder", price: "$10", image: "c19.jpg", category: "Candy" },
];


const Chocolates = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredChocolates = chocolates
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => (filter === "All" ? true : item.category === filter));

  const paginatedChocolates = filteredChocolates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredChocolates.length / itemsPerPage);

  return (
    <div className="products">
      <h2>Chocolates</h2>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search Chocolates"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Dark">Dark</option>
          <option value="Milk">Milk</option>
          <option value="White">White</option>
          <option value="Candy">White</option>
        </select>
      </div>
      <div className="product-list">
        {paginatedChocolates.map((chocolate) => (
          <div key={chocolate.id} className="product-card">
            <img src={chocolate.image} alt={chocolate.name} />
            <h3>{chocolate.name}</h3>
            <p>{chocolate.price}</p>
            <button
              className="add-to-cart"
              onClick={() => addToCart(chocolate, 1)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chocolates;