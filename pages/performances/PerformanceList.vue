<template>
  <div id='performanceList' :class='{ homeDisplay }'>
    <div v-for='performance in performances' :key='performance.datetime' :style='{ display: "contents" }'>
      <div class='performanceProgram' v-if='!homeDisplay'>
        <nuxt-link :to='`/programs/${performance.program}`'>{{ programs[performance.program].name }}</nuxt-link>
      </div>
      <div class='performanceDate'>{{ performance.datetime }}</div>
      <div class='performanceLocation'>
        <div>
          <a :href='`https://goo.gl/maps/${performance.mapsRef}`' target='_blank'>
          <img alt='Location pin icon' :src="$imagekit('icons/map-pin.svg')" /></a>
          {{ performance.location }}
        </div>
        <a :href='performance.tix' className='ticketsButton' target='_blank'>
          <img alt='Tickets icon' v-if='performance.tix' :src="$imagekit('icons/tickets.svg')" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    performances: Array,
    homeDisplay: Boolean
  },
  computed: {
    programs(){
      return this.$store.state.programs;
    }
  }
}
</script>

<style scoped>
#performanceList {
  display: flex;
  flex-direction: column;
  padding-top: 16px;
}
#performanceList div {
  display: flex;
  align-items: center;
}
.performanceLocation {
  padding-bottom: 20px;
  justify-content: space-between;
}
.performanceLocation img {
  max-width: 14px;
  margin: 0 8px;
}
.performanceLocation a {
  height: 20px;
}

.homeDisplay {
  padding: 16px 0 0 12px;
}

.ticketsButton {
  cursor: pointer;
  opacity: 0.5;
}

.ticketsButton img {
  max-width: none !important;
  width: 24px;
  transform: translateY(-2px);
}

.ticketsButton:hover {
  opacity: 1;
}


@media screen and (min-width: 769px){
  #performanceList {
    display: grid;
    grid-template-columns: 2fr 160px 3fr;
    grid-gap: 24px 12px;
  }
  .homeDisplay {
    padding: 0 0 16px 0;
    grid-template-columns: 2fr 3fr !important;
  }
  .performanceLocation {
    padding-bottom: 0;
  }
}
</style>