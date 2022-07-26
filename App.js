import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  PermissionsAndroid,
  Dimensions
} from 'react-native';

import CameraRoll from '@react-native-community/cameraroll';

const SCREEN_WIDTH = Dimensions.get('window').width;
const PADDING = 6;
const IMAGE_MARGIN = 3;
const SUB = (PADDING * 2 + IMAGE_MARGIN * 6) / 3;

// 이미지 3개씩 배치하기 위한 연산
const IMAGE_SIZE = SCREEN_WIDTH / 3 - Math.ceil(SUB);

const IMAGE_NUM = 30;

const App = () => {
  const [images, setImages] = React.useState(null)
  async function requestGrant() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "갤러리 접근 권한 요청",
          message:
            "갤러리 접근 권한이 필요합니다." +
            "접근 권한을 허용 하시겠습니까?",
          buttonNegative: "거부",
          buttonPositive: "허용"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
        getImage()
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  async function getImage() {
    try {
      const result = await CameraRoll.getPhotos({
        first: IMAGE_NUM,
        assetType: 'Photos',
      });
      setImages(result.edges);
    } catch (e) {
      console.log(e)
    }
  }

  React.useEffect(() => {
    requestGrant();
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.scrollInnerView}>
          {images && images.map((p, i) => {
            return (
              <Image
                key={`image_${i}`}
                style={styles.imageStyle}
                source={{ uri: p.node.image.uri }}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: PADDING,
  },
  buttunContainer: {
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    backgroundColor: '#fff',
    justifyContent: 'space-around'
  },
  scrollContainer: {
    flex: 1,
  },
  scrollInnerView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageStyle: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    margin: IMAGE_MARGIN,
  }
});

export default App;
