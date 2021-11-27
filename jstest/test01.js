/** 거스름돈 계산하기! */

/**현명하게 거스름돈을 거슬러주는 계산을 한다!
 * 33000원짜리 물건을 사면서 10만원을 냈을때 가장 적은 수의 지폐를 거슬러주는 프로그램을 짠다
 *
 * 현태는 현명하게 거스름돈을 계산해 주는 프로그램을 만들려고 합니다. 예를 들어 33,000원짜리 물건을 사기 위해 100,000원을 냈다면,

50,000원 1장
10,000원 1장
5,000원 1장
1,000원 2장
이런 식으로 '가장 적은 수'의 지폐를 거슬러 주는 것입니다. 방금 같은 경우에는 총 5장을 거슬러 준 거죠.

우리는 calculateChange라는 함수를 작성하려고 하는데요. 이 함수는 지불한 금액을 나타내는 payment와 물건의 가격을 나타내는 cost를 파라미터로 받습니다.

주어진 코드에 이어서 깔끔하게 프로그램을 작성해 보세요.

함수 모두 작성하고 프로그램을 실행하면 아래와 같은 결괏값이 콘솔에 출력되어야 합니다.
 *  
 */

/**
 * 받아야할 돈이 3만3천원일때 10만원을 받는다면
 * 1. 10만원(payment) - 3만3천원 (cost)  = 거스름돈 6만 7천원 (paybock)
 * 2. 6만 7천원에서 50000만원 먼저 빼고
 * 3. 1만원 빼고
 * 4. 5천원 빼고
 * 5. 1천원 뺀다.
 */

function calculateChange(payment, cost) {

  let payback = payment - cost;
  console.log(payback + '거스름돈 ');

  let fiftyCount = (payback - (payback % 50000)) / 50000;
  payback = payback - 50000 * fiftyCount;

  let tenCount = (payback - (payback % 10000)) / 10000;
  payback = payback - 10000 * tenCount;
  
  let fiveCount = (payback - (payback % 5000)) / 5000;
  payback = payback - 5000 * fiveCount;
  
  let oneCount = (payback - (payback % 1000)) / 1000;

  console.log("50000원 지폐: " + fiftyCount);
  console.log("10000원 지폐: " + tenCount);
  console.log("5000원 지폐 : " + fiveCount);
  console.log("1000원 지폐 : " + oneCount);
}

// 테스트 코드

calculateChange(100000, 33000);
console.log("");
calculateChange(500000, 378000);
console.log("");

calculateChange(780000,111000 );
