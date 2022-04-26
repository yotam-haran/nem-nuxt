<template>
    <component :is='tagName' style="text-align: left">
        <img
            class='logoImage'
            :style='imgStyle'
            :src="$imagekit('icons/logo.svg', `w-40`)"
        />
        <slot></slot>
    </component>
</template>

<script>
/* eslint-disable */

export default {
    props: {
        tagName: { type: String, default: 'h1' },
        imgStyle: Object
    }
}
</script>