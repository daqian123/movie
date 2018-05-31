<template>
  <div id="test1">
        <div id="box" @mousedown="down($event)" @mouseup="up" ref="box"></div>
  </div>
</template>

<script>
export default {
  name: 'test1',
  data () {
      return {
          x:'',
          y:'',
          status:false,
          pageXOffset:'',
          pageYOffset:''
      }
  },
  methods:{
      move(e){
          let obj=document.getElementById("box")
          if(this.status){
              let {left,top}={left:e.clientX-this.pageXOffset,top:e.clientY-this.pageYOffset}
                obj.style.left = left+ 'px';  
                obj.style.top = top+ 'px'; 
                if((obj.offsetWidth+left)>document.documentElement.clientWidth){
                    obj.style.right=0+'px'
                }
                if(left<0){
                    obj.style.left=0+'px'
                }
                if(top<0){
                    obj.style.top=0+'px'
                }
          }else{
              return false;
          }
      },
      down(e){
          let obj=document.getElementById("box")
          this.status=true
          if(this.status){
              this.pageXOffset=e.clientX-obj.offsetLeft
              this.pageYOffset=e.clientY-obj.offsetTop
          }
      },
      up(){
          this.status=false
      }
  },
  mounted(){
      window.addEventListener('mousemove',this.move)
  }
}
</script>

<style>
.container{
    height: 500px;
    background: #565656;
    position: relative;
}
#box{
    height: 100px;
    width: 100px;
    background: #00aaff;
    position: absolute;
}
</style>
