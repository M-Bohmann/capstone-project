import {
  AttributesHeading,
  BotanicalNameParagraph,
  StyledHeading,
  StyledImage,
} from "./PlantDetails.styled";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import UserIcon from "../UserIcon";

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

  if (isLoading) {
    return <h2>Wird geladen...</h2>;
  } else if (error) {
    return <h2>Pflanze nicht gefunden.</h2>;
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
      {isUserPlant && <UserIcon />}
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
        <li>Nektargehalt: {nectar}</li>
        <li>Pollengehalt: {pollen}</li>
        {isUserPlant && <li>Notiz: {note}</li>}
      </ul>
      {isUserPlant && <Link href={`/userPlants/${id}/edit`}>Bearbeiten</Link>}
    </>
  );
}
