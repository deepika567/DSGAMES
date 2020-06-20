function init(){
    var canvas=document.getElementById('mycanvas');
    W=H=canvas.width=canvas.height=1000;
    pen=canvas.getcontext('2d');
    snake={
        init_len=5,
        color:"blue",
        cells:[],
        direction:"right",
   
        createSnake:function(){
            for(var i=this.init_len;i>=0;i--){
                

            }

        }


    };

}
function draw(){

}
function update(){

}
function gameloop(){

}
init();
 var f= setInterval(gameloop,100);