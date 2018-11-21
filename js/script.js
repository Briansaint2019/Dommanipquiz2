let title = document.createElement('h1')
title.innerHTML = 'Making Ice Cream Sanwiches'
document.body.appendChild(title)
title.style.color = 'Orange'

let parag1 = document.createElement('p')
parag1.innerHTML = 'Spicy jalapeno bacon ipsum dolor amet brisket hamburger turducken t-bone flank strip steak chuck. Frankfurter swine sirloin chuck shoulder tenderloin burgdoggen landjaeger. Beef ribs chuck short loin porchetta ball tip, pancetta meatball pastrami bresaola picanha filet mignon boudin jerky. T-bone chuck alcatra biltong ham hock ball tip tri-tip shank filet mignon frankfurter meatball tongue.'
document.body.appendChild(parag1)

let ul1 = document.createElement('ul')
ul1.innerHTML = 'Ingrediants'
document.body.appendChild(ul1)
ul1.style.backgroundColor = 'orange'

let lists1 = document.createElement('li')
let lists2 = document.createElement('li')
let lists3 = document.createElement('li')
let lists4 = document.createElement('li')
let ingrediant = document.createTextNode('Cake tootsie roll tiramisu')
let ingrediant2 = document.createTextNode('Cake tootsie roll tiramisu')
let ingrediant3 = document.createTextNode('Cake tootsie roll tiramisu')
let ingrediant4 = document.createTextNode('Cake tootsie roll tiramisu')
lists1.appendChild(ingrediant)
lists2.appendChild(ingrediant2)
lists3.appendChild(ingrediant3)
lists4.appendChild(ingrediant4)
ul1.appendChild(lists1,)
ul1.appendChild(lists2)
ul1.appendChild(lists3)
ul1.appendChild(lists4)
ul1.style.height='200px'
ul1.style.fontSize= '2rem'

lists1.style.backgroundColor= 'Orange'
lists2.style.backgroundColor= 'Orange'
lists3.style.backgroundColor= 'Orange'
lists4.style.backgroundColor= 'Orange'

let bigEmpty = document.createElement('span')




let pic1 = document.createElement('img')
pic1.src='img/ice-cream.JPG'
document.body.appendChild(pic1)
pic1.style.width='200px'

let pic2 = document.createElement('img')
pic2.src='img/cookies.jpg'
document.body.appendChild(pic2)
pic2.style.width='200px'

let pic3 = document.createElement('img')
pic3.src='img/mmminis.jpg'
document.body.appendChild(pic3)
pic3.style.width='200px'

let pic4 = document.createElement('img')
pic4.src='  img/pb.JPG'
document.body.appendChild(pic4)
pic4.style.width='200px'

let archy = document.createElement('a')
archy.innerHTML = "Follow More"

archy.href= "https://www.google.com"

document.body.appendChild(archy)