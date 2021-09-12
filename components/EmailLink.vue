<template>
    <a @mousedown='mailto'><canvas :width='fontSize * 14.5' height='16' ref='canvas'></canvas></a>
</template>

<script>
/* eslint-disable */
export default {
    props: {
        fontSize: { type: Number, default: 15 }
    },
    mounted(){
        this.draw();
    },
    updated(){
        this.draw();
    },
    methods: {
        mailto(){
            window.location.href = 'mailto:nymphesmonstres@gmail.com';
        },
        draw(){
            const context = this.$refs.canvas.getContext('2d');
            context.font = `${this.fontSize}px Raleway`;
            context.fillStyle = '#007888';
            context.fillText('nymphesmonstres@gmail.com', 0, 12);
        }
    }
}
</script>

<style lang="scss" scoped>
canvas {
    cursor: pointer;
    transform: translate(2px, 4px);
}
</style>