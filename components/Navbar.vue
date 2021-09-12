<template>
  <div class='navButtons'>
    <nuxt-link class='navButton' to='/' exact>Home</nuxt-link>
    <nuxt-link class='navButton' to='/about'>About</nuxt-link>
    <nuxt-link class='navButton' to='/performances'>Performances</nuxt-link>
    <nuxt-link class='navButton' to='/programs'>Programs</nuxt-link>
    <nuxt-link class='navButton' to='/media'>Media</nuxt-link>
    <nuxt-link class='navButton' to='/contact-us'>Contact Us</nuxt-link>
  </div>
</template>

<style>
.navButtons {
  height: 60px;
  width: 100%;
  padding: 0 80px;
  display: none;
  justify-content: center;
  font-size: 20px;
  padding-top: 12px;
}

.navButton {
  border-bottom: 1px solid transparent;
  padding: 8px 20px;
  text-decoration: none;
  color: inherit;
}
.navButton:not(:first-child) {
  margin-left: 40px;
}
.navButton:hover, .navButton.nuxt-link-active {
  border-color: #2c3e50;
  cursor: pointer;
  color: inherit;
}

@media screen and (min-width: 769px) {
  .navButtons {
    display: flex;
  }
  #menuIcon {
    display: flex;
  }
}
</style>
