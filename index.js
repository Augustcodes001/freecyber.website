const tabItems=document.querySelectorAll('.tab-item');
const tabContentItems=document.querySelectorAll('.tab-content-item');

// select tab content item
function selectItem(e){
    removeBorder();
    removeshow();
    // add border to current tab
    this.classList.add('tab-border');
    // console.log(this.id);
    // grab content item from DOM
    const tabContentItem=document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show')
}
function  removeBorder(){
    tabItems.forEach(item=>item.classList.remove('tab-border'));
}
function removeshow() {
    tabContentItems.forEach(item=>item.classList.remove('show'));
}
// listen for tab click
tabItems.forEach(item=>item.addEventListener('click',selectItem));




const btn = document.querySelector('.submit-btn');
const box = document.querySelector('.modal-box');
const row = document.querySelector('.nl-row');
const news = document.querySelector('.news-letter');
const hide = document.querySelector('.cancel');
const footer = document.querySelector('.footer');
btn.addEventListener('click', (e) => {
     e.preventDefault();
    //   cont.style.background = 'linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url(../images/pizza67.jpg)';
    box.style.display='block'
    row.style.display='none'
})
hide.addEventListener('click', (e) => {
     e.preventDefault();
    //   cont.style.background = 'linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)),url(../images/pizza67.jpg)';
    box.style.display='none'
    row.style.display='flex'
    footer.style.display='margin-top:40px'
})