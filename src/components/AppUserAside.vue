<template>
    <div id="aside">
        <h2>회원</h2>
        <ul>
            <li v-if="this.$store.state.authUser != null">
                <router-link to="/user/modifyform">회원정보</router-link>
            </li>
            <li v-if="this.$store.state.authUser == null">
                <router-link to="/user/loginform">로그인</router-link>
            </li>
            <li v-if="this.$store.state.authUser == null">
                <router-link to="/user/joinform">회원가입</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name : "AppUserAside",
    components : {},
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