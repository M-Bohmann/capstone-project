import PlantDetails from "@/components/PlantDetails";
import { plants } from "@/lib/plants";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Plant() {
  const router = useRouter();

  const { plantId } = router.query;

  const currentPlant = plants.find((plant) => plant.id === parseInt(plantId));

  useEffect(() => {
    if (!currentPlant) {
      const timeout = setTimeout(() => {
        router.push("/plants");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentPlant, router]);
  if (!currentPlant) {
    return <h1>Plant was not found.</h1>;
  }

  return <PlantDetails currentPlant={currentPlant} />;
}
