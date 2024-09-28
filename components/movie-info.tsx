import { API_URL } from "../app/(home)/page";

async  function getMovie(id:string) {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  throw new Error("Something Broke");
  // const response = await fetch(`${API_URL}/${id}`)
  // return response.json();
}

export default async function MovieInfo({id} :  {id:string}  ) {
  const movie = await getMovie(id);
  return <h5> {JSON.stringify(movie)} </h5>
}