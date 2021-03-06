import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { CarDTO } from '../../dtos/carDTO';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroud_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  padding: 31px 24px;
  justify-content: flex-end;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicato: false
})``;