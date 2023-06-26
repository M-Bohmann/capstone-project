import PlantDetails from "@/components/PlantDetails";
import { plants } from "@/lib/plants";
import { useRouter } from "next/router";

export default function Plant() {
  const router = useRouter();

  const { plantId } = router.query;

  const currentPlant = plants.find((plant) => plant.id === parseInt(plantId));

  if (!currentPlant) {
    setTimeout(() => {
      router.push("/plants");
    }, 3000);
    return <h1>Plant was not found.</h1>;
  }

  return <PlantDetails currentPlant={currentPlant} />;
}
