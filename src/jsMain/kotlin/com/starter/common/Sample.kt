package com.starter.common

actual class Sample {
    actual fun checkMe() = 12
}

actual object Platform {
    actual val name: String = "JSLAND2"
}