#  React Native Lottie Demo

## How to Setup

**Step 1:** clone this repo and go to cloned repo `cd ignite-lottie`

**Step 2:** Install the Application with `yarn` or `npm i`

## How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`

## Basic Lottie usage example in components

```javascript
import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Animated, Easing } from 'react-native'
import LottieView from 'lottie-react-native'

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: new Animated.Value(0),
    }
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start()
  }

  render () {
    return (
      <LottieView source={require('../path/to/files/lottieAnimation.json')} progress={this.state.progress} />
    )
  }
}
```

In this demo Lottie json data are located to `App/Images/Animations`.