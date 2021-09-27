<template>
    <programs v-if='program' :program='program' />
</template>

<script>
/* eslint-disable */
import Programs from '../index.vue';
export default {
    beforeMount(){
        if(!this.program)
            this.$router.replace('/programs');
    },
    computed: {
        program(){
            const { program } = this.$route.params;
            return this.$store.state.programs[program];
        }
    },
    components: { Programs }
}
</script>