import { StarshipList } from "../../types/StarshipList";
import actionsTypes from "./actionsTypes";

export const getStarshipsAction = (starships: StarshipList) => ({
  type: actionsTypes.getStarships,
  starships,
});
