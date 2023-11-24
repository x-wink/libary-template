<template>
    <div class="container">
        <input v-model="a" type="number" />
        <span>+</span>
        <input v-model="b" type="number" />
        <span>=</span>
        <span>{{ c }}</span>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { sum } from '../../src/index';
    const a = ref(0);
    const b = ref(0);
    const c = computed(() => sum(a.value, b.value));
</script>

<style scoped lang="less">
    .container {
        font-size: 24px;
        input {
            width: 100px;
            text-align: center;
            font-size: inherit;
            border: 1px solid gray;
            border-radius: 5px;
            outline: none;
        }
        span {
            margin: 0 5px;
        }
    }
</style>
