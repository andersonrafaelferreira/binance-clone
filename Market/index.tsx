import React,{useState} from 'react';
import { View } from 'react-native';

import { LineChart } from 'react-native-svg-charts'

import { Container } from './styles';

const Market: React.FC = () => {

  const [data, setData] = useState([85, 91, 35, 53, -53, 24, 50, -20, 80,50, 10, 40, 95, -4, -24]);
  // const [data, setData] = useState(
  //   ["313306.234668","313517.70471","315001.638","311362.696302","310004.446374"]
  //   );

  const datamine = data.map(item => Number(item));

  const [list, setList] = useState([
    {
      logo: 'https://bin.bnbstatic.com/image/admin_mgs_image_upload/20201110/87496d50-2408-43e1-ad4c-78b47b448a6a.png',
      nickname: 'BTC',
      name: 'Bitoin',
      prices: [85, 91, 35, 53, -53, 24, 50, -20, 80, 50, 10, 40, -4, -24, 95],
      value: '$53,682.06',
      percentual: '+7.19%'
    },
    {
      logo: 'https://bin.bnbstatic.com/image/admin_mgs_image_upload/20201110/550eda20-1b9a-4bc7-9a65-e4a329e8bb57.png',
      nickname: 'BNB',
      name: 'BNB',
      prices: [-53, 24, 50, -20, 85, 91, 35, 53, 80, 50, 10, 40, 95, -4, 24],
      value: '$245.89',
      percentual: '+6.06%'
    },
    {
      logo: 'https://bin.bnbstatic.com/image/admin_mgs_image_upload/20201110/22ef2baf-b210-4882-afd9-1317bb7a3603.png',
      nickname: 'DOGE',
      name: 'Dogecoin',
      prices: [-53, 85, 91, 35, 53, 80,50, 10, 40, 95, -4, -24, 24, 50, -20],
      value: '$0.059470',
      percentual: '+11.79%'
    },
    {
      logo: 'https://bin.bnbstatic.com/image/admin_mgs_image_upload/20210122/2b5c7d80-7bcd-4cfb-8bd9-d1760a752afc.png',
      nickname: 'USDT',
      name: 'USDT',
      prices: [91, 35, 53, -53, 24, 50, -20, 80,95, -4, -24, 24, 50, -20, 44],
      value: '$1.00',
      percentual: '+1.45%'
    },
  ])

  console.log(Number(data[data.length -2 ]));
  console.log(Number(data[data.length -1 ]));

  return (
    <Container>
      {list.map(item => (
        <LineChart
          style={{ height: 100, width: 100 }}
          data={item.prices}
          // svg={{ stroke: Number(data[data.length - 2]) < Number(data[data.length - 1]) ? 'rgb(14, 203, 129)' : 'rgb(246, 70, 93)' }}
          svg={{ stroke: item.prices[item.prices.length - 1] > 0 ? 'rgb(14, 203, 129)' : 'rgb(246, 70, 93)' }}
          contentInset={{ top: 20, bottom: 20 }}
          
        >
            {/* <Grid /> */}
        </LineChart>
      ))}
    </Container>
  );
}

export default Market;