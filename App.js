/* eslint-disable react/jsx-no-undef */
import React, {useRef} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import Video from 'react-native-videos';
import imagespath from './assets/imagespath';

const App = () => {
  const videoRef = useRef(null);

  const onBuffer = Error => {
    console.log('buffering....', Error);
  };

  const onError = Error => {
    console.log('Error raised', Error);
  };
  return (
    <>
      <View style={styles.backgroundview}>
        <Video
          source={{
            uri: 'https://drive.google.com/file/d/1XI3Eoj3d9kcom3FRqjatvs2CXqjuM10y/view?usp=share_link',
          }}
          poster="https://drive.google.com/file/d/1uYNuZbD18fmxFRGAugk2S-Jor3_EYFVb/view?usp=share_link"
          posterResizeMode="cover"
          ref={videoRef}
          resizeMode="cover"
          onBuffer={onBuffer}
          onError={onError}
          style={styles.backgroundVideo}
        />
      </View>
      <SafeAreaView style={{paddingHorizontal: 16}}>
        <View styles={styles.flexDirection}>
          <Text styles={styles.textStyle}>Reels</Text>
          <Image style={{tintColor: 'white'}} source={imagespath.icCamera} />
        </View>
        ;
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backgroundview: {
    flex: 1,
    backgroundColor: 'black',
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
  },
});

export default App;
