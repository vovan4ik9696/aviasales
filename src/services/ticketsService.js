export default class TicketServise {
  _api = 'https://aviasales-test-api.kata.academy/';

  getSearchId = async () => {
    const api = `${this._api}search`;
    const result = await fetch(api);
    const searchId = result.json();

    return searchId;
  };

  getTickets = async (searchId) => {
    const api = `${this._api}tickets?searchId=${searchId}`;

    const fetchWithRetry = async () => {
      try {
        const result = await fetch(api);

        if (result.status >= 500 && result.status < 600) {
          return await fetchWithRetry();
        }

        if (!result.ok) {
          throw new Error(`API error: ${result.status} ${result.statusText}`);
        }

        const ticketsData = await result.json();

        return ticketsData;
      } catch (error) {
        console.error(`Failed to fetch tickets: ${error.message}`);
        throw error;
      }
    };

    return fetchWithRetry();
  };
}
