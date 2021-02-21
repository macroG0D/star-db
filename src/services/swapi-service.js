export default class SwapiService {
  _apiBase = 'https://swapi.dev/api/';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok)
      throw new Error(`Couldn't fetch ${url}, recieved ${res.status}`);
    return await res.json();
  }

  getAllPeople() {
    return this.getResource('people');
  }

  getPerson(id) {
    return this.getResource(`people/${id}/`);
  }

  getAllPlanets() {
    return this.getResource('planets');
  }

  getPlanet(id) {
    return this.getResource(`planets/${id}/`);
  }

  getAllStarships() {
    return this.getResource('starships');
  }

  getStarship(id) {
    return this.getResource(`starships/${id}`);
  }
}