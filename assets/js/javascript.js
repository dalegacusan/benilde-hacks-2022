function storage() {
    var productname = document.getElementById('productname');
    localStorage.setItem('name', productname.value);

    alert('Successfully Added To The Product Choices!');
}

let optionsfood = () => {
    console.log('asdasd');
    var select = document.getElementById('ListFood');
    const ListFood = localStorage.getItem('name');
    var opt = document.createElement('option');
    opt.value = ListFood;
    opt.innerHTML = ListFood;
    select.appendChild(opt);
};
