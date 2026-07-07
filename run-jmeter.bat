@echo off
ping 127.0.0.1 -n 6 > nul
if exist jmeter-results.jtl del jmeter-results.jtl
if exist jmeter-report rmdir /s /q jmeter-report
"C:\Users\hisya\Desktop\apache-jmeter-5.6.3\bin\jmeter.bat" -n -t adaptive-learning-devops.jmx
-l jmeter-results.jtl -e -o jmeter-report