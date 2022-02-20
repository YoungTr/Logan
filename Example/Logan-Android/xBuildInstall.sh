#!/bin/bash
./gradlew :app:iD
adb shell am start -n test.logan.dianping.com.logan/test.logan.dianping.com.logan.MainActivity
