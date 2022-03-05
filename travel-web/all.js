var account = {};
var endpoint = 'https://api.kcg.gov.tw/Api/Service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c'
var charge = [];


var areas = document.getElementById('areas');
var list = document.querySelector('.list');
var title = document.querySelector('.title');
var btn = document.querySelectorAll('.btn');

areas.addEventListener('change',get,false);

for(var i = 0; i < btn.length; i++){
    btn[i].addEventListener('click',get,false);
}

function example() {
    $.ajax({
        type: "GET",
        url: endpoint,
        dataType: "json",
        success: function (res) {
          charge.push(...res.data.XML_Head.Infos.Info);
          getData(charge);
        },
        error: function (error) {
          console.log(error);
        }
    });
}
example();

console.log(charge);


function getData(charge){
    var str = '';
    for(var i = 0; i < charge.length; i++){
        str += '<div class="col-md-6"><div class="card"><div class="top" style="background:url('+ charge[i].Picture1 +')"><div class="title">'+ charge[i].Name+'</div></div><div class="bottom"><p><i class="fa fa-clock-o" aria-hidden="true"></i> '+ charge[i].Opentime +'</p><p><i class="fa fa-map-marker" aria-hidden="true"></i> '+charge[i].Add+'</p><p><i class="fa fa-phone" aria-hidden="true"></i> '+ charge[i].Tel +'</p></div></div></div>';
    }

    list.innerHTML = str;

}

function get(e){
    var select = e.target.value;

    var array = [];

    for(i=0;i<charge.length;i++){
        if (charge[i].Opentime == select){
        
        array.push({
            Add:charge[i].Add,
            Name:charge[i].Name,
            Opentime:charge[i].Opentime,
            Tel:charge[i].Tel,
            Picture1:charge[i].Picture1
        });
    
        
        }
        
    }
    

    var str = '';
    for(i = 0; i<array.length;i++){
        str += '<div class="col-md-6"><div class="card"><div class="top" style="background:url('+ array[i].Picture1 +')"><div class="title">'+ array[i].Name+'</div></div><div class="bottom"><p><i class="fa fa-clock-o" aria-hidden="true"></i> '+ array[i].Opentime +'</p><p><i class="fa fa-map-marker" aria-hidden="true"></i> '+array[i].Add+'</p><p><i class="fa fa-phone" aria-hidden="true"></i> '+ array[i].Tel +'</p></div></div></div>';
    }
    list.innerHTML = str;
    title.textContent = select;
}



