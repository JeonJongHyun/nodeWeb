#1. nodeWeb
node.js angular.js oracle Project

[해당 개발자의 GITHUB 개발 항목을 참조하였습니다. (refer to the original)](https://github.com/sahat/tvshow-tracker)


Oracledb install
linux install is easy..
but, window is difficult...
PATH...

# 2.window oracledb install ready ~~!  32Bit
1.node.js x86

2.python

3.visual studio

4.git

5.Oracle Instant Client (32bit)



#3.after.. PATH setting


@Oracle Instant Client setting..

- set OCI_LIB_DIR=C:\oracle\instantclient\sdk\lib\msvc

- set OCI_INC_DIR=C:\oracle\instantclient\sdk\include


@when MSbuild error occur..  setting

- SET PATH=C:\Program Files (x86)\MSBuild\12.0\Bin;%PAT


#4.oracledb install complete

@when error occur..

Error: The specified procedure could not be found.

Oracle Instant Client PATH setting

- set PATH=C:\oracle\instantclient\vc12;%PATH%

- set PATH=C:\oracle\instantclient;%PATH%


@when error occur..

ORA-12154: TNS:could not resolve the connect identifier specified

Oracle HOME PATH setting

- set ORACLE_HOME=C:\oracle\network

complete
