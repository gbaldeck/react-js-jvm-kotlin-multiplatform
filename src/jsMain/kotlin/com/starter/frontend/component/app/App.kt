package com.starter.frontend.component.app

import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.div
import kotlinext.js.require

private class App: RComponent<RProps, RState>() {
    //tells webpack to load the SASS file as a module and uses the `Components` alias we setup in 
    //webpack.common.js so we don't have to type out the whole path to the file
    init { require("Components/app/App.scss") } 

    override fun RBuilder.render() {
        div(classes = "bm-app") {
            + "Hello Kotlin-React!!!"
        }
    }

}

fun RBuilder.app() = child(App::class) {}
