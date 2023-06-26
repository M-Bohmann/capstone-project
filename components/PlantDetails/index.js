import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function PlantDetails({ currentPlant }) {
  const {
    name,
    botanicalName,
    lightRequirements,
    usageType,
    growthHeight,
    hardy,
    bloomStart,
    bloomEnd,
    nectar,
    pollen,
    imgUrl,
  } = currentPlant;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Link href="/plants">
        <button>← Back to all plants</button>
      </Link>
      <h1>{name}</h1>
      <p>{botanicalName}</p>
      <Image src={imgUrl} alt={name} width={165} height={165} />
      <h2>Eigenschaften</h2>
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
