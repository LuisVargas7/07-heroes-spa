import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  if (name.length <= 1) return [];
  name.toLocaleLowerCase().trim();

  return heroes.filter((heroe) =>
    heroe.superhero.toLocaleLowerCase().trim().includes(name)
  );
};
