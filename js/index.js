let hoverNavS = (display) => {
  let nav = document.querySelector(".hover-nav-s");

  nav.style.display = display;
};
let hoverNavP = (display) => {
  let nav = document.querySelector(".hover-nav-p");

  nav.style.display = display;
};
let hoverNavI = (display) => {
  let nav = document.querySelector(".hover-nav-i");
  nav.style.display = display;
};

let mobileBtn = () => {
  let element = document.querySelector("nav");
  let abutton = document.querySelector(".abutton-div");

  if (element.style.display === "flex") {
    element.style.display = "none";
    abutton.style.display = "none";
  } else {
    element.style.display = "flex";
    abutton.style.display = "flex";
  }
};

const switchBar = (condition) => {

  let element = document.getElementById("tabination-area");

  let all = document.getElementById('all');
  let erp = document.getElementById("erp");
  let vms = document.getElementById('vms');
  let fin = document.getElementById('fin');
  let game = document.getElementById('game');
  let ecom = document.getElementById('ecom');

  element.innerHTML = "";

  if (condition === "all") {
    element.innerHTML = `
    <div class="img-box"><img src="https://www.cantechnologies.co.in/wp-content/uploads/2020/04/safeboadin.png" alt=""></div>
    <div class="img-box"><img src="https://www.cantechnologies.co.in/wp-content/uploads/2020/04/safevisitin.png" alt=""></div>
    <div class="img-box"><img src="https://www.cantechnologies.co.in/wp-content/uploads/2020/04/elendingbucket.png" alt=""></div>
    <div class="img-box"><img src="https://www.cantechnologies.co.in/wp-content/uploads/2020/04/pokerguru.png" alt=""></div>
    <div class="img-box"><img src="https://www.cantechnologies.co.in/wp-content/uploads/2020/10/icon.png" alt=""></div>
    `;

    all.className = 'button-act';
    erp.classList.remove('button-act');
    vms.classList.remove('button-act');
    fin.classList.remove('button-act');
    game.classList.remove('button-act');
    ecom.classList.remove('button-act');

  } else if (condition === "erp") {
    element.innerHTML = `
    <div class="img-box"><img src="https://www.cantechnologies.co.in/wp-content/uploads/2020/04/safeboadin.png" alt=""></div>
    `;
    erp.className = 'button-act';
    all.classList.remove('button-act');
    vms.classList.remove('button-act');
    fin.classList.remove('button-act');
    game.classList.remove('button-act');
    ecom.classList.remove('button-act');
  } else if (condition === 'vms'){
    element.innerHTML = `
    <div class="img-box"><img src="https://www.cantechnologies.co.in/wp-content/uploads/2020/04/safevisitin.png" alt=""></div>
    `;
    vms.className = 'button-act';
    erp.classList.remove('button-act');
    all.classList.remove('button-act');
    fin.classList.remove('button-act');
    game.classList.remove('button-act');
    ecom.classList.remove('button-act');
  } else if(condition === 'fin'){
    element.innerHTML = `
    <div class="img-box"><img src="https://www.cantechnologies.co.in/wp-content/uploads/2020/04/elendingbucket.png" alt=""></div>
    `;
    fin.className = 'button-act';
    erp.classList.remove('button-act');
    vms.classList.remove('button-act');
    all.classList.remove('button-act');
    game.classList.remove('button-act');
    ecom.classList.remove('button-act');
  } else if(condition === 'game'){
    element.innerHTML = `
    <div class="img-box"><img src="https://www.cantechnologies.co.in/wp-content/uploads/2020/04/pokerguru.png" alt=""></div>
    `;
    game.className = 'button-act';
    erp.classList.remove('button-act');
    vms.classList.remove('button-act');
    fin.classList.remove('button-act');
    all.classList.remove('button-act');
    ecom.classList.remove('button-act');
  } else if(condition === 'ecom'){
    element.innerHTML = `
    <div class="img-box"><img src="https://www.cantechnologies.co.in/wp-content/uploads/2020/10/icon.png" alt=""></div>
    `;
    ecom.className = 'button-act';
    erp.classList.remove('button-act');
    vms.classList.remove('button-act');
    fin.classList.remove('button-act');
    game.classList.remove('button-act');
    all.classList.remove('button-act');

  }
};
