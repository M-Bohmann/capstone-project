import Link from "next/link";
import { NavSvgs, StyledNavigation } from "./NavBar.styled";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <StyledNavigation>
      <Link href="/">
        <NavSvgs
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          isActive={router.pathname === "/"}
        >
          <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22" />
        </NavSvgs>
      </Link>
      <Link href="/plants">
        <NavSvgs
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          isActive={router.pathname === "/plants"}
        >
          <path d="M23,4.1V2.3L21.2,2.1C21.1,2.1 20.5,2 19.5,2C15.4,2 12.4,3.2 10.7,5.3C9.4,4.5 7.6,4 5.5,4C4.5,4 3.8,4.1 3.8,4.1L1.9,4.4L2,6.1C2.1,9.1 3.6,14.8 8.8,14.8C8.9,14.8 8.9,14.8 9,14.8V18.2C5.2,18.7 2,20 2,20V22H22V20C22,20 18.8,18.7 15,18.2V15C21.3,14.9 23,7.8 23,4.1M12,18C11.7,18 11.3,18 11,18V12.4C11,12.4 10.8,9 8,9C8,9 9.5,9.8 9.9,12.7C9.5,12.8 9.1,12.8 8.8,12.8C4.2,12.8 4,6.1 4,6.1C4,6.1 4.6,6 5.5,6C7.4,6 10.5,6.4 11.4,9.1C11.9,4.6 17,4 19.5,4C20.4,4 21,4.1 21,4.1C21,4.1 21,13.1 14.7,13.1C14.5,13.1 14.2,13.1 14,13.1C14,11.1 16,8.1 16,8.1C13,9.1 13,13 13,13V18C12.7,18 12.3,18 12,18Z" />
        </NavSvgs>
      </Link>
      <Link href="/balcony-planner">
        <NavSvgs
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          isActive={router.pathname === "/balcony-planner"}
        >
          <path d="M10 10V12H8V10H10M16 12V10H14V12H16M21 14V22H3V14H4V10C4 5.58 7.58 2 12 2S20 5.58 20 10V14H21M7 16H5V20H7V16M11 16H9V20H11V16M11 4.08C8.16 4.56 6 7.03 6 10V14H11V4.08M13 14H18V10C18 7.03 15.84 4.56 13 4.08V14M15 16H13V20H15V16M19 16H17V20H19V16Z" />
        </NavSvgs>
      </Link>
    </StyledNavigation>
  );
}
