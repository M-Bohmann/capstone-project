import Link from "next/link";

export default function HomePage() {
  return (
    <ul>
      <li>
        <Link href="/plants">Übersicht insektenfreundlicher Pflanzen</Link>
      </li>
      <li>
        <Link href="/balcony-planner">Zum Balkon Pflanzenplaner</Link>
      </li>
    </ul>
  );
}
