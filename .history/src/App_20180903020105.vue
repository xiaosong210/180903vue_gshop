<template>
    <div id="App">
        <router-view/>
        <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
    import FooterGuide from './components/FooterGuide/FooterGuide.vue'
    import { reqFoodTypes } from './api'

    export default{
        components: {
            FooterGuide
        },
        async mounted(){
            const result = await reqFoodTypes()
            console.log(result)
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
