import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export const setHeight=(height)=> metrics.screenHeight * (height / 480);
export const setWidth=(width)=>metrics.screenWidth * (width / 360);
export const setFontSize=(size)=>metrics.screenWidth * (size / 360);