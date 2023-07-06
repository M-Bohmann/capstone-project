import SearchBarIcon from "../SearchBarIcon";
import { StyledSearchBar } from "./SearchBar.styled";

export default function SearchBar({ onChange }) {
  return (
    <>
      <SearchBarIcon />
      <StyledSearchBar type="search" onChange={onChange} />
    </>
  );
}
