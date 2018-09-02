<template>
    <div id="App">
        <router-view/>
        <FooterGuide/>
    </div>
</template>

<script>
    import FooterGuide from './'

    export default{
        components: {
            FooterGuide
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
