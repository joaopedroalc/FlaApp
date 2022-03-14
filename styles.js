import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #000;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: ${RFValue(30)}px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  color: red;
  font-size: ${RFValue(20)}px;
  font-weight: 500;
`;

export const Logo = styled.Image`
  width: 300px;
  height: 300px;
  margin-bottom:20px;
`;

export const SubBackground = styled.ImageBackground`
  width: 100%;
  align-items: center;
  margin: 16px 0;
`;