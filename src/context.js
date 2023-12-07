import { createContext, useState, useContext } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showRooms, setShowRooms] = useState(true);
  const [showActivities, setShowActivities] = useState(false);
  const [showBudget, setShowBudget] = useState(false);

  const displayRooms = () => {
    setShowRooms(true);
    setShowActivities(false);
    setShowBudget(false);
  };
  const displayActivity = () => {
    setShowActivities(true);
    setShowRooms(false);
    setShowBudget(false);
  };
  const displayBudget = () => {
    setShowActivities(false);
    setShowRooms(false);
    setShowBudget(true);
  };

  const nextHandler = () => {
    let element = document.querySelector(".active");
    let idValue = element.id;
    switch (idValue) {
      case "one":
        displayActivity();
        break;
      case "two":
        displayBudget();
        break;
      case "three":
        displayRooms();
        break;
      default:
        displayActivity();
    }
  };
  const prevHandler = () => {
    let element = document.querySelector(".active");
    let idValue = element.id;
    switch (idValue) {
      case "one":
        displayBudget();
        break;
      case "two":
        displayRooms();
        break;
      case "three":
        displayActivity();
        break;
      default:
        displayActivity();
    }
  };

  return (
    <AppContext.Provider
      value={{
        showRooms,
        showActivities,
        showBudget,
        nextHandler,
        prevHandler,
        displayRooms,
        displayActivity,
        displayBudget,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
