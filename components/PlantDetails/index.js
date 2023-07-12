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
  const path = router.pathname;

  const site = path.split("/")[1];
  const plantCollection = site === "plants" ? "plants" : "balconyPlants";

  const {
    data: plant,
    isLoading,
    error,
  } = useSWR(`/api/${plantCollection}/${id}`);

  if (isLoading || error) {
    return <h1>Loading...</h1>;
  }

  const {
    name,
    botanicalName,
    imgUrl,
    usageType,
    lightRequirements,
    growthHeight,
    hardy,
    bloomStart,
    bloomEnd,
    nectar,
    pollen,
    note,
    isUserPlant,
  } = plant;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <button onClick={router.back}>← Back</button>
      <StyledHeading>{name}</StyledHeading>
      <BotanicalNameParagraph>{botanicalName}</BotanicalNameParagraph>
      <StyledImage src={imgUrl} alt={name} width={305} height={165} />
      <AttributesHeading>Eigenschaften</AttributesHeading>
      <ul>
        <li>Pflanzenart: {usageType}</li>
        <li>Standort: {lightRequirements}</li>
        <li>Wuchshöhe: {growthHeight && `${growthHeight} cm`}</li>
        <li>Winterhart: {hardy}</li>
        <li>
          Blütezeit:
          {bloomStart === bloomEnd || !bloomEnd
            ? bloomStart
            : `${bloomStart} bis ${bloomEnd}`}
        </li>
        <li>Nektar: {nectar}</li>
        <li>Pollen: {pollen}</li>
        {isUserPlant && <li>Notiz: {note}</li>}
      </ul>
    </>
  );
}
