import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import JPushModule from 'jpush-react-native'

export default class App extends React.Component {
  componentWillUnmount() {
    JPushModule.removeReceiveCustomMsgListener()
    JPushModule.removeReceiveNotificationListener()
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      // JPushModule.setBadge(0)
      JPushModule.getBadge(console.log)
    } else {
      JPushModule.notifyJSDidLoad(console.log)
    }

    JPushModule.addReceiveOpenNotificationListener(map => {
      console.log('Opening notification!')
      //自定义点击通知后打开某个 Activity，比如跳转到 pushActivity
      // this.props.navigator.jumpTo({name: "pushActivity"})
    })

    JPushModule.addReceiveNotificationListener(map => {
      console.log('alertContent: ' + map.alertContent)
      console.log('extras: ' + map.extras)
      // var extra = JSON.parse(map.extras);
      // console.log(extra.key + ": " + extra.value);
    })

    JPushModule.addReceiveCustomMsgListener(map => {
      console.log('alertContent: ' + map.alertContent)
      console.log('extras: ' + map.extras)
      // var extra = JSON.parse(map.extras);
      // console.log(extra.key + ": " + extra.value);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
