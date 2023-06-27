import FilteredPlantsList from "@/components/FilteredPlantsList";

export default function BalconyPlantsPlanner() {
  return (
    <>
      <h1>Balkon Pflanzenplaner</h1>
      <button>Filter</button>
      <h2>Pflanzenempfehlung</h2>
      <FilteredPlantsList />
    </>
  );
}
