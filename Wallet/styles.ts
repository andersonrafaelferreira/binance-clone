import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
  background-color: #1F2630;
`;

export const Content = styled.ScrollView`
  flex: 1;
  height: 100%;
  background-color: #232A34;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
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
  margin-bottom: 10px;
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
  color: #686E7A;
  margin-top: 6px;
  text-align: right;
`;

export const ListContainer = styled.View`
  margin-top: 20px;
`;

export const DetailsContainer = styled.View`
  padding: 20px;
  margin-top: 60px;
`;
export const Details = styled.View`
    flex-direction: row; 
    align-items: center;
`;
export const ChartContainer = styled.View`
  margin-top: 20px;
  flex-direction: row; 
  padding-right: 60
`;
export const HideBalance = styled.Text`
  color: #686E7A;
`;
export const Balance = styled.Text`
  color: #fff;
  font-size: 32px;
  margin-top: 10px;
  margin-bottom: 30px;
`;