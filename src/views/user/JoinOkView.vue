<template>
    
<div id="wrap">

    <AppHeader/>

    <div id="container" class="clearfix">
        <AppUserAside/>
        <!-- //aside -->

        <div id="content">
        
            <div id="content-head">
                <h3>회원가입</h3>
                <div id="location">
                    <ul>
                        <li>홈</li>
                        <li>회원</li>
                        <li class="last">회원가입</li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
            <!-- //content-head -->

            <div id="user">
                <div id="joinOK">
                    <p class="text-large bold">
                        회원가입을 축하합니다.<br>
                        <br>
                        <router-link to="/user/loginform">[로그인하기]</router-link>
                    </p>
                </div>
                <!-- //joinOK -->
            </div>
            <!-- //user -->
        </div>
        <!-- //content  -->
    </div>
    <!-- //container  -->

    <AppFooter/>
    <!-- //footer -->

</div>
<!-- //wrap -->

</template>

<script>
import '@/assets/css/user.css';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppUserAside from '@/components/AppUserAside.vue';

export default{
    name : "JoinOkView",
    components : {
        AppHeader,
        AppFooter,
        AppUserAside
    },
    data (){
        return {

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