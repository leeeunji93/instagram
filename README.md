#### instagram clone 


궁금증

- router 
- 폰트어썸 적용
- 헤더 고정
- 아이디 비밀번호 유효성 검사
- Link 태그는 css 먹통
- strong 태그가 안먹힘
- rem은 * 로 되는게 아닌가? 왜 안먹히지
- 세가지 요소를 아래 정렬 하려면? 
- 그리드
 - grid-template-row :1fr 해줄때는 height값을 꼭 지정해줘야함 그리드는 height가 없으니까!
 
 ```css
 .pic{
     grid-template-columns: repeat(3,300px); //이때 상자의 height값은 font-size 만큼
     grid-template-columns: auto 200px; //늘릴만큼 늘리고 나머지는 200px
        /*4개의 상자를 만들건데 창 전체를 채워서 fr=사용 가능한 공간임 그리드 width값을 주면 거기에 맞춰서 fr가 바*/
     grid-template-columns: repeat(4,1fr); 
        //만약 1번 상자를 다른거보다 4배 이상 키우고 싶다~ 하면 
     grid-template-columns: 4fr 1fr 1fr 1fr
  
 }
 ```

 - 만약에 지정해준 개수보다 더 많이 생긴다면 auto 기능 사용
 -  minmax : 가능하면 엄청 컸으면 좋겠는데 또 엄청 작아지진 않았으면 좋겠어..
 
 ```css
.pic{
    grid-template-columns: repeat(3,minmax(100px,1fr));// 100px 최소 1fr 맥
}
```
 - 반응형을 만들기 위해선 auto-fit auto-fill . auto-fill은 화면에 맞춰 해당 row를 채우는거임(빈걸로라) column 수만, auto-fit은 해당 사이즈에 맞춰 딱 맞춤. 늘려서라도
 - min-content max-content 컨텐츠에 따라 커지고 작아지기가 가능하다
