import { useRouter } from "next/router";
import useSWR from "swr";
import UserPlantForm from "@/components/UserPlantForm";

export default function AddUserPlant() {
  const router = useRouter();
  const { mutate } = useSWR("/api/balconyPlants");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const plantData = Object.fromEntries(formData);

    const response = await fetch("/api/balconyPlants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...plantData, isUserPlant: true }),
    });

    if (response.ok) {
      mutate();
      router.push("/balcony-planner");
    }
  }

  return <UserPlantForm onSubmit={handleSubmit} />;
}
