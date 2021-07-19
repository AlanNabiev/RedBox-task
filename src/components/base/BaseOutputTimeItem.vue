<template>
    <div
        class="time__output">
        <label class="time__output--label">{{ label }}</label>
        <p class="time__output--content">
            <slot />
        </p>
        <img
        v-if="icon"
        :src="require(`@/assets/icons/${icon}.svg`)"
        class="w-4 h-4 time__output--icon">
    </div>
</template>

<script>
export default {
    name: "BaseOutput",
    props:{
        label: String,
        icon: String,
    }
}
</script>

<style lang="scss" scoped>
    .time__output{
        &--label {
            color: #211536;
            font-size: 16px;
            font-weight: 600;
            line-height: 1;
            position: absolute;
            top: -25px;
        }
        @apply px-4 py-3 rounded flex items-center w-full;
        height: 58px;
        border: 1px solid #CDB1FB;
        border-radius: 4px;
        position: relative;
        &--icon{
            position: absolute;
            right: 20px;
        }
    }  

</style>