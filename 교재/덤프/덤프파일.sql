
# 덤프파일 경로
https://github.com/gilbutITbook/006696/tree/master/01%EC%9E%A5%20%ED%99%98%EA%B2%BD%EC%84%A4%EC%A0%95

## note 계정 생성 (system 접속)
ALTER SESSION SET "_ORACLE_SCRIPT" = TRUE;
CREATE USER note IDENTIFIED BY 123456;
ALTER USER note DEFAULT TABLESPACE users;
ALTER USER note QUOTA UNLIMITED ON users;
GRANT dba TO note;

## 덤프파일 import (CMD)
cd 덤프파일 경로
imp note/123456 file=expall.dmp log=expall.log ignore=y rows=y indexes=y full=y
