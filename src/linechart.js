import React, { Component } from 'react';
import { Text,Image,  View, TouchableHighlight } from 'react-native';
import { VictoryChart, VictoryVoronoiContainer, VictoryLine, VictoryAxis, VictoryScatter } from "victory-native";
import { styles } from './styles';
import { setFontSize, setHeight, setWidth } from './appUtils';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {

      selectedLineA: 10,
      selectedLineB: 30,
      selectedLineMonth: 'MAR',
      lineA: [
        { x: 'MAR', y: 45 },
        { x: 'APR', y: 22 },
        { x: 'MAY', y: 5 },
        { x: 'JUN', y: 35 },
        { x: 'JUL', y: 15 },
      ],
      lineB: [
        { x: 'MAR', y: 40 },
        { x: 'APR', y: 10 },
        { x: 'MAY', y: 3 },
        { x: 'JUN', y: 30 },
        { x: 'JUL', y: 30 },
      ],
      point: {},
      savedPoint: {}
    }
  }

  onActivated(points) {
    this.setState({ point: points[0] });
  }

  updateClicked () {
    console.log(1111, this.state.point)
    this.setState({
      selectedLineA: this.state.lineA[this.state.point.eventKey].y,
      selectedLineB: this.state.lineB[this.state.point.eventKey].y,
      selectedLineMonth: this.state.point.x
    });
  }


  render() {
    
    return (
      <View style={styles.container}>
            <View>
              <Text style={styles.selectedText}>Line graph view</Text>
              <View elevation={5} style={styles.multibarView}>
                <Text style={styles.cashflowText}>Cashflow</Text>
                <Text style={[styles.monthStyle, {marginTop: setHeight(8), marginLeft: setWidth(12)}]}>{this.state.selectedLineMonth} 2021</Text>

                  <VictoryChart
                    height={setHeight(161)}
                    width={setWidth(320)}
                    domainPadding={{ y: 10 }}
                    containerComponent={
                      <VictoryVoronoiContainer
                        dimension="x"
                        labels={true}
                        onActivated={(points) => this.onActivated(points)}
                      />
                    }
                    events={[
                      {
                        target: "parent",
                        eventHandlers: {
                          onPress: () => this.updateClicked()
                        }
                      }
                    ]}
                  >

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
                   <VictoryLine
                      style={{
                        data: {
                          stroke: "#5C9EE6",
                          strokeWidth: 2
                        }
                      }}
                      interpolation="natural"
                      data={this.state.lineA}
                    />
                    <VictoryScatter
                      style={{ data: { fill: "green" } }}
                      size={4}
                      data={this.state.lineA}
                    />
                     <VictoryLine
                      style={{
                        data: {
                          stroke: "#F2BD49",
                          strokeWidth: 2
                        }
                      }}
                      interpolation="natural"
                      data={this.state.lineB}
                    />
                    <VictoryScatter
                      style={{ data: { fill: "#c43a31" } }}
                      size={4}
                      data={this.state.lineB}
                    />
                  </VictoryChart>
                <View elevation={3} style={styles.cardView}>
                  <View style={[styles.outflowsymbol, {marginTop: 5}]} /> 
                  <View style={{marginLeft: 20, flexDirection: 'column', justifyContent: 'space-between', flex: 1}}>
                    <Text style={styles.total}>Total outflow <Text style={{fontWeight: 'bold', fontSize: setFontSize(16)}}>{`${this.state.selectedLineA}000`}</Text></Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={styles.monthStyle}>In {this.state.selectedLineMonth} 2021</Text>
                      <Image source={require("../assets/rightarrow.png")} style={{height: setWidth(24), width: setWidth(24)}}/>
                    </View>
                  </View>
                </View>
                <View elevation={3} style={[styles.cardView, {marginTop: setHeight(8), marginBottom: setHeight(10)}]}>
                  <View style={[styles.inflowsymbol, {marginTop: 5}]} />
                  <View style={{marginLeft: 20, flexDirection: 'column', justifyContent: 'space-between', flex: 1}}>
                    <Text style={styles.total}>Total inflow <Text style={{fontWeight: 'bold', fontSize: setFontSize(16)}}>{`${this.state.selectedLineB}000`}</Text></Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={styles.monthStyle}>In {this.state.selectedLineMonth} 2021</Text>
                      <Image source={require("../assets/rightarrow.png")} style={{height: setWidth(24), width: setWidth(24)}}/>
                    </View>
                  </View>
                </View>
              </View>
              
         
            <TouchableHighlight onPress={()=>{this.props.back()}} style={{marginTop: 20, marginBottom: 200, backgroundColor: '#5ccfdf', borderRadius: 5}}>
              <Text style={[styles.barTitle, {paddingVertical: 10}]}> Back </Text>
            </TouchableHighlight>
            </View>
        </View>
    );
  }
}