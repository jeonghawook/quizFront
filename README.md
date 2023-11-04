
# **FLASHCARD 프로젝트** 
</br>
<strong> 소개: 플래시카드를 모바일에서 사용 (내가 필요해서 만든 앱) </strong>
</br>
<br>
<details>
<summary>ERD</summary>
<br>
<img src="https://github.com/jeonghawook/quiz/assets/126029736/827d674d-f572-46fb-b69b-6cfc3d6cf578">
</details>


## **아키택처**
<img src="https://github.com/jeonghawook/quiz/assets/126029736/cdc57279-d1f1-4131-a8e5-14e56f7b1a22">

## **기술 스텍**
<table>
 <tr>
    <td>HTTPS</td>
    <td> - SSL/TSL 발급을 통하여 도메인에 보안성 강화 <br />
   </td>
  </tr>
  <tr>
    <td>React-Native-Auto-Size-Text</td>
    <td>- 한 카드에 모든 글자들이 한눈에 보이도록 하기 위해 선택<br />
 </td>
  </tr>
    <tr>
    <td>react-native</td>
    <td>- 자체 MODULE 과 외부 모듈의 다향성<br />
      - reactJs에 익숙하며, 빠르게 만들고 싶어서 선택
 </td>
    </tr>
     <tr>
    <td>react-native-reanimated</td>
   <td>- 움직임과 다양한 설정을 다루기 위해 선택 </td>
  </tr>
 <tr>
  <td>ZUSTAND</td>
 <td> - REDUX RECOIL 보다 가볍고 보다 관리하기 쉬움. 러닝커브가 낮다<br>
- 무엇보다 리덕스의 PERSIST 부분에서 렌더링이 완료 후 실행 부분이 없다</td>
 </tr>
</table>

## **트러블슈팅** 
<details>
<summary>AXIOS ERROR</summary>
<br>
<p>일주일 동안 고민하게 만든 https. 리액트 네이티브는 http가 아닌 https 로 통신한다. <br>
 로그에서 ReactNativeJS ▶︎ [AxiosError: Network Error] 딱 이 한줄로 에러가 뜬다.  <br>
 더 자세한 설명이 없었다. 혹시 cors에러가 아닐까,  <br>
 수 많은 에러를 찾는중 뜬금없이 전 프로젝트에서 geolocation은 https에서만 사용할수 있는게 떠올랐다.  <br>
 그래서 http로 통신할수 있는 "usesCleartextTraffic": true 사용해보고 실패. 마지막에 최후의 https 로 설정하고 통신했더니 성공했다. <br>
 (*경험이 중요하긴하다)</p>
</details>

<details>
<summary>ZUSTAND IN REACT NATIVE</summary>
 <br>
 <p>storage:createJSONStorage(()=> AsyncStorage) 웹과 설정 법이 달라서 많은 시간을 투자했던 부분이다. </p>
</details>

<details>
<summary>REACT NATIVE 그 자체</summary>
<br>
<p> </p>
</details>

## **FE에서 화면 보기**
 [BACKEND GIT으로 바로가기 ! ](https://github.com/jeonghawook/quiz)
