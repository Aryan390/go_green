// all the DOM elements
const ul = document.querySelector('.companies')
const link = document.querySelectorAll('.read-link')
const para = document.querySelectorAll('.read-more')
const link2 = document.querySelectorAll('.read-less')

// company data structure holding all the information for the company data
const company = [
  {name: 'Tesla',picture: './images/images.jpg', contact: '894893849'},
  {name: 'Renew Power',picture: './images/1.jpg', contact: '4738439'},
  {name: 'Tata Power Solar',picture: './images/1577080748_tt0Wlk_tata_power.jpg', contact: '238923892'}
]


company.forEach(data => {
  const li = document.createElement('li');
  let string = `
    <div class="image-div">
      <img src=${data.picture} alt="company-text">
    </div>
    <div class="heading-div">
      <h1>${data.name}</h1>
      <p>Contact: ${data.contact}</p>
    </div>
  `
  li.className = 'company-html'
  li.innerHTML = string
  ul.appendChild(li);
})

// event listeners for the read more link
link.forEach(btn => {
  btn.addEventListener('click',function(e){
    para.forEach(p => {
      if(p.getAttribute('data-para')===btn.getAttribute('data-read')){
        p.classList.add('show')
        btn.classList.add('none')
        link2.forEach(btn2 => {
          if(btn.getAttribute('data-read')===btn2.getAttribute('data-hide')){
            btn2.classList.add('show')
            btn.classList.remove('none')
          }
        })
      }
    })
  })
})

// event listener for the read less link
link2.forEach(btn => {
  btn.addEventListener('click', function(e){
    para.forEach(p => {
      if(p.getAttribute('data-para')===btn.getAttribute('data-hide')){
        p.classList.remove('show')
        btn.classList.add('none')
        link.forEach(btn2 => {
          if(btn2.getAttribute('data-read')===btn.getAttribute('data-hide')){
            btn2.classList.remove('none')
            btn2.classList.add('show')
          }
        })             
      }
    })
  })
})