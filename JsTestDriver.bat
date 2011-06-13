rem Usage: JsTestDriver.bat TestName
rem		 where TestName is a directory and points to TestName/TestName.conf.

java -jar lib/JsTestDriver-1.2.2.jar --config "%1/%1.conf" --browser "C:\Program Files\Internet Explorer\iexplore.exe" --tests all --port 8081