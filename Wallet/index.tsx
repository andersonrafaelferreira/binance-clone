import React, {useState} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { PieChart } from 'react-native-svg-charts';

import { Foundation } from '@expo/vector-icons';

import { Container, Content, DescriptionContainer,
  DescriptionContainerRight,
  Sigla,
  Name,
  RightSide,
  LeftSide,
  ItemContainer,
  Price,
  Porcentage,
  ListContainer,
  ChartContainer,
	Details, 
	HideBalance, 
	Balance,
	DetailsContainer,
 } from './styles';


const Wallet: React.FC = () => {

	const data = [89, 5, 4, 2, 0, 0];
			const nomenclaturas = [
				"BTC",
				"BNB",
				"DOGE",
				"USDT",
				"XRP",
				"Others",
		];

			const [list, setList] = useState([
				{
					id: 1, 
					logo: 'https://bin.bnbstatic.com/image/admin_mgs_image_upload/20201110/87496d50-2408-43e1-ad4c-78b47b448a6a.png',
					nickname: 'BTC',
					name: 'Bitoin',
					prices: [85, 91, 35, 53, -53, 24, 50, -20, 80, 50, 10, 40, -4, -24, 95],
					value: '0,06',
					porcentage: '$ 1.519,77'
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
					value: '1.682,06',
					porcentage: '$ 19,77'
				},
				{
					id: 4, 
					logo: 'https://bin.bnbstatic.com/image/admin_mgs_image_upload/20210122/2b5c7d80-7bcd-4cfb-8bd9-d1760a752afc.png',
					nickname: 'USDT',
					name: 'USDT',
					prices: [91, 35, 53, -53, 24, 50, -20, 80,95, -4, -24, 24, 50, -20, 44],
					value: '2,063,4254',
					porcentage: '$ 9,77'
				},
			]);
		

			let colors:any = [];
			const randomColor = (value:any, index: any) => {
				console.log(index, nomenclaturas[index]);
					let result = ('#' + ((Math.random() * 0xffffff) << 0)
							.toString(16) + '000000')
							.slice(0, 7);
					colors.push({result, value, nome: nomenclaturas[index] });
					console.log(result, value);
					return result;
			}
			

			const pieData = data
					// .filter((value) => value > 0)
					.map((value, index) => {
						let color = randomColor(value, index);
						return {
							value,
							svg: {
									fill: color,
									onPress: () => console.log('press', index),
							},
							key: `pie-${index}`,
						}
					})
	return (
				<Container>
					<DetailsContainer>
						<Details>
							<HideBalance>Total Balance</HideBalance>
							<TouchableOpacity>
								<Foundation name="eye" size={14} color="#fff" 
									style={{marginLeft: 6}}
								/>
							</TouchableOpacity>
						</Details>
						<Details>
							<Balance>$ 1.704,39</Balance>
						</Details>
					</DetailsContainer>

					<Content>

					<ChartContainer>
						
						<View>
							<PieChart style={{ height: 100, width: 100 }} data={pieData}  />
						</View>

						<View style={{ width: '100%'}}>
						{colors.map(color => (
							<View style={{ flexDirection: 'row',
								marginBottom: 6,
							justifyContent: 'space-evenly'}}>
								<View style={{flexDirection: 'row'}}>
								<View style={{ 
									backgroundColor: color.result, width: 16, height: 16, borderRadius: 4
								}} />
								<Text style={{color: 'white', width: 50, marginLeft: 6}}>{color.nome}</Text>
								
								</View>
								<Text style={{color: 'white', width: 50}}>{color.value} %</Text>
							</View>

							
						))}
						</View>
					</ChartContainer>

					<ListContainer>
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

							
								<RightSide>
									<DescriptionContainerRight>
										<Price>{item.value}</Price>
										<Porcentage>{item.porcentage}</Porcentage>
									</DescriptionContainerRight>
								</RightSide>
							</ItemContainer>
						))}	
					</ListContainer>
					</Content>

				</Container>
			)
		}

export default Wallet;


