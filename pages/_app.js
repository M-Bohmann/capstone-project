import GlobalStyle from "@/styles";
import useLocalStorageState from "use-local-storage-state";
import NavBar from "@/components/NavBar";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [filter, setFilter] = useLocalStorageState("filter", {
    defaultValue: {
      usageType: "",
      lightRequirements: "",
      growthHeight: "",
      hardy: "",
      nectar: "",
      pollen: "",
    },
  });

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} setFilter={setFilter} filter={filter} />
        <NavBar />
      </SWRConfig>
    </>
  );
}
