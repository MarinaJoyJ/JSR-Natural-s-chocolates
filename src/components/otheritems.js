import React, { useState } from "react";


const otherItems = [
  { id: 1, name: "Eucalyptus Oil", price: "$15", image: "o1.jpg", category: "oil" },
  { id: 2, name: "Pain Oil", price: "$20", image: "o2.jpg", category: "oil" },
  { id: 3, name: "Olive Oil", price: "$15", image: "o5.jpg", category: "oil"},
  { id: 4, name: "Almond Oil", price: "$20", image: "o6.jpg", category: "oil" },
  { id: 5, name: "Eucalyptus Balm", price: "$15", image: "o3.jpg", category: "oil" },
  { id: 6, name: "Pain Balm", price: "$20", image: "o4.jpg", category: "oil" },
  { id: 7, name: "Rose Water", price: "$15", image: "o7.jpg", category: "cosmetics" },
  { id: 8, name: "Herbal Hair Oil Mix", price: "$20", image: "o8.jpg", category: "cosmetics" },
  { id: 9, name: "Honey", price: "$15", image: "o9.jpg", category: "spices" },
  { id: 10, name: "Aloe vera Gel", price: "$20", image: "o10.jpg", category: "cosmetics" },
  { id: 11, name: "Sandal Powder", price: "$15", image: "o11.jpg", category: "cosmetics" },
  { id: 12, name: "Red Sandal Powder", price: "$20", image: "o12.jpg", category: "cosmetics" },
  { id: 13, name: "Multhani Mitti", price: "$15", image: "o13.jpg", category: "cosmetics" },
  { id: 14, name: "Rose Beauty Soap", price: "$20", image: "o14.jpg", category: "cosmetics" },
  { id: 15, name: "Lavander Beauty Soap", price: "$15", image: "o15.jpg", category: "cosmetics" },
  { id: 16, name: "Thulasi Herbal Soap", price: "$20", image: "o16.jpg", category: "cosmetics" },
];

const OtherItems = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6

  const filteredItems = otherItems
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => (filter === "All" ? true : item.category === filter));

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div className="products">
      <h2>Other Items</h2>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search Other Items"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Oil">Oil</option>
          <option value="spices">spices</option>
          <option value="Cosmetics">Cosmetics</option>
        </select>
      </div>
      <div className="product-list">
        {paginatedItems.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button
              className="add-to-cart"
              onClick={() => addToCart(item, 1)}
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
  

export default OtherItems;