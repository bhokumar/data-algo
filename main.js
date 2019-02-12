const {
    performance
  } = require('perf_hooks');

const nemo = ['nemo'];

const everyOne = ['hi','bye','tye','Good', 'Better', 'Best', 'Gill', 'Bloat','hank', 'nemo'];

const large = new Array(100000).fill('nemo');

function findNemo(array) {
    let t0 = performance.now();
    for(let i= 0; i<array.length; i++) {
        if(array[i] === 'nemo') {
            console.log('Found Nemo!');
        }
    }

    let t1 = performance.now();

    console.log('Time taken : ', t1-t0, 'miliseconds')
}


findNemo(everyOne); //O(n)

findNemo(nemo);

findNemo(large);