# supertest

## 초기 test
[Success]

1. 유저 객체를 담은 배열로 응답한다
2. 최대 limit 갯수만큼 응답한다

[Fail]

1. limit이 숫자형이 아니면 400을 응답한다
2. offset이 숫자형이 아니면 400을

 ## GET /user/:id test

[success]
1.  id가 1인 유저 객체를 반환

[error]
1. id가 숫자가 아닐 경우 400으로 응답
2. id로 유저를 찾을 수 없을 경우 404로 응답

## DELETE /users/:id

[success]
1. 204를 응답한다

[error]
1. id가 숫자가 아닐 경우 400으로 응답한다