export const fetcherJSON = (url: string, config?: RequestInit) => fetch(url, config).then((res) => res.json());
