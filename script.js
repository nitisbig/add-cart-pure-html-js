let data = [
    {
        name: 'Orange',
        price: 45
    },
    {
        name: 'Mango',
        price: 35
    },
    {
        name: 'Apple',
        price: 55
    },
    {
        name: 'Cherry',
        price: 85
    },
    {
        name: 'Dragon Fruit',
        price: 90
    },
];
const carts = document.getElementById('carts')
data.forEach((item,index)=>{
    let currentQuantity = 2
    let cart = document.createElement('div')

    let name = document.createElement('h1');
    let price = document.createElement('h2');
    let quantity = document.createElement('h2')
    let btn = document.createElement('button')
    btn.textContent = 'add'
    
    cart.setAttribute('id','carts')
    btn.setAttribute('id', `btn${index}`)
    price.setAttribute('id', `price${index}`)
    quantity.setAttribute('id', `quantity${index}`)
    name.innerHTML = item.name
    price.innerHTML = item.price
    quantity.innerHTML = `+${1}`
    cart.appendChild(name)
    cart.appendChild(price)
    cart.appendChild(quantity)
    cart.appendChild(btn)
    carts.appendChild(cart);
    
    let currentPrice = item.price
    
    document.getElementById(`btn${index}`).addEventListener('click',function(){
        item.price += Number(currentPrice)
        document.getElementById(`price${index}`).innerHTML = item.price
        document.getElementById(`quantity${index}`).innerHTML = `+${currentQuantity++}`
    })
})