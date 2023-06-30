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
  deleteBalconyPlant: (plant) =>
    set((state) => ({
      balconyPlantsList: state.balconyPlantsList.filter((existingPlant) => {
        console.log(plant);
        return plant.uid !== existingPlant.uid;
      }),
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
