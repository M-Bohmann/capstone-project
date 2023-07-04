import { useRouter } from "next/router";
import { NavSvgs } from "../NavBar/NavBar.styled";

export default function HomeIcon() {
  const router = useRouter();

  return (
    <NavSvgs
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      isActive={router.pathname === "/"}
    >
      <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22" />
    </NavSvgs>
  );
}
