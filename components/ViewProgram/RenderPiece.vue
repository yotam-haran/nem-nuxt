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
        <div v-if='!section' :style='titleStyle' v-html='text' class='pieceName' />
    </div>
</template>

<script>
/* eslint-disable */

export default {
  props: ['author', 'title', 'over', 'program', 'index', 'section'],
  computed: {
    authorDetails(){
      return this.author ? this.$store.state.authors[this.author] : null;
    },
    text(){
        if(this.section)
            return null;

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

<style lang='scss' scoped>
.pieceName {
  margin-bottom: 20px;
}
.authorYears {
  margin-left: 6px;
}
.sectionTitle {
    color: #008848;
    margin-top: 12px;
    font-size: 1.1em;
    font-weight: bold;

    & img {
        width: 12px;
        margin-right: 8px;
    }
}

@media screen and (min-width: 769px){
  .pieceName {
    margin-bottom: 0;
  }
}
</style>