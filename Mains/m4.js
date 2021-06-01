var arr = [
    {id:1,name:'hello'}, 
    {id:2,name:'world'},
    {id:3,name:'cool'},
    {id:4,name:'javascript'},
    {id:5,name:'jquery'}
    ];
    var ind = arr.findIndex(function(element){
       return element.id===3;
    })
    if(ind!==-1){
    arr.splice(ind, 1)
    }
    console.log (arr);