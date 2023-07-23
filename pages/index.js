import styled from "styled-components";

export default function HomePage() {
  return (
    <MainContainer>
      <AppNameHeading> BuzzingBalcony</AppNameHeading>
      <HomepageParagraph>
        Willkommen in der App für insektenfreundliche Balkongestaltung! Mit den
        folgenden praktischen Tipps kannst du deinen Balkon zu einen
        Insektenparadies verwandeln.
      </HomepageParagraph>
      <StyledHeading2>Pflanzenauswahl</StyledHeading2>
      <HomepageParagraph>
        Um deinen Balkon für Insekten attraktiv zu gestalten, ist die richtige
        Auswahl von Pflanzen von entscheidender Bedeutung. Entscheide dich für
        blühende Pflanzen, welche Nektar und Pollen liefern, um Schmetterlinge,
        Bienen und andere Insekten anzulocken. Hierfür findest du in der App
        eine Liste nützlicher Pflanzen.
      </HomepageParagraph>
      <StyledHeading2>Wasserquelle bereitstellen</StyledHeading2>
      <HomepageParagraph>
        Stelle eine flache Schale auf deinem Balkon auf und befülle es
        regelmäßig mit frischem Wasser. Achte darauf, dass das Wasser nicht zu
        tief ist und lege Steine hinein, damit die Insekten nicht ertrinken.
      </HomepageParagraph>
      <StyledHeading2>Unterschlupf und Nistplätze</StyledHeading2>
      <HomepageParagraph>
        Biete Unterschlüpfe wie beispielsweise ein Insektenhotel oder
        unbehandeltes Holz an. Schneide abgestorbene Pflanzenteile erst im
        Frühjahr zurück, da diese als Winterunterschlupf dienen.
      </HomepageParagraph>
    </MainContainer>
  );
}

const StyledHeading2 = styled.h2`
  border-left: solid 5px orange;
  margin-left: 5px;
  padding-left: 5px;
`;

export const MainContainer = styled.div`
  margin-bottom: 50px;
  margin-top: 60px;
`;

export const HomepageParagraph = styled.p`
  margin-left: 10px;
  margin-right: 10px;
  text-align: justify;
`;

const AppNameHeading = styled.h1`
  position: fixed;
  width: 100%;
  top: 0;
`;
