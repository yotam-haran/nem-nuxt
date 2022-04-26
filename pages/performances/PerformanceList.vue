<template>
  <div id='performanceList' :class='{ homeDisplay }'>
    <div v-for='performance in performances' :key='performance.datetime' :style='{ display: "contents" }'>
      <div class='performanceProgram' v-if='!homeDisplay'>
        <nuxt-link :to='`/programs/${performance.program}`'>{{ programs[performance.program].name }}</nuxt-link>
      </div>
      <div class='performanceDate'>{{ performance.datetime }}</div>
      <div class='performanceLocation'>
        <div>
            <a :href='`https://goo.gl/maps/${performance.mapsRef}`' target='_blank' rel='noreferrer'>
                <img alt='Location pin icon' :src="$imagekit('icons/map-pin.svg')" />
            </a>
            {{ performance.location }}
        </div>
        <a
            v-if='!isPast && performance.tix'
            :href='performance.tix'
            class='ticketsButton'
            :target='performance.tix && performance.tix.startsWith("http") ? "_blank" : undefined'
            rel='noreferrer'
        >
          <img alt='Tickets icon' :src="$imagekit('icons/tickets.svg')" />
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
    homeDisplay: Boolean,
    isPast: Boolean
  },
  computed: {
    programs(){
      return this.$store.state.programs;
    }
  }
}
</script>

<style lang='scss' scoped>
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
  margin-right: 8px;
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


@media screen and (min-width: 1020px){
  #performanceList {
    display: grid;
    grid-template-columns: 2fr 180px 3fr;
    grid-gap: 1.5rem 1.1rem;
  }
  .homeDisplay {
    padding: 0 0 16px 0;
    grid-template-columns: 180px 3fr !important;
  }
  .performanceLocation {
    padding-bottom: 0;

    & img {
        margin-left: 1rem;
    }
  }
}
</style>