package com.hong.kotlinapplication.Kotlin

var a = 1 + 2 + 3 + 4 + 5
var b = "1"
var c = b.toInt()
var d = b.toFloat()

var e = "John"
var f = "My name is $e Nice to meet you"
// Null
// 존재하지 않는다.

//var abc: Int = null

var abc1 : Int? = null // null을 가질 수 있는 자료형이 된다.
var abc2 : Double? = null // null을 쓴다고 해서 문자인 "null"이 되는것은 아니다.

var g = a + 3


fun main(array: Array<String>) {
    println(a)
    println(b)
    println(c)
    println(d)
    println(f)
    println(abc1)
    println(g)
}