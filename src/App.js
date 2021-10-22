import React, { useState } from "react";
import NavBar from "./components/Navbar";
import Poeple from "./components/People";
import Planets from "./components/Planets";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const App = () => {
  let [page, setPage] = useState("people");
  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <QueryClientProvider client={queryClient}>
        <NavBar setPage={setPage} />
        <div className="content">
          {page === "people" ? <Poeple /> : <Planets />}
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
