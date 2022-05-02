import React, { createContext, useContext } from "react";
import { useModalReducer } from "./reducers";

const ModalContext = createContext();
const { Provider } = ModalContext;

const ModalProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useModalReducer({
    isModalOpen: false,
    repoData: [],
    repoImages: [],
    projectUrl: [],
    githubUrl: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useModalContext = () => {
  return useContext(ModalContext);
};

export { ModalProvider, useModalContext };
