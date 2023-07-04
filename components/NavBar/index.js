import Link from "next/link";
import { StyledNavigation } from "./NavBar.styled";
import HomeIcon from "../HomeIcon";
import BalconyIcon from "../BalconyIcon";
import PlantsIcon from "../PlantsIcon";

export default function NavBar() {
  return (
    <StyledNavigation>
      <Link href="/">
        <HomeIcon />
      </Link>
      <Link href="/plants">
        <PlantsIcon />
      </Link>
      <Link href="/balcony-planner">
        <BalconyIcon />
      </Link>
    </StyledNavigation>
  );
}
