<template>
  <div class="index">
      <div  class="loading" v-if="boolean">
          正在加载中<img src="../assets/img/loading.gif"/>
      </div>
      <div v-else id="movieList">
          <ul class="movieList" ref="scroll">
              <li v-for="item in movieList" :key="item">
                  <img :src="item.images.medium"/>
                  <p>{{item.title}}</p>
              </li>
          </ul>
          <div  class="loading" v-if="!booleans">
            正在加载中<img src="../assets/img/loading.gif"/>
          </div>
      </div>
  </div>
</template>

<script>
import api from '../api/api'
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      boolean:true,
      movieList:'',
      booleans:true,
      start:0,
      count:20
    }
  },
  methods:{
      getHotMovieList(){
            this.booleans=false
            api.getHotMovieList({start:this.start,count:20}).then(res=>{
                if(res.status==200){
                    this.start++
                    this.movieList=this.movieList.concat(res.data.subjects)
                    this.booleans=true
                }
                })
            }
  },
  mounted(){
        api.getHotMovieList({start:this.start,count:20}).then(res=>{
          if(res.status==200){
              this.boolean=false
              this.start++
              this.movieList=res.data.subjects
          }
        })
      window.addEventListener('scroll', ()=> {
          let  ch=document.documentElement.clientHeight
          let a=document.querySelectorAll('ul li')
          let lh=a[a.length-1].offsetTop+a[a.length-1].offsetHeight/2
            this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            if(lh<=(ch+this.scroll)&&this.booleans){ 
                    this.getHotMovieList()                  
            }
        })     
  },

}
</script>


<style scoped>
.loading{
    display: flex;
    align-items: center;
    justify-content: center;
}
.movieList{
    display: flex;
    flex-wrap: wrap;
}
.movieList li{
    width: 25%;
    font-size: 14px;
    text-align: center;
}
.movieList li img{
    height: 128px;
    width: 100%;
}
</style>
