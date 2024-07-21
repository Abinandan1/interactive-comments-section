import data from "../data.json";
import { Comments } from "./components";
import { createContext, useContext, useState } from "react";
const AppContext = createContext();
function App() {
  const [comments, setComments] = useState(data.comments);
  const { currentUser } = data;
  return (
    <AppContext.Provider value={{ comments, setComments, currentUser }}>
      <main>
        <Comments />
      </main>
    </AppContext.Provider>
  );
}
export const useAppContext = () => useContext(AppContext);

export default App;
