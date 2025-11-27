import { createContext, useReducer } from "react";

export const AppContext = createContext();

function themeReducer(state, action) {
  switch (action.type) {
    case "SWITCH_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}

function productReducer(state, action) {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    case "TOGGLE_LIKE":
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.payload ? { ...p, liked: !p.liked } : p
        ),
      };

    default:
      return state;
  }
}

function rootReducer(state, action) {
  return {
    theme: themeReducer(state.theme, action),
    product: productReducer(state.product, action),
  };
}

const initialState = {
  theme: { theme: "light" },
  product: {
    products: [
      { id: 1, title: "Laptop", category: "electronics", liked: false },
      { id: 2, title: "Keyboard", category: "electronics", liked: false },
      { id: 3, title: "T-Shirt", category: "clothes", liked: false },
    ],
    filter: "all",
  },
};

export function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
