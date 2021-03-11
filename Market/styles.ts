import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  
  background-color: #1F2630;
`;

export const DescriptionContainer = styled.View`
  margin-left: 6px;
`;
export const DescriptionContainerRight = styled.View`
  margin-left: 6px;
  justify-content: flex-start;
  width: 100px;

`;
export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;
export const LeftSide = styled.View`
  flex-direction: row;
  flex: 1;
`;
export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;
export const Logo = styled.Image`
  width: 30px;
  height: 30px;
`;
export const Sigla = styled.Text`
  color: white;
`;
export const Name = styled.Text`
  color: #686E7A;
  margin-top: 6px;
`;
export const Price = styled.Text`
  color: white;
  font-size: 18px;
  text-align: right;
`;
export const Porcentage = styled.Text`
  color: rgb(14, 203, 129);
  margin-top: 6px;
  text-align: right;
`;

export const PageTitle = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: bold;

`;
export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;

  `;
export const ButtonsLeft = styled.View`
  flex-direction: row
`;
export const ButtonsRight = styled.View`

`;
export const CircleButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding: 5px 8px;
    background-color: rgba(255,255,255,0.1);
    border-radius: 20px;
    align-content: center;
  margin-right: 6px;
`;
export const CircleButtonText = styled.Text`
  color: white;
`;


export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;

  margin-top: 60px;
  padding: 0 20px;
  margin-bottom: 20px;
`;
export const HeaderTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
`; 
export const HeaderYellow = styled.Text`
  color: #F0B90B;
  font-size: 13px;
  font-weight: 400;
`; 

export const HeaderButtons = styled.TouchableOpacity`

`;
export const Content = styled.ScrollView`
  flex: 1;
  height: 100%;
  background-color: #232A34;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
`;
