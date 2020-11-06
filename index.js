var tabBtns = document.querySelectorAll('.tab-btn');
var tabContent = document.querySelectorAll('.tab-content');

//binding event
for(let i=0;i<tabBtns.length;i++){
  tabBtns[i].addEventListener('click', function(ev) {
    openTab(ev, tabBtns[i])
  });
}

function openTab(ev, btn){
  //removing active id
  for(let i=0;i<tabBtns.length;i++){
    tabBtns[i].setAttribute('id',"");
    tabContent[i].setAttribute('id',"");

    // reset all images back to white
    let img = tabBtns[i].querySelector('img');
    img.setAttribute('src', img.getAttribute('src').replace('red', 'white'));
  }

  //displaying target
  btn.setAttribute('id',"active-tab");
  let t = btn.dataset.tab;
  console.log(btn);
  document.querySelectorAll('.tab-content')[t].setAttribute('id','active-content');

  // find the image in button, set to red
  let img = tabBtns[i].querySelector('img');
  img.setAttribute('src', img.getAttribute('src').replace('white', 'red'));
}

