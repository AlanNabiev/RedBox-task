<template>
    <div class="output__container">
        <img 
            v-if="icon"
            :src="require(`@/assets/icons/${icon}.svg`)"
            >
        <p class="output__container--content"><slot /></p>
    </div>
    
</template>

<script>
export default {
    name: "BaseOutput",
    props:{
        icon: String,
    }
}
</script>

<style lang="scss" scoped>
    .output__container{
        display: flex;
        justify-items: center;
        margin-top: 14px;
        &--content{
            margin-left: 14px;
            font-size: 18px;
            color: #211536;
        }
    }

</style>