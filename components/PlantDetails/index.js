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
        <li>Wuchshöhe: {`${growthHeight} cm`}</li>
        <li>Winterhart: {hardy ? "ja" : "nein"}</li>
        <li>
          Blütezeit:{" "}
          {bloomStart === bloomEnd
            ? bloomStart
            : `${bloomStart} bis ${bloomEnd}`}
        </li>
        <li>Nektar: {nectar}</li>
        <li>Pollen: {pollen}</li>
      </ul>
    </>
  );
}
