import { Provider } from "react-redux";
import { store } from "./store";
import Notes from "./components/Notes";

export const App = () => {
  return (
    <Provider store={store} >
      <div>
        <Notes />
      </div>
    </Provider>
  );
};
