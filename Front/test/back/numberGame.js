// 1. 100까지 숫자 중에 임의로 선택
// 2. 플레이어 턴 계산.
// 3.
// 입력값 : 이름 / 숫자 /
// 출력값 : 숫자에 대한 평가 / 점수 / 게임상태
// 백엔드에서 게임을 보낸다면? > 상태 유지를 위해, 게임 상태 평가.
//1. 게임 시작 버튼 => 숫자 fix
//2. 추정 숫자 입력 => 조건 확인 후, 응답 메세지 리턴
//3.
function numberGame(number, answer) {
  if (number === answer) {
    return "congratuation";
  }
  if (number < answer) {
    return "smaller";
  }
  if (number > answer) {
    return "larger";
  }
}

module.exports = numberGame;
