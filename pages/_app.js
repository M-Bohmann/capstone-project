import { plants } from "@/lib/plants";
import GlobalStyle from "../styles";
import { create } from "zustand";

const useStore = create((set) => ({
  plantList: plants,
  setPlantList: (plantList) => set(() => ({ plantList: plantList })),
  balconyPlantsList: [],
  addBalconyPlant: (plant) =>
    set((state) => ({
      balconyPlantsList: [...state.balconyPlantsList, plant],
    })),
}));

export { useStore };

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
