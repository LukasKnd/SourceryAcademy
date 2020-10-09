/*
    1. Write two binary functions, add and mul, that take two numbers and return their sum and product. 

    add(3, 4);    //  7  
    mul(3, 4);    // 12
*/

// Your code here:
function add(a, b) {
    return a + b;
  }
  function mul(a, b) {
    return a * b;
  }
  
  
  
  
//   console.log(add(3, 4));
//   console.log(mul(3, 4));
  
  
  /*
      2. Write a function that takes an argument and returns a function that returns that argument.  
  
      const idf = identify(3);
      idf();    // 3
  */
  
  function identify(a) {
    return function() {
      return a;
    }
  }
  
  
  /*
      3. Write a function addf that adds from two invocations.
      
      addf(3)(4);    // 7
  */
  function addf(a) {
      return function(b) {
          return a + b;
      }
  }
  
  
  /*
      4. Write a function that takes a binary function, and makes it callable with two invocations.
      
      const addf = applyf(add);
      addf(3)(4);           // 7
      applyf(mul)(5)(6);    // 30
  */
  function applyf(f) {
    return function(a) {
        return function(b) {
            return f(a, b);
        }
    }
  }

  
  /*
      5. Write a function that takes a function and an argument, and returns a function that can supply a second argument.  
  
      const add3 = curry(add, 3);  
      add3(4);             // 7  
      curry(mul, 5)(6);    // 30  
  */
  
  function curry(f, a) {
      return function(b) {
          return f(a,b);
      }
  }

  
  /*
      6. Write a function twice that takes a binary function and returns a unary function that passes its argument to the binary function twice.
      
      const double = twice(add);  
      double(11);    // 22  
      const square = twice(mul);  
      square(11);    // 121
  */
 const double = twice(add); 
 const square = twice(mul);  

  function twice(f) {
      return function(a) {
          return f(a, a);
      }
  }
  
  
  /*
      7. Write a function composeu that takes two unary functions and returns a unary function that calls them both. 
  
      composeu(double, square)(3);    // 36
  */
  function composeu(f1, f2) {
      return function(val) {
          return f2(f1(val));
      }
  }

  
  /*
      8. Write a function that adds from many invocations, until it sees an empty invocation.
  
      addg(3)(4)(5)();     // 12 
      addg(1)(2)(4)(8)();  // 15
  */
  
function addg(a) {

    let sum = 0;

    function f(b) {
        if (b === undefined) {
            return sum;
        } else {
            sum += b;
            return f;
        }
    }

    return f(a);

}

  
  
  /*
      9. Write a function that will take a binary function and apply it to many invocations.
  
      applyg(add)(3)(4)(5)();       // 12 
      applyg(mul)(1)(2)(4)(8)();    // 64
  */

  function applyg(binaryFunc) {
    return function(a) {
        return function(b) {
            let val = binaryFunc(a, b);
            return function f(c) {
                if(c !== undefined) {
                    val = binaryFunc(val, c);
                    return f;
                } else {
                    return val;
                }
            }
        }
    }
  }

  
  
  /*
      10. Make a function that returns a function that will return the next fibonacci number.
  
      const fib = fibonaccif();  
      fib();    // 0  
      fib();    // 1  
      fib();    // 1  
      fib();    // 2  
      fib();    // 3  
      fib();    // 5
  */

  function fibonaccif() {
    let prev2 = -1;
    let prev1 = 1;

    return function() {
        let cur = prev1 + prev2;
        prev2 = prev1;
        prev1 = cur;
        return cur;
    }
  }



