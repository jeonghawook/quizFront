
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
    <td><strong>HTTPS</strong></td>
    <td> - SSL/TSL 발급을 통하여 도메인에 보안성 강화 <br />
   </td>
  </tr>
  <tr>
    <td><strong>MongoDB</strong></td>
    <td> -personal을 제외한 Collections의 모든 데이터를 가져오기 때문에 relatonal 한게 없어서 사용<br />
- 추후 한정되어있는 schema가 아닌 좀 더 유연한 데이터를 다루기 위해 + aggregation에 강하다기에 사용해보고 싶어서</td>
  </tr>
  <tr>
    <td><strong>Redis</strong></td>
    <td>- JWT RefreshToken의 관리의 편의성<br />
- 추후 자주 사용되는 부분을 캐싱하거나 db에 자주 조회되서 cost가 많이 발생하는 부분을 redis로 해결</td>
  </tr>
   <tr>
    <td><strong>CI/CD</strong></td>
    <td>- 개발 환경과 운영 환경 사이의 차이를 최소화 해주는 DOCKER CD로 선정<br />
- Githbub Action/ 다른 CI 보다 러닝커브가 낮고 편리하게 관리가능</td>
  </tr>
  <tr>
    <td><strong>Bcrypt</strong></td>
    <td>- 다양한 보안중 brute force에 대응하기 위해 선정<br />
 </td>
  </tr>
    <tr>
    <td><strong>MySQL</strong></td>
    <td>- 유저에 대한 정보는 relational 할 예정<br />
      - 틀린 문제 / 유저 프로필 연결 예정
 </td>
  </tr>
</table>

★ [선택에 자세한 이유 !](https://velog.io/@saro3/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-FlashCard)

## **트러블슈팅** 
<details>
<summary>ERD</summary>
<br>
<img src="https://github.com/jeonghawook/quiz/assets/126029736/827d674d-f572-46fb-b69b-6cfc3d6cf578">
</details>

<details>
<summary>ERD</summary>
<br>
<img src="https://github.com/jeonghawook/quiz/assets/126029736/827d674d-f572-46fb-b69b-6cfc3d6cf578">
</details>

<details>
<summary>ERD</summary>
<br>
<img src="https://github.com/jeonghawook/quiz/assets/126029736/827d674d-f572-46fb-b69b-6cfc3d6cf578">
</details>

## **FE에서 화면 보기**
 [BACKEND GIT으로 바로가기 ! ](https://github.com/jeonghawook/quiz)
