<template>
    <router-link :to="route" class="w-fit p-1 rounded-md font-manrope flex items-center group text-nowrap" :class="[bg_color]">
        <span class="sm:text-sm text-xs uppercase" :class="[text_color, px]">
            {{ name }}
        </span>
        <div class="p-2 mr-1 rounded-md group-hover:translate-x-1 duration-300" :class="[icon_bg_color]">
            <rightRowIcon :color="icon_color" />
        </div>
    </router-link>
</template>

<script>
import rightRowIcon from '@/components/icons/right-row.vue';
export default {
    components: {
        rightRowIcon
    },
    props: {
        route: {
            type: String,
            required: true
        },
        bg_color: {
            type: String,
            default: 'bg-white'
        },
        text_color: {
            type: String,
            default: 'text-black'
        },
        icon_color: {
            type: String,
            default: '#fff'
        },
        icon_bg_color: {
            type: String,
            default: 'bg-[#0062B0]'
        },
        name: {
            type: String,
            required: true
        },
        px: {
            type: String,
            default: 'px-1'
        }
    },
}
</script>