import React, { Component } from 'react'
import { View, ScrollView, Text, Animated, Easing } from 'react-native'
import LottieView from 'lottie-react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

// Lottie animations
import whys from '../Images/Animations/whys.json'
import anubis from '../Images/Animations/anubis.json'

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: new Animated.Value(0),
      dog: new Animated.Value(0),
    }
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.progress, {
        toValue: 1,
        duration: 500,
        easing: Easing.cubic,
      })
    ).start()

    Animated.loop(
      Animated.timing(this.state.dog, {
        toValue: 1,
        duration: 2500,
        easing: Easing.linear,
      })
    ).start()    
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <LottieView style={styles.section} source={whys} progress={this.state.progress} />
          <LottieView style={styles.section} source={anubis} progress={this.state.dog} />
        </ScrollView>
      </View>
    )
  }
}
