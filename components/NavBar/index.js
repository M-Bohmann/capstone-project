import Link from "next/link";
import { StyledNavigation } from "./NavBar.styled";
import HomeIcon from "../HomeIcon";
import BalconyIcon from "../BalconyIcon";
import PlantsIcon from "../PlantsIcon";

export default function NavBar() {
  return (
    <StyledNavigation>
      <Link href="/" aria-label="Zur Homepage">
        <HomeIcon />
      </Link>
      <Link href="/plants" aria-label="Zur Pflanzenliste">
        <PlantsIcon />
      </Link>
      <Link href="/balcony-planner" aria-label="Zur Mein Balkon">
        <BalconyIcon />
      </Link>
    </StyledNavigation>
  );
}
