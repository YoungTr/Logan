#!/bin/bash
echo "------------------start build------------------"
./gradlew :app:assembleDebug
echo "------------------build finish------------------"
echo "------------------start install------------------"
adb install -r ./app/build/outputs/apk/debug/app-debug.apk
adb shell am start -n test.logan.dianping.com.logan/test.logan.dianping.com.logan.MainActivity
