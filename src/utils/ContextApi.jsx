import { createContext, useState } from "react";
import { useParams } from "react-router-dom";

export const Context = createContext();

export const AppContext = (props) => {
  const { query } = useParams();
  const [imageSearch, setImageSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState(query || "");
  return (
    <Context.Provider
      value={{ imageSearch, setImageSearch, searchQuery, setSearchQuery }}
    >
      {props.children}
    </Context.Provider>
  );
};
