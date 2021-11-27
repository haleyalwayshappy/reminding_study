// import { Fragment } from "react";
// import ReactDOM from "react-dom";

// const product = "macbook";
// const model = "pro";
// const item = product + model;

// function handleClick(){
//   alert('곧 도착합니다!');
// }

// ReactDOM.render(
//   <>
//     <h1 id="title">나만의 {item.toUpperCase()} 주문하기</h1>
//     <button onClick={handleClick}>확인</button>
//   </>,
//   document.getElementById("root") // root 라는 id 속성을 가지고 온다
// );

// // 리액트에서 최초로 실행되는 파일
// // render 메소드로 html 태그를 만들어준다

/** 가위바위보 출력하기 */

// import ReactDOM from 'react-dom';

// const WINS = {
//   rock: 'scissor',
//   scissor: 'paper',
//   paper: 'rock',
// };

// function getResult(left, right) {
//   if (WINS[left] === right) return '승리';
//   else if (left === WINS[right]) return '패배';
//   return '무승부';
// }

// function handleClick() {
//   console.log('가위바위보!');
// }

// const me = 'rock';
// const other = 'scissor';

// ReactDOM.render(
//   <>
//     <h1>가위바위보</h1>
//     <h2>{getResult(me,other)}</h2>
//     <button onClick={handleClick}>가위</button>
//     <button onClick={handleClick}>바위</button>
//     <button onClick={handleClick}>보</button>
//   </>,
//   document.getElementById('root')
// );

/** 컴포넌트  */

import ReactDOM from "react-dom";
import App from './App';
// // 이것이 컴포넌트다! (함수이름의 첫글자가 꼭 대문자여야함 jsx 문법으로 만든 리액트 엘리먼트를 리턴해줘야 컴포넌트임)
// function Hello() {
//   return <h1>안녕 리액트!</h1>;
// }

// const element = (
//   <>
//     <Hello />
//     <Hello />
//     <Hello />
//   </>
// );


ReactDOM.render(<App />, document.getElementById("root"));
