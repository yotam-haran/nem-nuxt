<template>
  <section id='performances'>
    <div id='performancesImage'>
      <img alt='Nymphes et Monstres performing at MAPA' :src="$imagekit('nem-mapa', 'w-600')" />
    </div>
    <div :style='{ flex: 1 }'>
      <logo-title>Performances</logo-title>
      <h2>Upcoming</h2>
      <performance-list :performances='list.future' v-if='list.future.length' />
      <no-performances v-else />
      <div id='pastPerformances' v-if='list.past.length'>
        <h2>Past</h2>
        <performance-list :performances='list.past' />
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import NoPerformances from './NoPerformances';
import PerformanceList from './PerformanceList';
import list from '../../data/performanceList';
export { list as performanceList, NoPerformances, PerformanceList };

export default {
  data: () => ({ list }),
  components: { NoPerformances, PerformanceList }
}
</script>

<style scoped>
#performances > div:not(#performancesImage) {
  width: 90vw;
  margin-left: 5vw;
}
#performancesImage {
  margin: 0 0 20px;
  overflow: hidden;
  flex-shrink: 0;
  height: 480px;
}
#performancesImage img {
  max-width: 600px;
  transform: translate3d(-100px, -220px, 0);
}
#pastPerformances {
  margin-top: 32px;
}
h2 {
  font-weight: normal;
  margin: 8px 0;
}

@media screen and (min-width: 769px){
  #performances > div:not(#performancesImage) {
    width: auto;
    margin-left: 0;
  }
  #performancesImage {
    margin: 0 60px 0 0;
    border-radius: 6px;
    width: 320px;
    height: 800px;
  }
  #performancesImage img {
    transform: translate3d(-124px, 0, 0);
  }
  #pastPerformances {
    margin-top: 80px;
  }
  h2 {
    margin: 24px 0 12px;
  }
}
</style>