function add(){
    var txtproduct = document.getElementById('productid').value,
    select = document.getElementById('ListFood');
    var opt = document.createElement('option');
        opt.value = txtproduct;
        opt.innerHTML = txtproduct;
        select.appendChild(opt)
       
}
          
