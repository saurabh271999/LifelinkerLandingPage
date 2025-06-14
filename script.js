const menuBtn = document.getElementById('menu-btn');
const menuOption = document.getElementById('menu-option');
const burger = document.getElementById('burger');
const cross = document.getElementById('cross');
const featuresBtn = document.getElementById('features-btn')
const hoverMenu = document.getElementById('hover-menu')
const pricingMenu = document.getElementById('pricing-menu')
const pricingBtn = document.getElementById('pricing-btn')

menuBtn.addEventListener('click', () => {
  const isMenuOpen = menuOption.style.display === 'block';

  if (isMenuOpen) {
    menuOption.style.display = 'none';
    burger.style.display = 'block';
    cross.style.display = 'none';
  } else {
    menuOption.style.display = 'block';
    burger.style.display = 'none';
    cross.style.display = 'block';
  }
});


featuresBtn.addEventListener('mouseenter', () => {
  hoverMenu.style.display = 'flex'; 
});

 featuresBtn.addEventListener('mouseleave', () => {
  hoverMenu.style.display = 'none';
});


pricingBtn.addEventListener('mouseenter', () => {
  pricingMenu.style.display = 'flex'; 
});

pricingBtn.addEventListener('mouseleave', () => {
  pricingMenu.style.display = 'none';
});
