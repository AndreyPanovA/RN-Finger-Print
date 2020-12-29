import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  AppState, 
  Modal, 
  Button, 
  StyleSheet
} from 'react-native';

// 
import * as LocalAuthentication from 'expo-local-authentication';


// 
 export default class FingerPrintModal extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          modalVisible: true,
          authenticated: false,
          failedCount: 0
      }
      this.setModalVisible = this.setModalVisible.bind(this);
      this.closeModal = this.closeModal.bind(this);
  }

  setModalVisible(visible) {
      this.setState({ modalVisible: visible, failedCount: 0 });
  }

  closeModal() {
      this.setModalVisible(false);
  }

  scanFingerPrint = async () => {
      console.log("scan fingerprint");
      this.setState({ failedCount: 0 });
      try {
          console.log("before results");
          const results = await LocalAuthentication.authenticateAsync();
          console.log("after results");
          if (results.success) {
              this.props.onSuccess(true);
              this.setState({
                  modalVisible: false,
                  authenticated: true,
                  failedCount: 0,
              });
          } else {
              this.setState({ failedCount: this.state.failedCount + 1 });
          }
      } catch (e) {
          console.log(e);
      }
  };

  render() {
      return (
      <Modal
          animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onShow={this.scanFingerPrint}>
              <View style={styles.modal}>
                  <View style={styles.iconView}>
                      {/* <Icon name="fingerprint" type="MaterialIcons" style={styles.icon} /> */}
                      <View style={{ marginTop: 40 }}>
                          <Text style={styles.msgTxt}>Waiting for finger print</Text>
                      </View>
                      {this.state.failedCount > 0 ?
                          <View style={{ marginTop: 40 }}>
                              <TouchableOpacity onPress={this.scanFingerPrint}>
                                  <Text style={[styles.msgTxt, { color: 'red' }]}>Please try again</Text>
                              </TouchableOpacity>
                          </View>
                          :
                          null
                      }
                  </View>
                  <View style={styles.buttonView}>
                {/* <Button rounded style={styles.btn} onPress={this.closeModal}>
                            <Text style={styles.btnTxt}>Cancel</Text>
                        </Button> */}
                    </View>
                </View>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    modal: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconView: {
        flex: 3.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 80,
        color: 'black'
    },
    msgTxt: {
        fontSize: 16,
        color: 'black',
        fontStyle: 'italic'
    },
    buttonView: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        marginBottom: 80
    },
    btnTxt: {
        color: 'white',
        fontSize: 14,
        fontStyle: 'italic'
    }
});