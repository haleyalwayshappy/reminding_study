# 코틀린 공부 시작

Kotlin
- 2016년에 정식 버젼 발표 2017년에 안드로이드 공식 지원언어로 채택되었다.

장점
- 문법이 간결하며, 표현력이 좋다.
- Null safe 언어이다.
- 기존 라이브러리와 상호 운용성이 좋다. ( 자바와 100% 호환 가능)


01. Variable -> 변수
    상자! 이것저것 넣고 빼고가 용이한것
        - 내 마음대로 원하는 것을 넣을 수 있는 상자 -> Variable
        - 한번 넣으면 바꿀 수 없는 상자 -> Value
    변수 선언 하는 방법
        var/val 변수명(상자) = 값 ( 넣고싶은 것 )
        Variable/Value


02. 자료형
    정수형 -> Long > Int > Short > Byte
    실수형 -> Double > Float
    문자 -> Char
    문자열 -> String
    논리형 (참 true / 거짓 false)-> Boolean

  변수 선언하는 방법 (1)
    Variable / Value 변수명 = 값
    var / val 변수명 = 값

    var number = 10


  변수 선언하는 방법 (2) *권장 ; 자료형을 적어줘야 헷갈리지 않는다*
    var / val 변수 : 자료형 = 값
      var number1 : Int = 20
      var hello1 : String = "Hello"
      var point1 : Double = 3.4

 Variable or Value?
    1. 변하지 않는 값이라면 Value. 
    1. 변동될지도 모른다면 -> 일단 Value로 해놓고 나중에 Variable로 바꾸는 게 좋다</br>
      고는 하는데 나는 잘 모르겠다.

04. Function
    - 함수
    - 어떤 Input을 넣어주면 어떤 output 나오는 것
    - y = x + 2

    - 함수를 선언하는 방법
      fun 함수명 (변수명 : 타입, 변수명 : 타입 ---) : 반환형 {</br>
      함수  내용</br>
      return 반환값</br>
      }
    
