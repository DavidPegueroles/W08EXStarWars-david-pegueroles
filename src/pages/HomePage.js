import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { getStarshipsThunk } from "../redux/thunks/starshipsThunks";

const HomePage = () => {
  const starships = useSelector((state) => state.starships);
  const dispatch = useDispatch();

  console.log(starships);

  useEffect(() => {
    dispatch(getStarshipsThunk);
  }, [dispatch]);

  return (
    <>
      <h2>Starships:</h2>
      <p id="total-ships">Total ships: </p>
      <h2>Starships by class:</h2>
    </>
  );
};

export default HomePage;
