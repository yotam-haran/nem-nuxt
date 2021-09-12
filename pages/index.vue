<template>
  <div>
    <div id='homeAbout'>
      <img alt='Nymphes et Monstres group photo' :src="$imagekit('tariq-full-group', 'w-440')" />
      <div id='text'>
        <logo-title class='homeSectionTitle'>About</logo-title>
        <p>
          Nymphes et Monstres is a collective specialized in French baroque music, but it is also much more than that.
          Nymphes et Monstres is a concept of what a modern-day performance of baroque music can and
          should be, with a view towards a concert experience that goes far beyond the music itself.
          By dissecting the pieces we perform, adding declamed text, movement, and at times also video art, we
          have developed a concert format that manages to bring our viewers deep into the story we tell.
          We are Kat Carson, Dorota Matejová, Punto Bawono, and Yotam Haran.
        </p>
        <nuxt-link class='readMore' to='/about'>More About Us</nuxt-link>
      </div>
    </div>
    <div id='homePerformances'>
      <div id='text'>
        <logo-title class='homeSectionTitle'>Upcoming</logo-title>
        <performance-list homeDisplay :performances='upcoming' v-if='upcoming.length' />
        <no-performances v-else />
        <nuxt-link class='readMore' to='/performances'>See All the Details</nuxt-link>
      </div>
      <img alt='Nymphes et Monstres in the woods' :src="$imagekit('tariq-full-group-scatter', 'w-440')" />
    </div>
  </div>
</template>

<script>

/* eslint-disable */
import { performanceList, NoPerformances, PerformanceList } from './performances';
export default {
  data: () => ({ upcoming: performanceList.future }),
  components: { NoPerformances, PerformanceList },
}
</script>

<style>
p {
  line-height: 1.4;
}
h1 {
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  letter-spacing: 4px;
}

#homeAbout {
  flex-direction: column-reverse;
  margin-top: 20px;
}
#homeAbout, #homePerformances {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
#homePerformances {
  margin-top: 40px;
  flex-direction: column;
}

#homePerformances .homeSectionTitle {
  margin-bottom: 8px;
}

#homeAbout > img, #homePerformances > img {
  width: 90vw;
  margin-top: 16px;
  margin-left: 5vw;
  border-radius: 8px;
}
#homeAbout > img {
  margin-right: 52px;
}
#homeAbout #text, #homePerformances #text {
  width: 90vw;
  margin-left: 5vw;
  text-align: justify;
  display: flex;
  flex-direction: column;
}

.readMore {
  align-self: flex-end;
  margin-top: 8px;
}

.homeSectionTitle {
  font-size: 24px;
  display: flex;
  align-items: center;
}
.homeSectionTitle img {
  width: 28px;
  margin-right: 12px;
  margin-bottom: 4px;
}

@media screen and (min-width: 769px){
  #homeAbout, #homePerformances {
    margin-top: 40px;
    flex-direction: row;
  }

  #homeAbout #text, #homePerformances #text, #homeAbout > img, #homePerformances > img {
    width: 440px;
    margin-left: 0;
    margin-top: 0;
  }

  #homePerformances > img {
    margin-left: 52px;
  }
}
</style>
