
## Intro

This is a multiplatform project developed with the Kotlin 1.3.0-rc-146 Gradle plugin for IntelliJ, but you can use whatever IDE you would like since it comes with the gradle wrapper. Also, since this is build with the Kotlin 1.3 Release Candidate, it will only need minor updates once Kotlin 1.3 is released. I created this starter to help Kotlin developers with multiplatform Kotlin JS/JVM used with React and Webpack.

It is setup with custom webpack configuration files (webpack.common.js, webpack.dev.js, webpack.prod.js) that I have commented for better understanding of what the config files do. I have also commented some of build.gradle.

I have left the multiplatform sample files so that you can still see examples of how to do multiplatform development.

I haven't added any frameworks for the JVM side of things, so that is open to whatever you would like to use.

## Kotlin/JS Module

First run:
> npm install

Then the Gradle task:
> gradlew runDceJsKotlin

Then for webpack dev-server do:
> npm run serve

For production build do:
> npm run prod-build

While the dev server is running you can run the `runDceJsKotlin` gradle task and it will automatically pick up the emitted Kotlin/JS files.

The builds include JS source maps for the Kotlin/JS files as well. So you can setup a run configuration in IntelliJ to debug in the IDE or you can debug in your favorite browser's dev tools, whichever you prefer.