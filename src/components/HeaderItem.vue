<template>
 <header class="sidemenu"
 :class="{'height': navOpen}">
    <button class="sidemenu__btn" v-on:click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
				<span class="top"></span>
				<span class="mid"></span>
				<span class="bottom"></span>
			</button>
    <transition name="translateX">
      <nav v-show="navOpen">
        <div class="sidemenu__wrapper">
          <ul class="sidemenu__list">
            <li class="sidemenu__item"><a href="">Home</a></li>
            <li class="sidemenu__item"><a href="">About</a></li>
            <li class="sidemenu__item"><a href="">Blog</a></li>
            <li class="sidemenu__item"><a href="">Work</a></li>
            <li class="sidemenu__item"><a href="">Link</a></li>
          </ul>
        </div>
      </nav>
    </transition>
  </header>
  </template>
  
  <script>
  export default {
    name: "HeaderItem",
    data(){
        return{
            navOpen: false
        }
    }
  };
  </script>
  