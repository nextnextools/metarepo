## v0.12.0

* 🌱 npm

* ♻️ update dependencies `@nextnextools/auto-github`, `@nextnextools/auto-slack`, `@nextnextools/auto-tag`, `@nextnextools/auto-telegram`, `@nextnextools/auto-changelog`, `@nextnextools/auto-core`, `@nextnextools/auto-commit-prompt`, `@nextnextools/nextools-browsers-list`, `@nextnextools/nextools-babel-config`

## v0.11.0

* 🌱 fix deps

* ♻️ update dependencies `@nextnextools/auto-changelog`, `@nextnextools/auto-github`, `@nextnextools/auto-commit-prompt`, `@nextnextools/auto-slack`, `@nextnextools/auto-tag`, `@nextnextools/auto-telegram`, `@nextnextools/nextools-babel-config`, `@nextnextools/nextools-browsers-list`, `@nextnextools/auto-core`

## v0.10.0

* 🐣 init again

## v0.9.0

* ♻️ update dependencies `@rebox/android`, `@rebox/ios`, `@nextnextools/nextools-babel-config`, `@rebox/web`, `@x-ray/plugin-chromium-screenshots`, `@x-ray/plugin-react-snapshots`, `@x-ray/plugin-react-native-snapshots`, `@x-ray/core`, `@x-ray/plugin-android-screenshots`, `@x-ray/plugin-ios-screenshots`

## v0.8.1

* 🐞 more lazy imports

## v0.8.0

* 🌱 build `module` type packages using new `buildNodeESM` task

* 🐞 avoid adding `types` field to `package.json` for non-TS packages

* 🐞 skip `buildTypes` task for non-TS packages

* 🐞 skip more unnecessary `package.json` fields when publishing

* ♻️ update dependencies `pkgu`, `@nextnextools/nextools-babel-config`

## v0.7.3

* 🐞 bump `@rebox/web`

* 🐞 use our browsers list in `BuildApp` task factory instead of defaults

* ♻️ update dependencies `@x-ray/core`, `@rebox/web`

## v0.7.2

* 🐞 tweak build types

## v0.7.1

* 🐞 fix test publish task

## v0.7.0

* 🌱 upgrade `caniuse-lite` before publishing packages

  ```
  https://github.com/browserslist/browserslist#browsers-data-updating
  ```

* ♻️ update dependencies `@nextnextools/auto-core`

## v0.6.4

* 🐞 test Node.js-target build artifacts

## v0.6.3

* 🐞 refactor using new deps

* ♻️ update dependencies `dleet`

## v0.6.2

* 🐞 refactor using new deps

* ♻️ update dependencies `@rebox/android`, `@rebox/ios`, `@start/plugin-copy`, `@start/plugin-write`, `@x-ray/core`

## v0.6.1

* 🐞 🐞 refactor using new deps

* ♻️ update dependencies `tsfn`, `@start/reporter-verbose`, `fixdeps`, `@nextnextools/auto-changelog`, `@nextnextools/auto-commit-prompt`, `@nextnextools/auto-core`, `@nextnextools/auto-tag`, `@rebox/ios`, `@rebox/android`, `@start/plugin-lib-typescript-check`

## v0.6.0

* 🌱 add `dupdep` task and run it with `ci`

## v0.5.0

* 🌱 add `RunApp` and `BuildApp` task factories

* 🐞 skip replacing content of binary files in `pkg` task

* ♻️ update dependencies `@rebox/ios`, `@start/plugin-concurrent`

## v0.4.0

* 💥 drop Node.js v10

* 🐞 fix build of packages without any entry points

