const scene = document.querySelector('a-scene')
const camera = document.querySelector('#camera')

const jump = (distance = 10, direction = 'in') => {
  console.log(distance)
  if (distance === 'tan') {
    distance = 10
  }
  if (distance === 'to' || distance === 'two' || distance === 'too') {
    distance = 2
  }
  distance = Number(distance)
  if (!distance) return
  const currentPosition = camera.getAttribute('position')
  if (direction === 'in') {
    currentPositionZ = currentPosition.z - Number(distance)
  }
  if (direction === 'out') {
    currentPositionZ = currentPosition.z + Number(distance)
  }
  const newPosition = Object.assign({}, currentPosition, { z: currentPositionZ })
  let newPositionString = ''
  for (let p in newPosition) {
    const end = p === 'z' ? '' : ' '
    newPositionString += `${newPosition[p]}${end}`
  }
  const animationNode = document.createElement('a-animation')
  animationNode.setAttribute('attribute', 'position')
  animationNode.setAttribute('to', newPositionString)
  animationNode.setAttribute('dur', '1000')
  camera.appendChild(animationNode)
}

if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  annyang.addCommands({
    'zoom': function() {
      jump()
    },
    'zoom :distance': function(distance) {
      jump(distance)
    },
    'zoom in :distance': function(distance) {
      jump(distance)
    },
    'zoom out': function() {
      jump()
    },
    'zoom out :distance': function(distance) {
      jump(distance, 'out')
    },
    'zoom back :distance': function(distance) {
      jump(distance, 'out')
    },
  });

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}