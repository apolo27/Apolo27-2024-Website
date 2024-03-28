import * as React from "react";
import styled from "styled-components";

const chartData = [
  { title: "Chart", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc05dd7d9aa47c5293b99cc871b8fbcffad1e2cc6fe4fc2801c7c4e653be5542?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" },
  { title: "Chart", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/04ac8c9b20d0559d0c8dbc5a763c32ae2ed603b26aa20e6f2bddcfdb8d4c6473?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" },
  { title: "Chart", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e299b504d9dd18aaae69c18e26da24dfb995cc0645b7665a8d79243d596a7d4f?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" },
];

const imageData = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6465a7793010716af2d5daf94e8ae41076ce4d66836af7d19265169a71728416?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd114f93969ce99a167b103a6cac0ae2307e2ea27124f1426d93005bb6332350?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd114f93969ce99a167b103a6cac0ae2307e2ea27124f1426d93005bb6332350?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" },
];

const waveData = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/39ddcc9c185dd3513e6a3503f3e913db8f1741ad8d0860467273213503d14684?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/56a09cf5ecce8a28c957c07785713b7eef736928af0e2cdb5597e63395dc59a0?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4760fa82236eb394265df244f5c715804af7a71a8f0b2bd16d8c797322cdccd5?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" },
];

function Home() {
  return (
    <Container>
      <Header>
        <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/176889e364a92445dd31977ed503485e6b4d883f1745a0c759d8b7e003d1be9d?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" alt="Logo" />
      </Header>
      <Main>
        <MainContent>
          <ImageWrapper>
            <MainImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7b011f55dd3fb12ef37d42da363eafc03b7c01f38c87274243c615715159c06?apiKey=ddc13dadffbd4d028d5c8a7502968fe6&" alt="Main Image" />
          </ImageWrapper>
          <ContentWrapper>
            <GlassCard>
              <DotIndicator>
                {[...Array(5)].map((_, index) => (
                  <Dot key={index} active={index === 0} />
                ))}
              </DotIndicator>
              <ImageGrid>
                {imageData.map((image, index) => (
                  <ImageGridItem key={index}>
                    <GridImage src={image.src} alt={`Grid Image ${index + 1}`} />
                  </ImageGridItem>
                ))}
              </ImageGrid>
            </GlassCard>
            <BottomCard>
              <BottomContent>
                <ChartSection>
                  {chartData.map((chart, index) => (
                    <ChartItem key={index}>
                      <ChartTitle>{chart.title}</ChartTitle>
                      <ChartImage src={chart.image} alt={`Chart ${index + 1}`} />
                    </ChartItem>
                  ))}
                </ChartSection>
                <TemperatureSection>
                  <TemperatureCard>
                    <Location>AL</Location>
                    <Temperature>22℃</Temperature>
                  </TemperatureCard>
                </TemperatureSection>
                <WaveSection>
                  <WaveTitle>Graficos de Ondas</WaveTitle>
                  <WaveContent>
                    {waveData.map((wave, index) => (
                      <WaveItem key={index}>
                        <WaveImage src={wave.src} alt={`Wave ${index + 1}`} />
                      </WaveItem>
                    ))}
                  </WaveContent>
                </WaveSection>
              </BottomContent>
            </BottomCard>
          </ContentWrapper>
        </MainContent>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 9px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Logo = styled.img`
  width: 25px;
  height: 25px;
  object-fit: contain;
  filter: drop-shadow(0px 1px 3.5px rgba(0, 0, 0, 0.25));
`;

const Main = styled.main`
  width: 100%;
  margin-top: 15px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const MainContent = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  margin-left: 0;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const MainImage = styled.img`
  width: 100%;
  aspect-ratio: 1.01;
  object-fit: cover;
  border: 3px solid rgba(62, 72, 121, 1);
  flex-grow: 1;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const ContentWrapper = styled.div`
  width: 50%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const GlassCard = styled.section`
  border-radius: 48px;
  backdrop-filter: blur(10.35px);
  background-color: var(--Color-para-glass, rgba(166, 166, 166, 0.21));
  display: flex;
  flex-direction: column;
  padding: 24px 55px;
  flex-grow: 1;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
    margin-top: 40px;
  }
`;

const DotIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const Dot = styled.span`
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#9ea1ac" : "#2a2c38")};
  box-shadow: 0px 4px 6.7px 0px rgba(0, 0, 0, 0.42) inset;
`;

const ImageGrid = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

const ImageGridItem = styled.div`
  width: 33%;
  margin-left: ${({ index }) => (index === 0 ? "0" : "20px")};

  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
    margin-top: 30px;
  }
`;

const GridImage = styled.img`
  width: 100%;
  max-width: 147px;
  aspect-ratio: 1;
  object-fit: contain;
`;

const BottomCard = styled.section`
  border-radius: 48px;
  background-color: var(--Color-para-glass, rgba(166, 166, 166, 0.21));
  margin-top: 44px;
  padding: 0 14px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

const ChartSection = styled.div`
  width: 21%;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding: 13px 0;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const ChartItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin-top: 10px;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const ChartTitle = styled.h3`
  font-family: Poppins, sans-serif;
  margin: 0;
`;

const ChartImage = styled.img`
  width: 78px;
  aspect-ratio: 1.2;
  object-fit: contain;
  margin-top: 4px;
`;

const TemperatureSection = styled.div`
  width: 21%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
    margin-top: 40px;
  }
`;

const TemperatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 12px 0;
  flex-grow: 1;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Location = styled.h2`
  font-size: 35px;
  font-weight: 600;
  font-family: Poppins, sans-serif;
  margin: 0;
`;

const Temperature = styled.p`
  font-size: 25px;
  font-weight: 700;
  font-family: Poppins, sans-serif;
  background: linear-gradient(174deg, #66e0d1 37.02%, #579ff1 89.39%);
  border-radius: 100px;
  box-shadow: 0px 10px 80px 0px rgba(35, 163, 255, 0.4);
  padding: 154px 15px 43px;
  margin: 0;
  justify-content: flex-end;

  @media (max-width: 991px) {
    white-space: initial;
    padding-top: 40px;
  }
`;

const WaveSection = styled.div`
  width: 58%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 51px 0;

  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
    margin-top: 40px;
  }
`;

const WaveTitle = styled.h3`
  color: #fff;
  letter-spacing: 0.5px;
  margin-left: 27px;
  font-size: 16px;
  font-weight: 400;
  font-family: Poppins, sans-serif;

  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const WaveContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  padding-right: 6px;
`;

const WaveItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 26px;
`;

const WaveImage = styled.img`
  width: 100%;
  max-width: 261px;
  aspect-ratio: 11.11;
  object-fit: contain;
`;

export default Home;