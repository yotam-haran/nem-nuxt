<template>
  <div id='topBanner' role='banner' aria-label='Hero Image'>
    <div id='text'>
      <div class='ensembleName'>Nymphes et Monstres</div>
      <div class='ensembleDescription'>French Baroque with a fresh perspective</div>
    </div>
  </div>
</template>

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
  width: 100%;
  background-image: url(https://ik.imagekit.io/nem/tr:q-60/tariq-full-group-background.jpg);
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
}

#topBanner #text {
  position: relative;
  padding: 0 12px 24px 0;
  z-index: 2;
  text-align: right;
  bottom: 92px;
}

.ensembleName {
  font-size: 36px;
}

.ensembleDescription {
  font-size: 18px;
}

@media screen and (min-width: 1020px) {
  #topBanner {
    height: 100vh;
    margin-top: 0;
    background-position-y: -160px;
    background-image: url(https://ik.imagekit.io/nem/tr:q-80/tariq-full-group-tree-trunk.jpg);
  }
  #topBanner #text {
    padding: 40px 80px;
    bottom: unset;
  }
  .ensembleName {
    font-size: 52px;
  }

  .ensembleDescription {
    font-size: 24px;
  }
}
</style>