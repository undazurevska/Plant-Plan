import * as React from 'react';
import { Text, View, StyleSheet, Image , Arrow, SafeAreaView} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

export default function CalendarScreen({navigation, route}) {
  const {id, title} = route.params;
  
  return (
     <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      </SafeAreaView>,
<CalendarList
theme={{
    backgroundColor: '#ffffff',
    calendarBackground: '#F1F1F1',
    textSectionTitleColor: '#000',
    todayTextColor: 'green',
    monthTextColor: '#000',
  }}
  onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
  pastScrollRange={0}
  futureScrollRange={5}
  scrollEnabled={true}
  showScrollIndicator={true}
  current={new Date()}
  minDate={'2022-01-01'}
  maxDate={'2025-05-30'}
   onDayPress={day => {
    console.log('day pressed');
    }}
       markedDates={{
    '2022-01-16': {selected: true, marked: true, selectedColor: '#5b7760'},
    '2022-01-23': {selected: true, marked: true, selectedColor: '#5b7760'},
    '2022-02-16': {selected: true, marked: true, selectedColor: '#5b7760'},
    '2022-02-23': {selected: true, marked: true, selectedColor: '#5b7760'},
    '2022-02-09': {selected: true, marked: true, selectedColor: '#5b7760'}
  }}
/>

  );
}
const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}) 
