import React from "react";
import Person from "./Person";
import { useQuery } from "react-query";

const fetchPeople = async () => {
  const res = await fetch(`http://swapi.dev/api/people`);
  return res.json();
};

const Poeple = () => {
  const { data, status } = useQuery("people", fetchPeople);

  return (
    <div>
      <h2>People</h2>
      {status === "loading" && <div>Loading data</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Poeple;
