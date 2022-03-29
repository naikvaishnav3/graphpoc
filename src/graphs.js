import React, { Component } from 'react';
import { Text,  View, ScrollView, TouchableHighlight } from 'react-native';
import Pie from './piechart';
import { styles } from './styles';
import { setWidth } from './appUtils';
import BarChart from './barchart';
import LineChart from './linechart';

export default class Graphs extends Component {
  constructor(props){
    super(props);
    this.state = {
      homepage: true,
      barchart: false,
      piechart: false,
    }
  }

  render() {
    return (
        <View style={styles.container}>
            {this.state.homepage ? <View>
              <View style={[styles.headerStyle, {marginBottom: 50,backgroundColor: '#9565FF'}]}>
                <Text style={[styles.barTitle]}>CHARTS</Text>
              </View>
              <TouchableHighlight onPress={()=>{this.setState({homepage: false, barchart: true})}} style={{marginTop: 20, backgroundColor: '#5ccfdf', borderRadius: 5, marginHorizontal: 20}}>
              <Text style={[styles.barTitle, {marginHorizontal: 20, paddingVertical: 10}]}>MultiBar & Line Chart</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={()=>{this.setState({homepage: false, piechart: true})}} style={{marginTop: 20, backgroundColor: '#5ccfdf' , borderRadius: 5, marginHorizontal: 20}}>
                <Text style={[styles.barTitle, {paddingVertical: 10}]}> Pie Chart</Text>
              </TouchableHighlight>
            </View> : <View>
              <View style={styles.headerStyle}>
                <Text style={[styles.sectionTitle]}>Hero Card</Text>
              </View>
              <ScrollView style={{marginHorizontal: setWidth(18)}} showsVerticalScrollIndicator={false}>
                {this.state.barchart ? <View>
                  <BarChart/>
                  <LineChart back={()=>this.setState({homepage: true, barchart: false})} />
                </View> : 
                <Pie back={() => this.setState({homepage: true, piechart: false})}/>}
              </ScrollView>
            </View>}
        </View>
    );
  }
}
