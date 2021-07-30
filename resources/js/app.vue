<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<style lang="sass">
a
    text-decoration: none !important

#app
    font-family: 'Nunito Sans', Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #000000

#nprogress
    .bar
        background: #F68D2E !important
        height: 6px

    .spinner-icon
        border: none !important

.product-item
    .product-item-content
        border-radius: 3px
        margin: .3rem
        text-align: center
        padding: 0.5rem 0

    .product-image
        cursor: pointer
        width: 75%
        height: 150px
        object-fit: contain
        //box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
</style>

