function init(){
    var canvas=document.getElementById('mycanvas');
    W=H=canvas.width=canvas.height=1000;
    pen=canvas.getcontext('2d');
    cs=50;
    snake={
        init_len=5,
        color:"blue",
        cells:[],
        direction:"right",
   
        createSnake:function(){
            for(var i=this.init_len;i>=0;i--){
                this.cells.push({x:i,y:0});

            }

        },
        drawSnake:function(){
            pen.fillRect(this.cells[i],x,cells[i],y,cs,cs);

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