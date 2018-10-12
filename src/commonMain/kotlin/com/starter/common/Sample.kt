package com.starter.common

expect class Sample() {
    fun checkMe(): Int
}

expect object Platform {
    val name: String
}

fun hello(): String = "Hello from ${Platform.name}"

fun samplePrint(): String = "Awesome sauce ${Sample().checkMe()}"