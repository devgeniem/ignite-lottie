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

## How to create Lottie animations?

You need [Adobe After Effects](https://www.adobe.com/fi/products/aftereffects.html) and [Bodymovin](https://github.com/airbnb/lottie-web) extension for it.

Beginners guide to getting started, you can find e.g. https://www.appcoda.com/lottie-beginner-guide/

## Basic Lottie usage example in React Native components

```javascript
import React, { Component } from 'react'

// React Native helpers for handling animation
import { Animated, Easing } from 'react-native'

// Component to show Lottie animation
import LottieView from 'lottie-react-native'

// Import lottie animations
import lottieAnimation from '../path/to/files/lottieAnimation.json'

export default class AnimatedComponentExample extends Component {
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
      <LottieView source={lottieAnimation} progress={this.state.progress} />
    )
  }
}
```

In this demo, Lottie JSON data is located to `App/Images/Animations`.

Shortly, you control your Lottie behaviour in your React Native app with [Animated library](https://facebook.github.io/react-native/docs/animated.html) and [Easing module](https://facebook.github.io/react-native/docs/easing.html).