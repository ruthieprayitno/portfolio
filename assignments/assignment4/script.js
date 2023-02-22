const mouseFollower = document.querySelector('.mouse-follower');

document.addEventListener('mousemove', function(e) {
  mouseFollower.style.opacity = 0.5;
  mouseFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.addEventListener('mouseleave', function() {
  mouseFollower.style.opacity = 0;
});