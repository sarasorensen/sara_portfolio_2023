<template>
 <header class="sidemenu"
 :class="{'height': navOpen}">
    <button class="sidemenu__btn" v-on:click="navOpen=!navOpen" aria-label="Menu" v-bind:class="{active:navOpen}">
				<span class="top"></span>
				<span class="mid"></span>
				<span class="bottom"></span>
			</button>
    <transition name="translateX">
      <nav v-show="navOpen">
        <div class="sidemenu__wrapper">
          <ul class="sidemenu__list">
            <li class="sidemenu__item"><router-link to="/">Home</router-link></li>
            <li class="sidemenu__item"><router-link to="/contact">Contact</router-link></li>
            <li class="sidemenu__item"><router-link  to="/projects">Projects</router-link></li>
            <li class="sidemenu__item"><router-link to="/resume">Resume</router-link></li>
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
  