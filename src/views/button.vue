<script setup>
    import Button from 'primevue/button';
    import {ref} from 'views';
    const name = ref('click');
    const handleClick=()=>{
        name.value ='dbclick';
    }
</script>
<template>
    <Button :label="name" 
    @click="handleClick"
     />
</template>
<style scoped>
</style>