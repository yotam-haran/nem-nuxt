<template>
    <div :style='{ display: "contents" }'>
        <div v-if='author'>
            <template v-if='!index || author !== program[index - 1].author'>
            <b>{{ authorDetails.name }}</b>
            <br v-if='authorDetails.name.length >= 24' />
            <span v-if='program.findIndex(p => p.author === author) === index' className='authorYears'>
                {{ `(${authorDetails.years[0]} - ${authorDetails.years[1]})` }}
            </span>
            </template>
        </div>
        <div :style='titleStyle' v-html='text' class='pieceName' />
    </div>
</template>

<script>
/* eslint-disable */

export default {
  props: ['author', 'title', 'over', 'program', 'index'],
  computed: {
    authorDetails(){
      return this.$store.state.authors[this.author]
    },
    text(){
      const parse = str => str.replace(/\[(.*?)\]/g, '<i>$1</i>');
      let text = parse(this.title);
      if(this.over){
        const { title, author } = this.over;
        text += ' over ' + parse(title);
        if(author){
          const { name, years } = this.$store.state.authors[author]
          text += ` by ${name} (${years[0]} - ${years[1]})`;
        }
      }
      return text;
    },
    titleStyle(){
      return !this.author ? { gridColumn: 'span 2' } : undefined
    }
  }
}
</script>

<style scoped>
.pieceName {
  margin-bottom: 20px;
}
.authorYears {
  margin-left: 6px;
}

@media screen and (min-width: 769px){
  .pieceName {
    margin-bottom: 0;
  }
}
</style>