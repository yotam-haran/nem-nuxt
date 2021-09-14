<template>
  <div id='viewProgram'>
    <logo-title>{{ program.name }}</logo-title>
    <div v-if='program.guests' id='guests'>
      <div>Guest{{ program.guests.length > 1 ? 's' : '' }}</div>
      <div>
        <div v-for='(guest, index) in program.guests' :key='guest.name'>
          <span v-if='index'>; </span>
          {{ guest.name }}, {{ guest.instrument }}
        </div>
      </div>
    </div>
    <p id='description' v-html='program.description' />
    <h2>Program</h2>
    <div id='setList'>
      <render-piece
        v-for='(piece, index) in program.program'
        :key='piece.title'
        v-bind='piece'
        :program='program.program'
        :index='index'
      />
      <div v-if='!program.program.length' :style='{ gridColumn: "span 2", color: "#979797" }'>
        Contact us for more details about the music in this program.
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import RenderPiece from './RenderPiece';
export default {
  components: { RenderPiece },
  computed: {
    program(){
      const { program } = this.$route.params;
      if(!program)
        return null

      return this.$store.state.programs[program];
    }
  },
}
</script>

<style lang='scss'>
#viewProgram {
    width: 90vw;
    margin-left: 5vw;

    & h1 {
        font-size: 21px !important;
        letter-spacing: 2px !important;

        & > img {
            width: 24px !important;
            margin-bottom: 1px !important;
        }
    }

    h2 {
        font-weight: normal;
        margin: 0 0 12px;
    }
    #setList {
        display: flex;
        flex-direction: column;
    }
    // #setList > div :last-child {
    //     padding-bottom: 32px;
    // }
    #description {
        padding: 8px 0 24px;
    }

    #guests {
        display: flex;
        align-items: center;
        margin: 12px 0 8px;
        box-shadow: 4px 4px 12px -4px #ccc;
        width: fit-content;
        border-radius: 100px;
        overflow: hidden;

        & > div {
            display: flex;
            align-items: center;
            padding: 2px 20px;
        }

        &  > :first-child {
            background-color: rgb(174, 202, 253, 0.2);
            font-weight: 700;
        }
    }
}

@media screen and (min-width: 769px){
  #viewProgram {
    width: auto;
    margin-left: 0;

    h1 {
        font-size: 32px;
        letter-spacing: 4px;

        & > img {
            width: 32px;
        }
    }

    #setList {
        display: grid;
        grid-template-columns: 3fr 5fr;
        grid-gap: 16px 8px;
    }
  }
}
</style>