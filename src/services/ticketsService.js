export default class TicketServise {
  getSearchId = async () => {
    const api = 'https://aviasales-test-api.kata.academy/search';
    const result = await fetch(api);
    const searchId = result.json();

    return searchId;
  };

  getTickets = async (searchId) => {
    const api = `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`;
    const result = await fetch(api);
    const ticketsData = result.json();

    return ticketsData;
  };
}
