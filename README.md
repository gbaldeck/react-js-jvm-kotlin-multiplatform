
####Intro

This is a multiplatform project developed with the Kotlin 1.3.0-rc-146 Gradle plugin for IntelliJ. So will only need minor updates once Kotlin 1.3 is released. Many Kotlin developers have been struggling with multiplatform Kotlin used with React and Webpack. I created this starter to help with that.

It is setup with custom webpack configuration files (webpack.common.js, webpack.dev.js, webpack.prod.js) that I have commented for better understanding of what the config files do. I have also commented some of build.gradle.

I have left the multiplatform sample files so that you can still see examples of how to do multiplatform development.

I haven't added any frameworks for the JVM side of things, so that is open to whatever you would like to use.

####Kotlin/JS Module

First run:
> npm install

Then the Gradle task:
> gradlew runDceJsKotlin

Then for webpack dev-server do:
> npm run serve

For production build do:
> npm run prod-build

While the dev server is running you can run the `runDceJsKotlin` gradle task and it will automatically pick up the emitted Kotlin/JS files.

The builds include JS source maps for the Kotlin/JS files as well. So you can setup a run configuration in IntelliJ to debug in the IDE or you can debug in dev tools, whichever you prefer.