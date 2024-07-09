import "./App.css";
import Header from "./components/Header";
import FetchQueryExample from "./components/FetchExample/FetchQueryExample";
import ContextExample from "./components/ContextExample/ContextExample";
import RenderList from "./components/RenderLists/RenderList";
import RenderList2 from "./components/RenderLists/RenderList2";
import FetchWithAsync from "./components/FetchExample/FetchWithAsync";
import data from "../db.json";
import { createContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CounterExample from "./components/CounterExample/CounterExample";
import IteratingList from "./components/IteratingListExample/IteratingList";
import OpenClose from "./components/OpenClose/OpenClose";
import DateCounter from "./components/CounterExample/DateCounterExample";
import ButtonChange from "./components/ToggleExample/ButtonChange";
import InputRender from "./components/InputExample/inputRender";
import SumExample from "./components/SumExample/SumExample";
import Nav from "./components/Nav";
import RouterExample from "./components/RouterExample/RouterExample";
import ProfilePage from "./components/Profile/ProfilePage";
import DumbBtnContainer from "./components/DumbButtonExample/DumbBtnContainer";
import Object from "./components/ObjectExample/Object";
import InputWithValidation from "./components/InputExample/InputWithValidation";
import YesNo from "./components/FetchExample/FetchExample";
import Time from "./components/UseEffect/TimeExample/Time";
import UseEffectDemo from "./components/UseEffect/useEffect";
import FetchOnMount from "./components/FetchExample/FecthOnMount";
import UseMemoExample from "./components/UseDemoExample/UseMemoExample";
import DayJS from "./components/DayJSExample/DayJS";

const queryClient = new QueryClient();

const variableToPass = "Hello World";

const passMore = "Hello Universe";

export const VariableToPassContext = createContext();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Header />
      <div className="container">
        <FetchQueryExample />

        <VariableToPassContext.Provider value={{ variableToPass, passMore }}>
          <ContextExample />
        </VariableToPassContext.Provider>

        <RenderList data={data} />
        <RenderList2 />
        <FetchWithAsync />
        <CounterExample />
        <IteratingList />
        <OpenClose />
        <DateCounter />
        <ButtonChange />
        <InputRender />
        <SumExample />
        <RouterExample />
        <ProfilePage />
        <DumbBtnContainer />
        <Object />
        <InputWithValidation />
        <YesNo />
        <Time />
        <UseEffectDemo />
        <FetchOnMount />
        <UseMemoExample />
        <DayJS />
      </div>
    </QueryClientProvider>
  );
}

export default App;
