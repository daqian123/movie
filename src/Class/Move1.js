class Move1{
    constructor(id){
        this.obj=document.getElementById(id)
        this.pageXOffset=0
        this.pageYOffset=0
        this.status=false
        this.down()
    }
    move(){
        this.obj.onmousemove(function(e){
            if(this.status){
                this.obj.style.left = e.clientX-this.pageXOffset+ 'px';  
                this.obj.style.top = e.clientY-this.pageYOffset + 'px'; 
            }else{
                return false;
            }   
        })
        let obj=document.getElementById("box")
        if(this.status){
              obj.style.left = e.clientX-this.pageXOffset+ 'px';  
              obj.style.top = e.clientY-this.pageYOffset + 'px';  
        }else{
            return false;
        }
    }
    down(){
        this.obj.onmousedown(function(e){
            this.status=true
            if(this.status){
                this.pageXOffset=e.clientX-obj.offsetLeft
                this.pageYOffset=e.clientY-obj.offsetTop
                move()
                up()
            }
        })
    }
    up(){
        this.obj.onmouseup(function(e){
           return this.status=false
        })
    }
}
export default Move1