package com.starter.frontend.component.app

import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.div
import kotlinext.js.require

private class App: RComponent<RProps, RState>() {
    init { require("Components/app/App.scss") }

    override fun RBuilder.render() {
        div(classes = "bm-app") {
            + "Hello Kotlin-React!!!"
        }
    }

}

fun RBuilder.app() = child(App::class) {}