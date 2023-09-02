import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Loading2 } from "../components/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default to "all"
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://falahaarbackend.onrender.com/demo3",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Set loading to false when data fetching is done
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const filterResult = (categoryItem) => {
    setSelectedCategory(categoryItem);
  };

  const filteredProducts = users.filter((item) => {
    const typeMatches =
      selectedCategory === "all" ||
      item.Type.toLowerCase() === selectedCategory;

    const marketMatches =
      searchTerm === "" ||
      item.Market.toLowerCase().includes(searchTerm.toLowerCase());

    return typeMatches && marketMatches;
  });

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="shopPage">
        <div className="search-container">
          <input
            placeholder="Search Location"
            type="text"
            className="inputLocation"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>

        <div className="shopContainer">
          <div className="sortShop">
            <button
              className={`categoryButton ${
                selectedCategory === "all" ? "active" : ""
              }`}
              onClick={() => filterResult("all")}
            >
              ALL
            </button>
            <button
              className={`categoryButton ${
                selectedCategory === "vegetable" ? "active" : ""
              }`}
              onClick={() => filterResult("vegetable")}
            >
              VEGETABLES
            </button>
            <button
              className={`categoryButton ${
                selectedCategory === "fruit" ? "active" : ""
              }`}
              onClick={() => filterResult("fruit")}
            >
              FRUITS
            </button>
          </div>
          <div className="verticalLine"></div>
          <div className="shopProducts">
            <div className="pronew">
              {isLoading ? (
                <Loading2 />
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <div>
                    <ProductCard item={item} />
                  </div>
                ))
              ) : (
                <p className="NotFoundArea">
                  Sorry, no products available for the searched area.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
