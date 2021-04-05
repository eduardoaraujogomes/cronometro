import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      text: 'GO',
      lastTime: null
    };
    //Variável do timer do relógio
    this.timer = null;

    this.go = this.go.bind(this);
    this.reset = this.reset.bind(this);
  }
  go() {
    if (this.timer !== null) {
      //Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ text: 'GO' });
    } else {
      this.timer = setInterval(() => {
        this.setState({ number: this.state.number + 0.1 });
      }, 100);

      this.setState({ text: 'STOP' });
    }
  }

  reset() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      lastTime: this.state.number,
      number: 0,
      text: 'GO'
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/cronometro.png')}
          style={styles.chronometer} />

        <Text style={styles.timer}>{this.state.number.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.go}>
            <Text style={styles.btnText}>{this.state.text}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.reset}>
            <Text style={styles.btnText}>RESET</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lastArea}>
          <Text style={styles.textLastArea}>
            {this.state.lastTime > 0 ? 'Ultimo tempo: ' + this.state.lastTime.toFixed(1) + 's' : ''}</Text>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00AEEF'
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00AEEF'
  },
  lastArea: {
    marginTop: 40,
  },
  textLastArea: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }
});

export default App;