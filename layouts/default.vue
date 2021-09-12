<template>
    <div :style='{ display: "contents" }'>
        <navmenu />
        <top-banner v-if='$route.path === "/"'/>
        <navbar />
        <div :style='{ minHeight: "calc(100vh - 60px - 118px - 40px)" }'>
            <Nuxt />
        </div>
        <page-footer />
    </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background-color: #fff;
  position: relative;
}
#__layout {
  font-family: 'Dosis', sans-serif;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
a {
    color: #007888;
    text-decoration: none;

    &:hover {
        color: #52bfce;
    }
}

h1 {
  margin: 0;
  font-size: 32px;
  display: flex;
  align-items: center;

  &  > img {
    max-width: 32px;
    margin-right: 12px;
    margin-bottom: 6px;
    }
}

section {
  display: flex;
  flex-direction: column;
  width: 100vw;
  text-align: justify;
}

@media screen and (min-width: 769px) {
  h1 {
    font-size: 40px;

    & > img {
        max-width: 40px;
    }
  }

  section {
    width: 1000px;
    flex-direction: row;
    margin: 40px auto 0;
  }
}
</style>
