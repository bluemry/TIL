# HTML
 - [의미](#의미와-목적성-필요성)
 - [구성과 구조](#html의-구성과-구조)
 - [요소 분류 : meta, 문서, 멀티, 폼](#요소태그-종류와-이해)
 - [요소 파헤치기](#요소태그-파헤치기)
   - [head, 메타요소](#head-및-메타-데이터)
   - [하이퍼링크](#하이퍼링크)
   - [고급 텍스트 서식](#고급텍스트-서식)

## 의미와 목적성, 필요성
 - HTML이란? (Hyper Text Markup Language) :<br>
  `웹 페이지의 구조를 정의하는 마크업 언어` <br>
    <br> <details> <summary>마크업 언어란?</summary>
  : `태그`를 이용하여 `문서나 데이터의 구조`를 명시하는 언어.<br>
  DOM 트리를 생각해보면, css든 js든, 이 HTML 구조 위에서 작용하는 것.</details>

 - 웹 호스팅에서의 역할.

## HTML의 구성과 구조

- 구성 : 요소 > 태그, 속성, 내용<br>
 여러개의 태그`요소(element)`와 그 중첩으로 이루어져 있다.(tree 구조)

  - `요소`는 `속성(attribute)`을 가질 수 있다.
    - `속성`은 속성과 속성값으로 이루어져있다. (키 - 값의 느낌)
  - `태그`는 `내용(content)`을 가질 수 있다.

  - 예시 1 : html에서 요소 표현.

  ```html
  <body style="background-color : red;">
    내용
    <p>dd</p>
  </body>

  > 저 내용 전체를 `요소`라고 한다. > 태그는 여는 태그
  <body ~>
    와 닫는 태그
  </body>
  로 이루어져있다. > `style="background-color : red;"는 속성에 해당된다. (속성 =
  "속성값") > 여는 태그와 닫는 태그 사이의 `내용`은 `content`에 해당된다.
  ```

  - 예시 2 : tree 구조로 살펴보는 html 전체 구조

  ```javascript
  element = {      // 요소(element)
    tag : "body",  // 태그 : 어떤 태그element인지, 즉 body태그
    attribute : {  // 속성(attribute)
      style : ~,   // style 속성이 있다.== <body style="~">
    },
    chilren : [
      {
        text : "내용"
      },
      {
        tag : "p",    // 자식 요소인 <p>dd</p>
        text : "dd"
      }
    ]

  }
  ```
---
## 요소(태그)의 5가지 분류.
> 개인적 기준 (구조화 / 콘텐츠 / 임베디드 / 폼 / 리소스 )

 - 구조화 및 레이아웃 요소
   - div, header, main, footer, nav, section...
   - ul, ol

 - 콘텐츠 요소
   - 텍스트
   - a, img, canvas, ...
 - 임베디드 요소
   - 멀티미디어 : img, audio, video, iframe, embeded
   - link
 - 폼 요소 : 사용자의 입력을 받는
   - form
   - 위젯 : radio, button, ...
 - 리소스 및 스타일링
   - link, script, style
  <br><br>
- 그 외
   - 루트 요소 : html
   - meta
   - doctype
   - head

---
## 요소(태그) 파헤치기
 ### head 및 메타 데이터 요소
  : 페이지에 표시되지 않는, 문서에 대한 설명 (메타데이터)
  - 검색결과나 북마크 등에 사용되는 것들이 많다 (meta > name,content / OGP)

  - title : 상단 탭 타이틀.

  - meta
    - charset : 문자 인코딩 지정
    - name / content : 검색엔진 최적화와 관련.
      - [Open Graph Protocol](https://eun-jee.com/post/cs/01-open_graph/) vs schema.org

  - link
    - 파비콘(gif, png, ico) > 컴퓨터 상단 탭뿐만 아니라,, CSS
  - script
    - 속성 - defer 
      > defer는 html이 모두 완료된 뒤에 js가 로드되도록 지시하는 것

      ```<script src="~" defer></script>```

  - `<html lang="">`
    - 언어가 설정되면, 검색엔진에서 효과적 / 시각 장애인

 ### 텍스트 구조 요소
   - heading(h1, h2, ..., h6), p
     - SEO 영향

   - 리스트 : ul, ol
   - 강조 : em (emphasis), strong, 

 ### 하이퍼링크
   - a : 텍스트뿐 아니라, 이미지도
     - 문서 특정 지역으로 이동가능. (md처럼)
      - 속성_download :링크 클릭시
      - mailto: 
      ```<a href="mailto:kim@mozilla.org">클릭시 kim에게 메일 보내기가</a>```
        - 쿼리로 cc(참조), subject(제목), body(내용)도 넣을 수 있다.

  ### 고급텍스트 서식
  - dl(description list) : 설명 목록
    - 구조 : dl - dt(term) - dd(define)
    - 특징 : 들여쓰기 등 기본적 스타일링 (질문- 답변, 용어 설명등에 용이)

   - blockquote : 인용

   - abbr : 약어
     - 속성으로 title을 넣으면 마우스 호버시 원형이 나타남
     ```<abbr title="Hyper Text Markup Language">HTML</abbr>```<br>
     결과물 : <abbr title="Hyper Text Markup Language">HTML</abbr>
    
  - address : 시멘틱 의미에서
  - code(코드), pre(코드블록)
  - time : 마찬가지로 시멘틱 의미. 기계를 위한.