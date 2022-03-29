import React, { Component } from 'react';
import { Text,Image,  View, TouchableHighlight } from 'react-native';
import { VictoryBar, VictoryChart, VictoryGroup, VictoryAxis } from "victory-native";
import Svg from 'react-native-svg'
import { styles } from './styles';
import { setFontSize, setHeight, setWidth } from './appUtils';

export default class BarChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedXbarA: 10,
      selectedXbarB: 30,
      selectedMonth: 'MAR',
      barA: [
        { x: 'MAR', y: 10},
        { x: 'APR', y: 20},
        { x: 'MAY', y: 40},
        { x: 'JUN', y: 25}
      ],
      barB: [
        { x: 'MAR', y: 30},
        { x: 'APR', y: 10},
        { x: 'MAY', y: 25},
        { x: 'JUN', y: 40}
      ],
    }
  }


  render() {
    return (
        <View>
            <Text style={styles.selectedText}>If selected</Text>
            <View elevation={5} style={styles.multibarView}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={styles.cashflowText}>Cashflow</Text>
                  <Text style={[styles.monthStyle, {marginTop: setHeight(8), marginLeft: setWidth(12)}]}>{this.state.selectedMonth} 2021</Text>
                </View>
                <View style={{width: setWidth(40), height: setWidth(40), borderRadius: setWidth(20), borderWidth: setWidth(1), borderColor: '#0A68CC', marginTop: setHeight(12), marginRight: setHeight(10), justifyContent: 'center', alignItems: 'center'}} >
                  <Image source={require("../assets/barchart_icon.png")} style={{height: setWidth(13), width: setWidth(20)}}/>
                </View>
              </View>
              
              <Svg height={setHeight(161)} width={setWidth(320)}>
                <VictoryChart standalone={false} height={setHeight(161)} width={setWidth(320)}>
                <VictoryAxis
                    standalone={false}
                  />
                  <VictoryAxis
                    dependentAxis
                    domain={[0, 50]}
                    orientation="left"
                    standalone={false}
                    style={styles.axisOne}
                    // gridComponent={<LineSegment events={{ onPress: ()=>{alert(11111)} }}/>}
                  />
                  <VictoryGroup
                offset={12}
                style={{ data: { width: 12 } }}
                events={[{
                  childName: "all",
                  target: "data",
                  eventHandlers: {
                    onPress: (event, data) => {
                      this.setState({
                        selectedXbarA: this.state.barA[data.index].y,
                        selectedXbarB: this.state.barB[data.index].y,
                        selectedMonth: this.state.barB[data.index].x
                      })
                      return [
                        {
                          childName: "bar-1",
                          eventKey: "all",
                          target: "data",
                          mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "#5C9EE6", opacity: 0.5 }) })
                        },
                        {
                          childName: "bar-1",
                          target: "data",
                          mutation: (props) => {
                            return { style: Object.assign({}, props.style, { fill: "#5C9EE6", opacity: 1 }) }
                          }
                        }, 
                        {
                          childName: "bar-2",
                          eventKey: "all",
                          target: "data",
                          mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "#F2BD49", opacity: 0.5 }) })
                        },
                        {
                          childName: "bar-2",
                          target: "data",
                          mutation: (props) => ({ style: Object.assign({}, props.style, { fill: "#F2BD49", opacity: 1 }) })
                        }
                      ];
                    }
                  }
                }]}
              >
               
                <VictoryBar name="bar-1"
                    data={this.state.barA}
                    style={{
                      data: {
                        fill: '#5C9EE6',
                        opacity: 0.5
                      },
                    }}
                    cornerRadius={{ topLeft: 4, topRight: 4 }}
                  />
                  <VictoryBar name="bar-2"
                    data={this.state.barB}
                    style={{
                      data: {
                        fill: '#F2BD49',
                        opacity: 0.5
                      },
                    }}
                    cornerRadius={{ topLeft: 4, topRight: 4 }}
                  />
                
                  </VictoryGroup>
                </VictoryChart>
              </Svg>
              <View elevation={3} style={styles.cardView}>
                <View style={[styles.outflowsymbol, {marginTop: 5}]} /> 
                <View style={{marginLeft: 20, flexDirection: 'column', justifyContent: 'space-between', flex: 1}}>
                  <Text style={styles.total}>Total outflow <Text style={{fontWeight: 'bold', fontSize: setFontSize(16)}}>{`${this.state.selectedXbarA}000`}</Text></Text>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.monthStyle}>In {this.state.selectedMonth} 2021</Text>
                    <Image source={require("../assets/rightarrow.png")} style={{height: setWidth(24), width: setWidth(24)}}/>
                  </View>
                </View>
              </View>
              <View elevation={3} style={[styles.cardView, {marginTop: setHeight(8), marginBottom: setHeight(10)}]}>
                <View style={[styles.inflowsymbol, {marginTop: 5}]} />
                  <View style={{marginLeft: 20, flexDirection: 'column', justifyContent: 'space-between', flex: 1}}>
                    <Text style={styles.total}>Total inflow <Text style={{fontWeight: 'bold', fontSize: setFontSize(16)}}>{`${this.state.selectedXbarB}000`}</Text></Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={styles.monthStyle}>In {this.state.selectedMonth} 2021</Text>
                      <Image source={require("../assets/rightarrow.png")} style={{height: setWidth(24), width: setWidth(24)}}/>
                    </View>
                  </View>
                </View>
              </View>
            </View> 
    );
  }
}