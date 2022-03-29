

import { StyleSheet } from 'react-native';
import { setFontSize, setHeight, setWidth } from './appUtils';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#FAFBFC'
    },
    scrollView: {
      marginHorizontal: setWidth(20),
      flexGrow: 1
    },
    title: {
      color: 'black',
      fontSize: 20,
      textAlign: 'center',
      marginTop: setHeight(10)
    },
    barTitle: {
      fontSize: setFontSize(22), color: 'white', fontWeight: 'bold', textAlign: 'center'
    },
    sectionTitle: {
      fontSize: setFontSize(22), color: 'white', fontWeight: 'bold', marginLeft: 20
    },
    selectedText: {
      fontSize: setFontSize(20), color: '#000000DE', marginTop: setHeight(25), 
    },
    cashflowText: {
      fontSize: setFontSize(20), color: '#000000DE', marginTop: setHeight(16), marginLeft: setWidth(12) 
    },
    multibarView: {
      width: '100%',
      borderRadius: 8,
      backgroundColor: 'white',
      marginTop: setHeight(12)
    },
    headerStyle: {
      backgroundColor: '#9565FF',
      height: setHeight(67),
      flexDirection: 'column',
      justifyContent:'center'
    },
    cardView: {
      height: setHeight(60),
      backgroundColor : '#FAFBFC',
      borderWidth: 1,
      borderColor: '#00000014',
      borderRadius: setWidth(8),
      marginHorizontal: setWidth(12),
      flexDirection: 'row',
      justifyContent: 'flex-start',
      padding: setWidth(12)
    },
    monthStyle: {
      fontSize: setFontSize(12),
      color: '#00000099',
    },
    outflowsymbol: {
      width: setWidth(12),
      height: setWidth(12),
      borderRadius: setWidth(2),
      backgroundColor: '#2D6DB3'
    },
    inflowsymbol: {
      width: setWidth(12),
      height: setWidth(12),
      borderRadius: setWidth(2),
      backgroundColor:'#F2BD49'
    },
    total: {
      fontSize: setFontSize(14),
      color: '#000000DE',
      width: '100%'
    },
    axisOne: {
      grid: {
        stroke: ({ tick }) => "lightgray",
        strokeWidth: 1
      },
      // ticks: { strokeWidth: 1 },
      
    },
  });