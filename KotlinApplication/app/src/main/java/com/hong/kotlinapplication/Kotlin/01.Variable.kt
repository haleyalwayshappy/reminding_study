package com.hong.kotlinapplication.Kotlin

// 01. Variable -> 변수
// 상자! 이것저것 넣고 빼고가 용이한것
//      - 내 마음대로 원하는 것을 넣을 수 있는 상자 -> Variable
//        - 한번 넣으면 바꿀 수 없는 상자 -> Value
// 변수 선언 하는 방법
// var/val 변수명(상자) = 값 ( 넣고싶은 것 )
// Variable/Value

var num = 10
var hello = "hello"
var point = 3.4

val fix = 20


fun main(args: Array<String>) {

    println(num)
    println(hello)
    println(point)
    println(fix)

    num = 100
    hello = "Good bye"
    point = 10.4
    println(num)
    println(hello)
    println(point)
    println(fix)

}