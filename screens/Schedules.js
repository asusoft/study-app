import React from 'react';
import { View, StyleSheet, FlatList, Modal, TouchableOpacity } from 'react-native';
import colours from '../Colors';
import ScheduleList from '../components/ScheduleList';
import tempData from '../tempData';
import AddSCheduleModal from '../components/AddScheduleModal';
import { AntDesign } from "@expo/vector-icons";

export default class Schedule extends React.Component {
  state = {
    addScheduleVisible: false
};

toggleAddScheduleModal() {
    this.setState({ addScheduleVisible: !this.state.addScheduleVisible });
}
  render() {
  return (
    <View style={styles.container}>
      <Modal
          animationType="slide"
          visible={this.state.addScheduleVisible}
          onRequestClose={() => this.toggleAddScheduleModal()}
      >
          <AddSCheduleModal closeModal={() => this.toggleAddScheduleModal()} />
      </Modal>
      <FlatList
          style={styles.scrollContainer}
          data={tempData}
          keyExtractor={item => item.name}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ScheduleList schedule={item} />}
          keyboardShouldPersistTaps="always"
      />   
       <View style={styles.addButton}>
          <View style={{ marginVertical: 48 }}>
              <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddScheduleModal()}>
                  <AntDesign name="plus" size={20} color={colours.white} />
              </TouchableOpacity>
            </View>
      </View>
  </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    marginBottom: 10,
    backgroundColor: '#fafafa',
},

addButton: {
    position: 'absolute',
    right: 20,
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
},

addList: {
    borderWidth: 2,
    backgroundColor: '#14b98b',
    borderColor: '#14b98b',
    width: 60,
    height: 60,
    borderRadius: 50,
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
},
});