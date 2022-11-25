import { useQuery } from "@tanstack/react-query";
import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { useRandom } from "./hooks/useRandom";

export const App = () => {
  const query = useRandom();

  return (
    <div className="App App-header">
      {query.isFetching ? (
        <h2>Carregando...</h2>
      ) : (
        <h2>Número Aleatório: {query.data}</h2>
      )}
      {!query.isLoading && query.isError && <h3>{`${query.error}`}</h3>}
      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        {query.isFetching ? "..." : "Novo Número"}
      </button>
    </div>
  );
};
