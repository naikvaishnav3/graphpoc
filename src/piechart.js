import React, { Component } from 'react';
import { Text,Image,  View, ScrollView, TouchableHighlight } from 'react-native';
import { VictoryPie, VictoryLabel } from "victory-native";
import Svg from 'react-native-svg'
import { styles } from './styles';
import { setFontSize, setWidth, setHeight } from './appUtils';

export default class Pie extends Component {
  constructor(props){
    super(props);
    this.state = {
      sampleData: [
        { x: 1, y: 5, amount: 5000, color1: '#F2BD491A', color2: '#E6AB2E', type: 'Alternate Income', transactions: 2, fill: "#F2BD49", opacity: 1, radius: 135},
        { x: 2, y: 60, amount: 60000, color1: '#5793D91A', color2: '#5793D9', type: 'Salary', transactions: 4, fill: "#5793D9", opacity: 1, radius: 135},
        { x: 3, y: 25, amount: 25000, color1: '#D686CF1A', color2: '#D686CF', type: 'Refund', transactions: 19, fill: "#D686CF", opacity: 1, radius: 135},
        { x: 4, y: 10, amount: 10000, color1: '#FF8A881A', color2: '#E67573', type: 'Interest', transactions: 5, fill:  "#FF8A88", opacity: 1, radius: 135}
      ],
      selectedAmount: 100000,
    }
  }

  onSelection = (item) => {
    let data = [...this.state.sampleData]
    let resultArr = data.map((element)=>{
      if(element.type == item.type){
        element.opacity = 1
        element.radius = 135
      }else{
        element.opacity = 0.25
        element.radius = 135
      }
      return element
    })
    this.setState({
      sampleData: resultArr,
      selectedAmount: item.amount
    })
  }

  onAllSelection= () => {
    let data = [...this.state.sampleData]
    let resultArr = data.map((element)=>{
      element.opacity = 1
      element.radius = 135
      return element
    })
    this.setState({
      sampleData: resultArr,
      selectedAmount: 100000
    })
  }

  render() {
    
    return (

            <ScrollView showsVerticalScrollIndicator={false}>
              <View elevation={3} style={{backgroundColor: 'white', marginTop: 15, borderRadius: 4}}>
              <Svg height={400} width={400}>
                <VictoryPie
                  width={400}
                  height={400}
                  standalone={false}
                  radius={135}
                  innerRadius={100}
                  data={this.state.sampleData}
                  labels={({ datum }) => ``}
                  style={{
                    data: {
                      opacity: ({ datum }) => datum.opacity,
                      fill: ({ datum }) => datum.fill,
                    }
                  }}
                  events={[
                    {
                      target: "data",
                      eventHandlers: {
                        onPressIn: (event, data) => {

                          this.setState({
                            selectedAmount: data.datum.amount
                          })
                          return [
                            {
                              target: "data",
                              eventKey: "all",
                              mutation: ({style}) => {
                                return {
                                  radius: 130,
                                  style: { fill: style.fill, opacity: 0.25 },
                                }
                              }
                            },
                            {
                              target: "data",
                              mutation: ({style, data}) => {
                                return {
                                  radius: 135,
                                  style: { fill: style.fill, opacity: 1 }
                                }
                              }
                            }
                          ];
                          
                        }
                      }
                    }
                  ]}
                />
                <VictoryLabel
                  textAnchor="middle"
                  style={{ fontSize: 20, fontWeight: 'bold' }}
                  x={200} y={200}
                  text={`Rs.${this.state.selectedAmount}`}
                />
              </Svg>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {/* <TouchableHighlight onPress={()=> this.onAllSelection()}> */}
                 <View style={{backgroundColor: 'white', borderWidth: 1, borderColor: (this.state.selectedAmount == 100000 ? '#2A6AC5' : '#0000001F'), flexDirection: 'row', height: 36, borderRadius: 18, marginHorizontal: 10, marginBottom: 10, alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={{fontSize: setFontSize(14), color: '#000000DE', paddingHorizontal: 10, fontWeight: (this.state.selectedAmount == 100000 ? 'bold' : 'normal')}}>All</Text>
                    </View>
                {this.state.sampleData.map((item)=>{
                  // <TouchableHighlight onPress={()=> this.onSelection(item)}> 
                  return <View style={{backgroundColor: 'white', borderWidth: 1, borderColor: (item.amount == this.state.selectedAmount ? '#2A6AC5' : '#0000001F'), flexDirection: 'row', height: 36, borderRadius: 18, marginHorizontal: 10, marginBottom: 10, alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width: 16, height: 16, borderRadius: 2, backgroundColor: item.color2, marginHorizontal: 10}}/>
                        <Text style={{fontSize: setFontSize(14), color: '#000000DE', paddingRight: 10, fontWeight: (item.amount == this.state.selectedAmount ? 'bold' : 'normal')}}>{item.type}</Text>
                      </View>
                      
                })}
              </View>
              </View>
              {this.state.sampleData.map((item)=>{
                return <View elevation={3} style={{backgroundColor: 'white', marginTop: 15, borderRadius: 4,
            }}>
                    <View style={{flex: 1,flexDirection: 'row', justifyContent: 'flex-start'}}>
                      <Text style={{padding: 15, fontSize: setFontSize(16), color: '#000000DE'}}>{item.type} <Text style={{fontWeight: 'bold'}}>Rs.{item.amount}</Text></Text>
                      <Image source={require("../assets/rightarrow.png")} style={{height: setWidth(24), width: setWidth(24), alignSelf: 'center'}}/>
                    </View>
                    <View style={{flexDirection: 'row', marginHorizontal: 15, paddingBottom: 15}}>
                      <View style={{ height: 10, backgroundColor: item.color1, borderRadius: 5, width: `85%`, alignSelf: 'center'}}>
                        <View style={{height: 10, backgroundColor: item.color2, borderRadius: 5, width: `${item.y}%`}}/>
                      </View>
                      <Text style={{fontSize: setFontSize(16), color: '#000000DE', fontWeight: 'bold', marginLeft: 10}}>{item.y}%</Text>
                    </View> 
                    <Text style={{padding: 15, fontSize: setFontSize(16), color: '#000000DE', width: '100%'}}><Text style={{fontWeight: 'bold'}}>{item.transactions}</Text> transactions</Text>
                  </View>
              })}
              
              <TouchableHighlight onPress={()=>{this.props.back();this.setState({selectedAmount: 100000})}} style={{marginTop: 50, backgroundColor: '#5ccfdf', borderRadius: 5, marginBottom: 200}}>
                <Text style={[styles.barTitle, {paddingVertical: 10}]}> Back </Text>
              </TouchableHighlight>
            </ScrollView>
      
    );
  }
}