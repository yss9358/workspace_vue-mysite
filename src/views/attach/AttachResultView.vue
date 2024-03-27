<template>
<div id="wrap">

    <AppHeader />

    <div id="container" class="clearfix">
        <AppAttachAside />
        <!-- //aside -->     
        
        <div id="content">

            <div id="content-head">
                <h3>첨부파일연습</h3>
                <div id="location">
                    <ul>
                        <li>홈</li>
                        <li>갤러리</li>
                        <li class="last">첨부파일연습</li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
            <!-- //content-head -->        
        
            <div id="file">
                    <div>
                        <img id="resultImg" v-bind:src="path">
                    </div>
                    <p>
                        <router-link to="/attach/form" id="btnUpload">다시 업로드 하기</router-link>
                    </p>
            </div>
            <!-- //file -->
        </div>
        <!-- //content  -->
    </div>
    <!-- //container  -->
    <AppFooter />
    <!-- //footer -->
</div>
<!-- //wrap -->

</template>

<script>
import '@/assets/css/gallery.css'
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppAttachAside from '@/components/AppAttachAside.vue';

export default{
    name : "AttachResultView",
    components : {
        AppHeader,
        AppFooter,
        AppAttachAside
    },
    data (){
        return {
            path : `http://localhost:9000/image/${this.$route.query.saveName}`
        };
    },
    methods : {

    },
    created (){

    }    
};
</script>

<style>

</style>