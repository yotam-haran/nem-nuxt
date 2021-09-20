<template>
  <div :style='{ display: "contents "}'>
    <div id='navMenu' :class='{ menuOpen }'>
        <img
            id='menuToggle'
            :src="require('../assets/menu-icon.svg')"
            @click='menuOpen = true'
            @touchstart='menuOpen = true'
        />
      <div id='menuOptions' :style='{ visibility }'>
        <nuxt-link to='/'>Home</nuxt-link>
        <nuxt-link to='/about'>About</nuxt-link>
        <nuxt-link to='/performances'>Performances</nuxt-link>
        <nuxt-link to='/programs'>Programs</nuxt-link>
        <nuxt-link to='/media'>Media</nuxt-link>
        <nuxt-link to='/contact-us'>Contact Us</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

let closeMenu = function(event) {
  if(this.menuOpen && event.target.id !== 'menuToggle')
    this.menuOpen = false;
}
export default {
  beforeMount(){
    closeMenu = closeMenu.bind(this);
    window.addEventListener('click', closeMenu);
    document.querySelector('#__layout').addEventListener('scroll', closeMenu);
  },
  beforeDestroy(){
    window.removeEventListener('click', closeMenu);
    document.querySelector('#__layout').removeEventListener('scroll', closeMenu);
  },
  data: () => ({ menuOpen: false }),
  computed: {
    visibility(){
      return this.menuOpen ? 'visible' : 'hidden';
    }
  }
}
</script>

<style scoped>
#navMenu {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

#navMenu:not(.menuOpen) {
  pointer-events: none;
}

#navMenu img {
  width: 44px;
  height: 44px;
  pointer-events: all;
  border: 2px solid #fff;
  border-radius: 100px;
  box-shadow: 2px 2px 8px -3px #000;
  background-color: #fff;
}

#menuOptions {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 6px;
  width: fit-content;
  box-shadow: -2px 0px 4px 0px #aaa;
  margin-top: 8px;
  width: 240px;
  font-size: 22px;
  font-family: 'Raleway', sans-serif;
}

#menuOptions a {
  padding: 12px 16px;
  color: inherit;
}

#menuOptions a:hover {
  color: red;
}

#menuOptions a:not(:first-child) {
  border-top: 1px solid #ccc;
}

@media screen and (min-width: 769px) {
  #navMenu {
    display: none;
  }
}
</style>