안드로이드 기기의 이미지들을 불러오는 코드입니다.

react-native의 CameraRoll을 이용하면 쉽게 구현될줄 알았으나, react-native는 버전이 올라갈 수록 스스로 제공하는 Component, API를 많이 간소화하고 있어 현재 자체적으로 제공하는 CameraRoll을 이용할 수 없었습니다.

![image](https://user-images.githubusercontent.com/48580444/180912974-0343af6e-f39d-4055-b869-9d78a34250e5.png)
<br/> 대용할 수 있는 라이브러리의 링크가 있어 해당 라이브러리를 이용했습니다.

https://github.com/react-native-cameraroll/react-native-cameraroll
해당 링크의 매뉴얼대로 라이브러리를 적용시킨 후
<br/>
react-native에서 제공하는 PermissionsAndroid의 READ_EXTERNAL_STORAGE의 접근 권한을 허용하여 기기의 갤러리에 접근 할 수 있었습니다.
<br/>
![KakaoTalk_20220726_115809330_02](https://user-images.githubusercontent.com/48580444/180913836-6b11095c-aba9-409e-98cc-cf572e13d0a8.jpg)
![KakaoTalk_20220726_115809330_01](https://user-images.githubusercontent.com/48580444/180913833-a02e9d4d-7896-4946-a08e-e413761d8ae0.jpg)

