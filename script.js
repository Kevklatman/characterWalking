document.addEventListener('DOMContentLoaded', () => {
  const character = document.querySelector('.character');
  let posX = 144;
  let posY = 144;
  const speed = 9;

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowUp':
        posY = Math.max(posY - speed, 0);
        break;
      case 'ArrowDown':
        posY = Math.min(posY + speed, 288);
        break;
      case 'ArrowLeft':
        posX = Math.max(posX - speed, 0);
        break;
      case 'ArrowRight':
        posX = Math.min(posX + speed, 288);
        break;
    }
    character.style.top = posY + 'px';
    character.style.left = posX + 'px';
  });
});
