export const fetchData: any = async (apiUrl: string) => fetch(apiUrl, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
}).then((res) => res.json())
  .catch((error) => { throw error; });
