// import logo from './logo.svg';
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Provider } from "react-redux";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Body from "./components/Body";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />,
    },
    {
      path: '/watch',
      element: <WatchPage />,
    }
  ],
}]);

function App() {
  return (
    <Provider store={store}>
      <div id="main-container" className="flex flex-col">
        <Header />
        <div className="flex row">
          <Sidebar />
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
