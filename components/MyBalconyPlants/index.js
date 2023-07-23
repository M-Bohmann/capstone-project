import PlantCard from "../PlantCard";
import { DetailsPageLink } from "../PlantsList/PlantsList.styled";
import UserIcon from "../UserIcon";
import {
  DeletePlantButton,
  DeleteSvg,
  MyBalconyPlantsList,
  PlantCardWrapper,
  StyledParagraph,
} from "./MyBalconyPlants.styled";
import useSWR, { mutate } from "swr";

export default function MyBalconyPlants() {
  const {
    data: balconyPlants,
    isLoading,
    error,
  } = useSWR("/api/balconyPlants", {
    fallbackData: [],
  });

  if (isLoading) {
    return <div>Pflanzen werden geladen...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  async function handleDelete(id) {
    const response = await fetch(`/api/balconyPlants/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      mutate("/api/balconyPlants");
    }
  }

  return (
    <>
      {balconyPlants.length === 0 ? (
        <StyledParagraph>Dein Balkon ist leer.</StyledParagraph>
      ) : (
        <MyBalconyPlantsList>
          {balconyPlants.map((plant) => (
            <li key={plant._id}>
              <PlantCardWrapper>
                <DeletePlantButton onClick={() => handleDelete(plant._id)}>
                  <DeleteSvg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                  >
                    <path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" />
                  </DeleteSvg>
                </DeletePlantButton>
                {plant.isUserPlant && <UserIcon isOnBalcony />}
                <DetailsPageLink
                  href={
                    plant.isUserPlant
                      ? `/userPlants/${plant._id}`
                      : `/plants/${plant._id}`
                  }
                >
                  <PlantCard plant={plant} />
                </DetailsPageLink>
              </PlantCardWrapper>
            </li>
          ))}
        </MyBalconyPlantsList>
      )}
    </>
  );
}
