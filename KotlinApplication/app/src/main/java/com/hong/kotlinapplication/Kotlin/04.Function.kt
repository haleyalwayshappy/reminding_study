package com.hong.kotlinapplication.Kotlin


/** 04. Function
- 함수
- 어떤 Input을 넣어주면 어떤 output 나오는 것
- y = x + 2

- 함수를 선언하는 방법
fun 함수명 (변수명 : 타입, 변수명 : 타입 ---) : 반환형 {
함수  내용
return 반환값
}
 */

fun plus(first: Int, second: Int): Int {
    val result: Int = first + second
    return result
}

fun main(array: Array<String>) {
// 함수를 호출 하는 방법
    val result = plus(34, 45)
    println(result)
// 인수를 명시적으로 전달하는 방법
    val result2 = plus(first = 20, second = 45)
    println(result2)
// 순서를 바꿀 수도 있다.
    val result3 = plus(second = 40, first = 41)
    println(result3)
}