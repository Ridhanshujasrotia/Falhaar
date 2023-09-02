import React, { useEffect, useState } from "react";
import LogCard from "../components/LogCard";
import "../App.css";
import { useParams } from "react-router-dom";
import { Loading3 } from "../components/Loading";
import { Link } from "react-router-dom";

// Update the API base URL to your PythonAnywhere domain
const flaskAPIURL = "https://akshitfalahaar.pythonanywhere.com";

const Logs = () => {
  const { pId } = useParams();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [graphImage, setGraphImage] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://falahaarbackend.onrender.com/demo3"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) => user.ID === pId);
    setFilteredUsers(filtered);
  }, [users, pId]);

  useEffect(() => {
    if (filteredUsers.length > 0) {
      const user = filteredUsers[0];

      // Make API request to Flask backend
      fetch(`${flaskAPIURL}/Logs/${user.ID}/${user.Name}`)
        .then((response) => response.json())
        .then((data) => {
          setPredictedPrice(data.predicted_price);
          setGraphImage(data.graph);
        })
        .catch((error) => {
          console.error("Error fetching predicted price:", error);
        });
    }
  }, [filteredUsers]);

  return (
    <div>
      <section className="logs">
        {filteredUsers.map((card) => (
          <div key={card.ID} className="LogContainer">
            <h2 className="logHead">{card.Name}</h2>
            <div className="SubContainer">
              <div className="LogImg">
                <LogCard name={card.Name} image={card.Image} />
              </div>
              <div className="sect">
                <h3>
                  TODAY'S PRICE:
                  <span className="LogValue">₹{card.TodayPrice}/KG</span>
                </h3>
                <div className="LogButton">
                  <Link to="/Shop">
                    <button className="addToCart">Back To Shop</button>
                  </Link>
                  <Link to="/Cart">
                    <button className="goToCart">Go To Cart</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="Trends">Trends</div>

            {/* ------------ */}
            <div className="FuturePrediction">
              <div className="FutureInfo">
                <h3>
                  YESTERDAY'S PRICE :
                  <span className="LogValue2">₹{card.YesterdayPrice}/KG</span>
                </h3>
                <h3>
                  FUTURE PRICE PREDICTION :
                  {predictedPrice !== null ? (
                    <span className="LogValue2">
                      ₹{predictedPrice.toFixed(2)}/KG
                    </span>
                  ) : null}
                </h3>
              </div>
              <div className="FutureImg">
                {graphImage !== null ? (
                  <img
                    className="PredictedImage"
                    src={`data:image/png;base64,${graphImage}`}
                    alt="Price Graph"
                  />
                ) : (
                  <Loading3 />
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Logs;
