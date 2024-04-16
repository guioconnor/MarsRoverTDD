const rover = require('./rover');

test('Reports its position', ()=>{
    const position = rover([0,0,'N']);

    expect(position).toStrictEqual([0,0,'N'])
})

test('Sets intiial position', ()=>{
    const position = rover([3,3,'S']);

    expect(position).toStrictEqual([3,3,'S'])    
})

test('It moves forward', ()=>{
    const position = rover([0,0,'N'], ['F']);

    expect(position).toStrictEqual([0,1,'N'])
})

test('It moves backward', ()=>{
    const position = rover([0,0,'N'], ['B']);

    expect(position).toStrictEqual([0,-1,'N'])
})

test('It rotates right', ()=>{
    const position = rover([0,0,'N'], ['R']);

    expect(position).toStrictEqual([0,0,'E'])
})

test('It rotates left', ()=>{
    const position = rover([0,0,'N'], ['L']);

    expect(position).toStrictEqual([0,0,'W'])
})

test('It takes mutliple commands', ()=>{
    const position = rover([0,0,'N'], ['F','F','F']);

    expect(position).toStrictEqual([0,3,'N'])

})