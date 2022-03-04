import { StarshipList } from "../../types/StarshipList";
import { getStarshipsAction } from "../actions/actionsCreators";

export const getStarshipsThunk = async (dispatch: any) => {
  const response = await fetch(process.env.REACT_APP_API as string);
  const starships = await response.json();

  const newStarships: StarshipList = {
    count: starships.count,
    starships: starships.results.map((starship: any) => ({
      name: starship.name,
      starship_class: starship.starship_class,
    })),
  };

  dispatch(getStarshipsAction(newStarships));
};
