import "./App.css";
import Header from "./components/Header";
import FetchQueryExample from "./components/FetchExample/FetchQueryExample";
import ContextExample from "./components/ContextExample/ContextExample";
import { createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const VariableToPassContext = createContext();

const variableToPass = "Hello World";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <FetchQueryExample />

      <VariableToPassContext.Provider value={variableToPass}>
        <ContextExample />
      </VariableToPassContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
