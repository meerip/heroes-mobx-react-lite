import { HeroModel } from "./hero-types";
import { api, Endpoints } from "../utils/axios-config";

export async function getHeroesAxios() {
  return await api.get<HeroModel[]>(Endpoints.heroes);
}

export async function getHeroByIdAxios(id: string) {
  return await api.get<HeroModel>(`${Endpoints.heroes}${id}`);
}

export async function postHeroAxios(hero: HeroModel) {
  return await api.post<HeroModel>(Endpoints.heroes, hero);
}

export async function putHeroAxios(hero: HeroModel) {
  return await api.put<void>(`${Endpoints.heroes}${hero.id}`, hero);
}

export async function deleteHeroAxios(id: string) {
  return await api.delete<void>(`${Endpoints.heroes}${id}`);
}
