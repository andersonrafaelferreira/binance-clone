import React,{useState} from 'react';
import { View } from 'react-native';

import { LineChart } from 'react-native-svg-charts';

import { Foundation, Feather } from '@expo/vector-icons';

import { Container, 
  Logo,
  DescriptionContainer,
  DescriptionContainerRight,
  Sigla,
  Name,
  RightSide,
  LeftSide,
  ItemContainer,
  Price,
  Porcentage,

  PageTitle,
ButtonContainer,
ButtonsLeft,
CircleButton,
CircleButtonText,
ButtonsRight,
Header,
HeaderTitle, 
HeaderYellow, 
HeaderButtons,
Content,
} from './styles';

const Market: React.FC = () => {

  const [data, setData] = useState([85, 91, 35, 53, -53, 24, 50, -20, 80,50, 10, 40, 95, -4, -24]);
  // const [data, setData] = useState(
  //   ["313306.234668","313517.70471","315001.638","311362.696302","310004.446374"]
  //   );

  // const datamine = data.map(item => Number(item));

  const [list, setList] = useState([
    {
      id: 1, 
      logo: 'https://bin.bnbstatic.com/image/admin_mgs_image_upload/20201110/87496d50-2408-43e1-ad4c-78b47b448a6a.png',
      nickname: 'BTC',
      name: 'Bitoin',
      prices: [85, 91, 35, 53, -53, 24, 50, -20, 80, 50, 10, 40, -4, -24, 95],
      value: '$53,682.06',
      porcentage: '+7.19%'
    },
    {
      id: 2, 
      logo: 'https://bin.bnbstatic.com/image/admin_mgs_image_upload/20201110/550eda20-1b9a-4bc7-9a65-e4a329e8bb57.png',
      nickname: 'BNB',
      name: 'BNB',
      prices: [-53, 24, 50, -20, 85, 91, 35, 53, 80, 50, 10, 40, 95, -4, 24],
      value: '$245.89',
      porcentage: '+6.06%'
    },
    {
      id: 3, 
      logo: 'https://bin.bnbstatic.com/image/admin_mgs_image_upload/20201110/22ef2baf-b210-4882-afd9-1317bb7a3603.png',
      nickname: 'DOGE',
      name: 'Dogecoin',
      prices: [-53, 85, 91, 35, 53, 80,50, 10, 40, 95, -4, -24, 24, 50, -20],
      value: '$0.059470',
      porcentage: '+11.79%'
    },
    {
      id: 4, 
      logo: 'https://bin.bnbstatic.com/image/admin_mgs_image_upload/20210122/2b5c7d80-7bcd-4cfb-8bd9-d1760a752afc.png',
      nickname: 'USDT',
      name: 'USDT',
      prices: [91, 35, 53, -53, 24, 50, -20, 80,95, -4, -24, 24, 50, -20, 44],
      value: '$1.00',
      porcentage: '+1.45%'
    },
  ]);

  return (
    <>
    <Container>
      <Header>
        <HeaderButtons>
          <Feather name="user" size={24} color="white" />
        </HeaderButtons>

        <HeaderTitle>
          Binance {" "}
          <HeaderYellow>Lite</HeaderYellow>
        </HeaderTitle>

        <HeaderButtons>
          <Feather name="search" size={24} color="white" />
        </HeaderButtons>

      </Header>

      <Content>
        <PageTitle>
          Market
        </PageTitle>
        <ButtonContainer>
          <ButtonsLeft>
            <CircleButton>
              <CircleButtonText>All</CircleButtonText>
            </CircleButton>
            <CircleButton>
              <Foundation name="star" size={24} color="rgba(255,255,255, 0.3)" />
            </CircleButton>
          </ButtonsLeft>
          <ButtonsRight>
            <CircleButton styled={{ flexDirection: 'row', 
              justifyContent: 'space-between'
            }}>
              <CircleButtonText>
                Market Cap
              </CircleButtonText>
              <Feather name="arrow-down" size={24} color="rgba(255,255,255, 1)" />
            </CircleButton>
          </ButtonsRight>
        </ButtonContainer>
        

        {list.map(item => (
          <ItemContainer key={item.id}>
            <LeftSide>
              {/* <Logo source={{uri: item.logo}} /> */}
              <Foundation name="bitcoin-circle" size={36} color="white" />
              <DescriptionContainer>
                <Sigla>{item.nickname}</Sigla>
                <Name>{item.name}</Name>
              </DescriptionContainer>
            </LeftSide>
            <LineChart
              style={{ height: 70, width: 100, alignSelf: 'center', justifyContent: 'center' }}
              data={item.prices}
              // svg={{ stroke: Number(data[data.length - 2]) < Number(data[data.length - 1]) ? 'rgb(14, 203, 129)' : 'rgb(246, 70, 93)' }}
              svg={{ stroke: item.prices[item.prices.length - 1] > 0 
                ? 'rgb(14, 203, 129)' 
                : 'rgb(246, 70, 93)' }}
              contentInset={{ top: 20, bottom: 20 }}
              
              >
                {/* <Grid /> */}
            </LineChart>
            <RightSide>
              <DescriptionContainerRight>
                <Price>{item.value}</Price>
                <Porcentage>{item.porcentage}</Porcentage>
              </DescriptionContainerRight>
            </RightSide>
          </ItemContainer>
        ))}
      </Content>
    </Container>
    </>
  );
}

export default Market;