import { StarshipList } from "../../types/StarshipList";

interface getStarshipsAction {
  type: "getStarships";
  starships: StarshipList;
}

interface thisCouldBeAnotherAction {
  type: "default";
  default: any;
}

type Action = getStarshipsAction | thisCouldBeAnotherAction;

const starshipsReducer = (starships = [], action: Action) => {
  let newStarships;

  switch (action.type) {
    case "getStarships":
      newStarships = action.starships;
      break;
    default:
      newStarships = [...starships];
  }

  return newStarships;
};

export default starshipsReducer;
