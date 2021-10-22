import React, { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./Palent";

const fetchPlanets = async (page = 1) => {
  console.log("+++++++++++++", page);
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { isLoading, isError, error, data, status, isPreviousData } = useQuery(
    ["planets", page],
    () => fetchPlanets(page),
    {
      keepPreviousData: true,
    }
  );

  console.log("+==========", !isPreviousData);
  return (
    <div>
      <h2>Planets 123</h2>

      {status === "loading" && <div>Loading data</div>}

      {error === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Previous Page
          </button>
          <span>{page}</span>
          <button
            onClick={() => {
              if (!isPreviousData && data.next) {
                setPage((old) => old + 1);
              }
            }}
            // Disable the Next Page button until we know a next page is available
            disabled={isPreviousData}
          >
            Next Page
          </button>
          {isLoading ? (
            <div>Loading...</div>
          ) : isError ? (
            <div>Error: {error.message}</div>
          ) : (
            <div>
              {console.log("++++++++++++", data)}
              {data.results.map((planet) => (
                <Planet key={planet.name} planet={planet} />
              ))}
            </div>
          )}
          {/* <div>
            {resolvedData.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div> */}
        </>
      )}
    </div>
  );
};

export default Planets;
