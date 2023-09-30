const HOST = 'http://localhost:3100';

export async function fetchData(endPoint: string) {
   const result = await fetch(`${HOST}/${endPoint}`);
   return result.json();
}
