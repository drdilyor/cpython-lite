<template>
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="#000000" :d="icons[name]" /> <!-- account -->
    </svg>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        required: true,
    },
})
const icons = {
    home: 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z',
}
</script>