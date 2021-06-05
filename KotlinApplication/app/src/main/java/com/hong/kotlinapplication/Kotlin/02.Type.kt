package com.hong.kotlinapplication.Kotlin

// 02. 자료형
// 정수형 -> Long > Int > Short > Byte
// 실수형 -> Double > Float
// 문자 -> Char
// 문자열 -> String
// 논리형 (참 true / 거짓 false)-> Boolean

// 변수 선언하는 방법 (1)
// Variable / Value 변수명 = 값
// var / val 변수명 = 값

var number = 10


// 변수 선언하는 방법 (2) *권장 ; 자료형을 적어줘야 헷갈리지 않는다*
// var / val 변수 : 자료형 = 값
var number1 : Int = 20
var hello1 : String = "Hello"
var point1 : Double = 3.4

// Variable or Value?
// - 1. 변하지 않는 값이라면 Value
// - 2. 변동될지도 모른다면 -> 일단 Value로 해놓고 나중에 Variable로 바꾸는 게 좋다
//      고는 하는데 나는 잘 모르겠다.

fun main(array: Array<String>) {
    number = 20
//    number = 20.5 -> 자료형이 다르기 때문에 오답
}