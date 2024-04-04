  
//  1. variable
  // 변수를 선언하고 연산자를 사용하여 값 할당
    var food1 = "sushi";   // 재할당 가능
    let food2 = "pizza";     // 재할당 가능
    const food3 = "noddle";  // 재할당 불가


  // 값을 다시 재할당 했을 때 값이 변하는 변수(var, let)
    food1 = "cake"    // var
    food2 = "chicken"   // let
    //food3 = "fish"    // 에러


  // 주의) 기존에 변수가 선언되어 있지만 다시 선언이 가능하기 떄문에 프로그램이 원하는대로 동작하지 않을 가능성이 높음
    var food1 = "apple"      // 같은 변수명으로 재선언 가능
    //let food2 = "banana"      // 에러
    //const food3 = "grape"      // 에러


  // 변수를 호출해서 변수에 담긴 값 확인
    console.log(`var : ${food1}, let : ${food2}, const : ${food3}`);


// 2. data_types
  // 일반 자료형의 종류(primitive types)
    // 1) number, 2) bigint, 3) string, 4) boolean, 5) symbol, 6) undefined, 7) null

  // 복합 자료형의 종류(complex types)
    // 1) object, 2) function, 3) array

  // 문자열(string)
    let cake = "케이크";
    let iceCoffee = "아이스커피";
    let set = `${cake}와 ${iceCoffee} 세트`;
    console.log(set);
    // 결과 ==> 케이크와 아이스커피 세트

  // typeof
    // javaScript의 typeof 함수를 이용하여 자료형을 확인할 수 있음

  // 객체(object)
  /**
   * 1. 일반객체
   *  {name: "Alice", age : 25}
   *
   * 2. 배열
   *  {'apple', 'banana', 'grape'}
   * 
   * 3. 함수
   *  function introduce(name){return "My name is " + name;}
   * 
   * 4. 날짜
   *  new Date()
   * 
   * 5. 정규표현식(RegExp)
   *  /[a-zA-Z]+/g
   * 6. Error
   *  new Error('something went wrong')
   * 7. 내장 객체
   *  Math.random(), Number.parseInt('10')
   * 8. 전역 객체
   *  globalThis (브라우저), globalThis(Node.js)
   */

  // 객체 메서드(object method)
    const bakery = {
    saltBread: "소금빵",
    chocoBread: "초코빵",
    cheeseBread: "치즈빵"
    };

  // Object.entries()
    const bakeryEntries = Object.entries(bakery);
    console.log("Object.entries():", bakeryEntries);
    //  출력: Object.entries(): [ [ 'saltBread', '소금빵' ], [ 'chocoBread', '초코빵' ], [ 'cheeseBread', '치즈빵' ] ]

  // Object.keys()
    const bakeryKeys = Object.keys(bakery);
    console.log("Object.keys():", bakeryKeys);
    // 출력: Object.keys(): [ 'saltBread', 'chocoBread', 'cheeseBread' ]

  // Object.values()
    const bakeryValues = Object.values(bakery);
    console.log("Object.values():", bakeryValues);
    // 출력: Object.values(): [ '소금빵', '초코빵', '치즈빵' ]

  // Object.freeze()
  Object.freeze(bakery);
    bakery.cheeseBread = "Baguettes"; // 변경이 적용되지 않음
    console.log("Object.freeze():", bakery);
    // 출력: Object.freeze(): { saltBread: '소금빵', chocoBread: '초코빵', cheeseBread: '치즈빵' }

  // Object.seal()
    Object.seal(bakery);
    bakery.chocoBread = "456 Bread Avenue"; // 변경이 허용됨
    console.log("Object.seal():", bakery);
    // 출력: Object.seal(): { saltBread: '소금빵', chocoBread: '456 Bread Avenue', cheeseBread: '치즈빵' }

  // Object.is()
    console.log("Object.is(10, 10):", Object.is(10, 10));     // true
    console.log("Object.is(10, '10'):", Object.is(10, '10')); // false

  // Object.assign()
    const target = { a: 1, b: 2 };
    const source = { b: 3, c: 4 };
    const mergedObject = Object.assign({}, target, source);
    console.log("Object.assign():", mergedObject);
    // 출력: Object.assign(): { a: 1, b: 3, c: 4 }


// 3. function
  // 함수 선언식 (Function Declaration)
    function bread() {
      console.log("This is a bread function declaration");
    }

  // 함수 표현식 (Function Expression)
    const breadFunc = function() {
      console.log("This is a bread function expression");
    };

  // 화살표 함수 (Arrow Function)
    const breadArrow = () => {
      console.log("This is a bread arrow function");
    };

  // 익명 함수 (Anonymous Function)
    setTimeout(function() {
      console.log('Hello');
    }, 1000);

  // 즉시 실행 함수 (Immediately Invoked Function Expression, IIFE)
    (function() {
      console.log('I am invoked immediately');
    })();


// 4. for_if
  // for 반복문
    for (let i = 0; i < 10; i++) {
      console.log(i); // 0부터 9까지 출력
    }

  // for...in 반복문 예제
    const object = { a: 2, b: 4, c: 8 };
    for (const index in object) {
      console.log(index, object[index]); // 객체의 각 속성과 값을 출력
    }

  // for...of 반복문 예제
    const array = [1, 2, 3, 4, 5];
    for (const value of array) {
      console.log(value); // 배열의 각 요소를 출력
    }

  // while 반복문 예제
    let i = 0;
    while (i < 5) {
      console.log(i); // 0부터 4까지 출력
      i++;
    }

  // do...while 반복문 예제
    let j = 0;
    do {
      console.log(j); // 0부터 4까지 출력, 최소 한 번은 실행
      j++;
    } while (j < 5);

  // break 예제
    for (let k = 0; k < 10; k++) {
      if (k === 5) break; // i가 5에 도달하면 반복문을 중단
      console.log(k); // 0부터 4까지만 출력
    }

  // continue 예제
    for (let l = 0; l < 10; l++) {
      if (l % 2 === 0) continue; // l이 짝수이면 다음 반복으로 건너뜀
      console.log(l); // 1, 3, 5, 7, 9 출력
    }

  // switch 예제
    const fruits = 'apple';
    switch (fruits) {
      case 'apple':
        console.log('Apple!'); // 'Apple!' 출력
        break;
      case 'banana':
        console.log('Banana!');
        break;
      default:
        console.log('Unknown fruit');
    }

  // switch 를 if 문으로 변환
    const fruit = 'apple';

    if (fruit === 'apple') {
        console.log('Apple!'); // 'Apple!' 출력
    } else if (fruit === 'banana') {
        console.log('Banana!');
    } else {
        console.log('Unknown fruit');
    }