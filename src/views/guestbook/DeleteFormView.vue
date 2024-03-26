<template>

<div id="wrap">

    <AppHeader />
    <!-- // header -->

    <div id="container" class="clearfix">
        <div id="aside">
            <h2>방명록</h2>
            <ul>
                <li>일반방명록</li>
                <li>ajax방명록</li>
            </ul>
        </div>
        <!-- //aside -->

        <div id="content">
        
            <div id="content-head">
                <h3>일반방명록</h3>
                <div id="location">
                    <ul>
                        <li>홈</li>
                        <li>방명록</li>
                        <li class="last">일반방명록</li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>
            <!-- //content-head -->

            <div id="guestbook">
                <form v-on:submit.prevent="deleteOne">
                    <table id="guestDelete">
                        <colgroup>
                            <col style="width: 10%;">
                            <col style="width: 40%;">
                            <col style="width: 25%;">
                            <col style="width: 25%;">
                        </colgroup>
                        <tr>
                            <td>비밀번호</td>
                            <td><input type="password" name="password"></td>
                            <td class="text-left"><button type="submit">삭제</button></td>
                            <td><router-link to="/gb/list">[방명록으로 돌아가기]</router-link></td>
                        </tr>
                    </table>
                </form>
            </div>
            <!-- //guestbook -->
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
import '@/assets/css/guestbook.css'
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default{
    name : "DeleteFormView",
    components : {
        AppHeader,
        AppFooter
    },
    data (){
        return {

        };
    },
    methods : {
        deleteOne(){
            console.log("delete");
        }
    },
    created (){

    }    
};
</script>

<style>

</style>