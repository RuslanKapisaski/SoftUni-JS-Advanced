
function getFibonator(){
    let tracker = [0,1];
    // 1 1 2 3 5  Fn = Fn-1 + Fn-2, where n > 1
    return function(){
        let len = tracker.length;
        tracker.push(tracker[len-1] + tracker[len-2])
        return tracker[len-2]
    }

  }



    let fib = getFibonator();
    console.log(fib()); // 1
    console.log(fib()); // 1
    console.log(fib()); // 2
    console.log(fib()); // 3
    console.log(fib()); // 5
    console.log(fib()); // 8
    console.log(fib()); // 13
