// /** 배열
//  */

// // 서울 공항철도 노선
// let airportLine = [
//   "인천공항 2터미널",
//   "인천공항 1터미널",
//   "검암",
//   "계양",
//   "김포공항",
//   "마곡나루",
//   "디지털미디어시티",
//   "홍대입구",
// ];

// let harryPotterSeries = [
//   "마법사의 돌",
//   "비밀의 방",
//   "아즈카반의 죄수",
//   "불의 잔",
//   "불사조 기사단",
//   "혼혈왕자",
//   "죽음의 성물",
// ];

// let dataType = ["number", "string", "boolean", "null", "undefined", "object"];

// // 수정 추가
// airportLine[3] = "제주도";
// airportLine[7] = "광주";
// airportLine[8] = "서울";

// //삭제
// delete airportLine[4];
// // -> 완전한 삭제는 아니다. 값이 비워진것 뿐




// /********** splice 메소드로 crud **********/
// airportLine.splice[4];
// // -> 잘라서 없애는 방법  문제는 전달된 인덱스로부터 뒤에있는 값들이 다 사라진다.  그래서

// //삭제 splice(startIndex,deleteCount,item)
// airportLine.splice(4, 1);
// //4번부터 1개를 삭제한다 식으로 갯수를 지정해줘야한다

// //수정 splice(startIndex,deleteCount,item)
// airportLine.splice(4, 1, "test");
// // 이렇게 원하는 자리에 삭제 하고 수정까지 할 수 있다.

// //추가 splice(startIndex,0,item)
// airportLine.splice(4, 0, "item");

// console.log(airportLine.length + " : " + airportLine);


// /********************* */
// //배열의 첫 요소 삭제 : shift()
// airportLine.shift();
// // 배열이 당겨진다.

// //배열의 마지막 요소 삭제 : pop();
// airportLine.pop();
// // 배열의 맨 마지막 요소가 삭제된다.

// //배열의 첫 요소로 값 푸가 : unshift(value)
// airportLine.unshift('nice hong');

// //배열의 마지막 요소에 값 추가 :push(value);
// airportLine.push('ttest');



/** for of 반복문 */

let influencer = ['suwonlog', 'small.tiger','Minam.ludens','cu_convenience24']

for (let i =0; i< influencer.length; i++){
    console.log(influencer[i]);
}
 // 위 코드를 더 간결하게 바꿀 수 있다. 
    /* for(변수 of 배열){ 
        동작부분;
    }
    */
for (let element of influencer){
    console.log(element);
}

/** 배열에서는 웬만하면 사용하지 않는것이 좋다. */
// for (let index in influencer){
//     console.log (influencer[index]);
// }