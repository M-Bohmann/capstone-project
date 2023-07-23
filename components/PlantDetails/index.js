import {
  AttributesHeading,
  BackButton,
  BotanicalNameParagraph,
  EditLink,
  HeaderBarDiv,
  PlantDetailsList,
  PlantDetailsListItem,
  StyledImage,
} from "./PlantDetails.styled";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import UserIcon from "../UserIcon";
import { MainContainer } from "@/pages";

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
    return <div>Wird geladen...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
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

  const pollenNectarLevel = {
    1: "niedrig",
    2: "wenig",
    3: "mäßig",
    4: "viel",
  };

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <HeaderBarDiv>
        <BackButton onClick={router.back}>← Zurück</BackButton>
        {isUserPlant ? (
          <>
            <UserIcon isOnPlantDetails />
            <EditLink href={`/userPlants/${id}/edit`}>Bearbeiten</EditLink>
          </>
        ) : (
          <></>
        )}
      </HeaderBarDiv>
      <h1>{name}</h1>
      <BotanicalNameParagraph>{botanicalName}</BotanicalNameParagraph>
      <StyledImage src={imgUrl} alt={name} width={310} height={230} />
      <AttributesHeading>Eigenschaften</AttributesHeading>
      <PlantDetailsList>
        <PlantDetailsListItem>Pflanzenart: {usageType}</PlantDetailsListItem>
        {lightRequirements && lightRequirements.length > 0 && (
          <PlantDetailsListItem>
            Standort: {lightRequirements.join(", ")}
          </PlantDetailsListItem>
        )}
        <PlantDetailsListItem>
          Wuchshöhe: {growthHeight && `${growthHeight} cm`}
        </PlantDetailsListItem>
        <PlantDetailsListItem>Winterhart: {hardy}</PlantDetailsListItem>
        <PlantDetailsListItem>
          Blütezeit:{" "}
          {bloomStart === bloomEnd || !bloomEnd
            ? bloomStart
            : `${bloomStart} bis ${bloomEnd}`}
        </PlantDetailsListItem>
        <PlantDetailsListItem>
          Nektargehalt: {pollenNectarLevel[nectar]}
        </PlantDetailsListItem>
        <PlantDetailsListItem>
          Pollengehalt: {pollenNectarLevel[pollen]}
        </PlantDetailsListItem>
        {isUserPlant && (
          <PlantDetailsListItem>Notiz: {note}</PlantDetailsListItem>
        )}
      </PlantDetailsList>
    </>
  );
}
