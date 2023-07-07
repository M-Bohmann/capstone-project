import {
  AttributesHeading,
  BotanicalNameParagraph,
  StyledHeading,
  StyledImage,
} from "./PlantDetails.styled";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function PlantDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data: plant, isLoading, error } = useSWR(`/api/plants/${id}`);

  if (isLoading || error) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Head>
        <title>{plant.name}</title>
      </Head>
      <button onClick={router.back}>← Back</button>
      <StyledHeading>{plant.name}</StyledHeading>
      <BotanicalNameParagraph>{plant.botanicalName}</BotanicalNameParagraph>
      <StyledImage
        src={plant.imgUrl}
        alt={plant.name}
        width={305}
        height={165}
      />
      <AttributesHeading>Eigenschaften</AttributesHeading>
      <ul>
        <li>Pflanzenart: {plant.usageType}</li>
        <li>Standort: {plant.lightRequirements}</li>
        <li>Wuchshöhe: {`${plant.growthHeight} cm`}</li>
        <li>Winterhart: {plant.hardy ? "ja" : "nein"}</li>
        <li>
          Blütezeit:{" "}
          {plant.bloomStart === plant.bloomEnd
            ? plant.bloomStart
            : `${plant.bloomStart} bis ${plant.bloomEnd}`}
        </li>
        <li>Nektar: {plant.nectar}</li>
        <li>Pollen: {plant.pollen}</li>
      </ul>
    </>
  );
}
