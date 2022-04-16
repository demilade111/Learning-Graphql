import Card from "./Card";
import { GET_ALL_CHARACTERS } from "./queries";
import { useQuery } from "@apollo/client";

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS);
  if (loading) return <p>LOADING.........</p>;
  if (error) return <p>Error :{error.message}</p>;
  return (
    <>
      <header>
        <h1 className="text-center m-5">Rick and Morty App Graphql</h1>
      </header>

      <div className="row">
        {data?.characters?.results?.map((character) => (
          <Card character={character} key={character.id} />
        ))}
      </div>
    </>
  );
};

export default App;
