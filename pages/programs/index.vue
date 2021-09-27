<template>
  <section id='programs'>
    <div id='programImages'>
      <template v-if='!program'>
        <div class='imageWrapper mobile top'>
          <img alt='Nymphes et Monstres peforming Scenes Pastorales' :src='$imagekit("pycombe")' />
        </div>
        <div :style='{ display: "contents" }' v-for='program in order' :key='program'>
          <div class='imageWrapper nonMobile' v-if='programs[program].images' :style='{ height: programs[program].images[0].height + "px" }'>
            <img
                :style='programs[program].images[0].style'
                :src="$imagekit(programs[program].images[0].name, `w-${widthOf(programs[program].images[0])}`)"
                :alt='programs[program].name'
            />
          </div>
        </div>
      </template>
      <template v-else-if='program.images'>
        <div class='imageWrapper nonMobile' v-for='image in program.images' :key='image.name' :style='{ height: image.height + "px" }'>
          <img :style='image.style' :src="$imagekit(image.name, `w-${widthOf(image)}`)" :alt='program.name' />
        </div>
        <div class='imageWrapper mobile' :style='{ height: program.mobileImage.height + "px" }'>
          <img
            :style='program.mobileImage.style'
            :src="$imagekit(program.mobileImage.name, `w-${widthOf(program.mobileImage)}`)"
            :alt='program.name'
        />
        </div>
      </template>
    </div>
    <div id='programDescriptions' v-if='!$route.params.program'>
      <logo-title>Our Programs</logo-title>
      <div :style='{ display: "contents" }' v-for='program in order' :key='program'>
        <h2>{{ programs[program].name }}</h2>
        <p v-html='programs[program].description'></p>
        <router-link :to='$route.path + `/${[program]}`'>More Details</router-link>
      </div>
    </div>
    <view-program v-else />
  </section>
</template>

<script>
/* eslint-disable */
export default {
    props: {
        program: Object
    },
    data: () => ({ order: ['french-connection', 'isolated-souls', 'scenes-pastorales', 'ode-a-la-musique'] }),
    computed: {
        programs(){
            return this.$store.state.programs
        }
    },
    methods: {
        widthOf(image){
            const { maxWidth } = image.style;
            if(maxWidth === '100vw')
                return 768;

            return maxWidth.replace('px', '');
        }
    }
}
</script>

<style type='css' scoped>
p {
  margin-top: 4px;
}
h2 {
  font-weight: normal;
  margin-bottom: 4px;
}
.imageWrapper {
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 2px 2px #eee;
  flex-shrink: 0;
  margin-right: 60px;
  margin-bottom: 20px;
}
.imageWrapper.nonMobile {
  display: none;
}
.imageWrapper.mobile {
  border-radius: 0;
  width: 100vw;
  box-shadow: none !important;
  margin-bottom: 40px;
}
.imageWrapper.mobile.top {
  height: 380px;
}
.imageWrapper.mobile.top img {
  width: 100vw;
  margin-top: -60px;
}
#programDescriptions {
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin-left: 5vw;
}
a {
  align-self: flex-end;
  margin: 8px 0 16px;
}

@media screen and (min-width: 769px){
  #programs {
    margin-top: 40px;
  }
  .imageWrapper.nonMobile {
    display: block;
    width: 340px;
  }
  .imageWrapper.mobile {
    display: none;
  }

  #programDescriptions {
    width: auto;
    margin: 0;
  }
}
</style>