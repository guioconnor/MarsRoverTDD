const moves = {
    N: [0, 1],
    S: [0, -1],
    W: [-1, 0],
    E: [1, 0],
}

const direction = {
    F: 1,
    B: -1,
}

const rotatation = ['N', 'E', 'S', 'W'];

const rotate = (direction, position) => {
    const currentIndex = rotatation.indexOf(position[2])
    const newIndex = (currentIndex + 1) % rotatation.length;
    return [position[0], position[1], rotatation[newIndex]];
}

const addVector = (position, movement) => {
  return [
    position[0] + movement[0], 
    position[1] + movement[1],
    position[2]
  ]
}

const multiplyVector = (direction, movement) => {
    return [
        movement[0] * direction,
        movement[1] * direction
     ]
}

const rover = (initialPosition, commands = []) => {
  let position = initialPosition;

  commands.forEach(move => {
    if(move === 'F' || move === 'B'){
      position = addVector(position, multiplyVector(direction[move], moves[position[2]]))
    } else if(move === 'R') {
      position = rotate(1, position)
    } 
  })

  return position;
}

module.exports = rover;