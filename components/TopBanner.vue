<template>
  <div id='topBanner'>
    <div id='bannerImage'>
      <img alt="Nymphes et Monstres" :src="image">
    </div>
    <div id='text'>
      <div class='ensembleName'>Nymphes et Monstres</div>
      <div class='ensembleDescription'>French Baroque with a fresh perspective</div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  mounted(){
        const isMobile = window.innerWidth <= 768
        this.image = this.$imagekit(
            'tariq-full-group-' + (!isMobile ? 'tree-trunk' : 'background'),
            `q-${!isMobile ? 80 : 60},w-${window.innerWidth}`
        );
  },
  data: () => ({ image: null })
}
</script>

<style>
#topBanner {
  position: relative;
  z-index: 2;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  overflow: hidden;
  height: 100vh;
}

#bannerImage {
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
}
#topBanner img {
  height: 100vh;
}
#topBanner #text {
  position: relative;
  padding: 0 12px 24px 0;
  z-index: 2;
  text-align: right;
}

.ensembleName {
  font-size: 36px;
}

.ensembleDescription {
  font-size: 18px;
}

@media screen and (min-width: 769px) {
  #topBanner {
    height: 100vh;
    margin-top: 0;
  }
  #bannerImage {
    top: -160px;
  }
  #topBanner img {
    width: 100%;
    transform: none;
    height: auto;
  }
  #topBanner #text {
    padding: 40px 80px;
  }
  .ensembleName {
    font-size: 52px;
  }

  .ensembleDescription {
    font-size: 24px;
  }
}
</style>