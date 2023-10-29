<script setup>
    import WebHeader from '@/components/header.vue';
    import MainWorld from '@/components/main.vue';
    import WebFooter from '@/components/footer.vue';
    import WebSidebar from '@/components/sidebar.vue';
</script>
<template>
    <div class="container">
        <!-- <h1>Hello Home Page</h1>
        <WebHeader/>
        <MainWorld/>
        <WebFooter/> -->
        <div class="sidebar1">
            <WebSidebar/>
        </div>
        <div class="sidebar2">
            <div class="header1">
                <WebHeader/>
            </div>
            <div class="main1">
                <MainWorld/>
            </div>
            <div class="footer1">
                <WebFooter/>
            </div>
        </div>

    </div>
</template>
<style scoped>
    .container{
        width: 100%;
        height: 100vh;
        background-color: rgb(84, 219, 26);
        display: flex;
    }
    .sidebar1{
        width: 25%;
        height: 100%;
        background-color: chocolate;
    }
    .sidebar2{
        width: 75%;
        height: 100%;
        background-color: rgb(105, 70, 245);
    }
    .header1{
        width:100% ;
        height: 15%;
        background-color: deeppink;
    }
    .main1{
        width:100% ;
        height: 70%;
        /* background-color: blue; */
    }
    .footer1{
        width:100% ;
        height: 15%;
        background-color: rgb(216, 233, 24);
    }
</style>