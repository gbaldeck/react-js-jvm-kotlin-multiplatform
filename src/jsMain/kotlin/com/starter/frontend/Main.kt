package com.starter.frontend

import com.starter.frontend.component.app.app
import react.dom.render
import kotlin.browser.document

fun main(args: Array<String>) {
    render(document.getElementById("root")) {
        app()
    }
}