* ♻️ update dependencies `@nextnextools/nextools-babel-config`, `copie`, `dleet`, `fixdeps`, `move-path`, `pifs`, `rplace`, `stroki`, `tsfn`, `typeon`, `weslint`, `@nextnextools/auto-changelog`, `@nextnextools/auto-commit-prompt`, `@nextnextools/auto-github`, `@nextnextools/auto-core`, `@nextnextools/auto-slack`, `@nextnextools/auto-tag`, `@nextnextools/auto-telegram`, `@start/plugin`, `@start/plugin-find`, `@start/plugin-copy`, `@start/plugin-env`, `@start/plugin-input-files`, `@start/plugin-lib-babel`, `@start/plugin-lib-eslint`, `@start/plugin-lib-istanbul`, `@start/plugin-lib-tape`, `@start/plugin-lib-typescript-check`, `@start/plugin-lib-typescript-generate`, `@start/plugin-overwrite`, `@start/plugin-parallel`, `@start/plugin-read`, `@start/plugin-remove`, `@start/plugin-rename`, `@start/plugin-sequence`, `@start/plugin-write`, `@start/reporter-verbose`, `@x-ray/core`, `@x-ray/plugin-chromium-screenshots`, `@x-ray/plugin-android-screenshots`, `@x-ray/plugin-ios-screenshots`, `@x-ray/plugin-react-native-snapshots`, `@x-ray/plugin-react-snapshots`

## v0.3.3

* 🐞 fix show `fixDeps` error stacktrace

* ♻️ update dependencies `fixdeps`

## v0.3.2

* 🐞 update `auto/core`

* ♻️ update dependencies `@nextnextools/auto-commit-prompt`, `@nextnextools/auto-changelog`, `@nextnextools/auto-github`, `@nextnextools/auto-slack`, `@nextnextools/auto-tag`, `@nextnextools/auto-telegram`, `@nextnextools/auto-core`

## v0.3.1

* 🐞 lint `.tsx` files in `tasks/`

* ♻️ update dependencies `@start/plugin-lib-babel`, `@nextnextools/nextools-babel-config`

## v0.3.0

* 🐞 cleanup deps

* ♻️ update dependencies `@x-ray/plugin-ios-screenshots`, `@x-ray/plugin-android-screenshots`, `@x-ray/core`, `@x-ray/plugin-chromium-screenshots`, `@x-ray/plugin-react-snapshots`, `@x-ray/plugin-react-native-snapshots`

## v0.2.6

* 🐞 upgrade ESLint stuff

* ♻️ update dependencies `weslint`, `@start/plugin-lib-eslint`

## v0.2.5

* 🐞 add `react-native-exception-handler`

* ♻️ update dependencies `@x-ray/native-screenshots-app`

## v0.2.4

* 🐞 copy `.d.ts` files from `src/` as is in `buildType` task

## v0.2.3

* 🐞 upgrade escape-string-regexp to v3

* ♻️ update dependencies `@rebox/web`, `@nextnextools/auto-core`, `@nextnextools/auto-commit-prompt`, `@start/reporter-verbose`, `@rebox/android`, `@rebox/ios`

## v0.2.2

* 🐞 refactor using updated `start/plugin-lib-typescript-generate`

* ♻️ update dependencies `@start/plugin-lib-typescript-generate`

## v0.2.1

* 🐞 refactor using new Babel configs

* ♻️ update dependencies `@rebox/web`, `@nextnextools/nextools-babel-config`

## v0.2.0

* 💥 upgrade `react-native-svg` to v12

* 🐞 refactor using new rebox API

* 🐞 sync React Native and React versions

* ♻️ update dependencies `@nextnextools/nextools-babel-config`, `@nextnextools/auto-core`, `@x-ray/chrome-perf-snapshots`, `@x-ray/chrome-screenshots`, `@x-ray/firefox-screenshots`, `@x-ray/snapshots`, `@rebox/web`, `@x-ray/common-utils`, `@x-ray/web-mobile-screenshots`, `@rebox/android`, `@rebox/ios`

## v0.1.1

* 🐞 drop "web" extensions and build types into `build/types/`

* ♻️ update dependencies `tsfn`

## v0.1.0

* 🐣 init
