import UserPlantForm from "@/components/UserPlantForm";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";

export default function EditUserPlants() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: userPlant,
    isLoading,
    error,
  } = useSWR(`/api/balconyPlants/${id}`);

  async function handleEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const balconyPlantData = Object.fromEntries(formData);

    const response = await fetch(`/api/balconyPlants/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(balconyPlantData),
    });

    if (response.ok) {
      mutate();
      router.back();
    }
    console.log(userPlant);
  }
  return <UserPlantForm onSubmit={handleEdit} defaultValue={userPlant} />;
}
