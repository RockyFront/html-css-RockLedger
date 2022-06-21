let array = ['start',0,  15, 4, null, undefined,'empty starts',,,,'empty ends',null, 'end']

let filtered = array.filter(element => element !== null || element === null);

console.log(filtered)
//(9) ['start', 15, 4, null, undefined, 'empty starts', 'empty ends', null, 'end']