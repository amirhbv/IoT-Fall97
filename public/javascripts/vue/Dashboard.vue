<template>
    <div id="vue-app">
        <!-- Main Header -->
        <header class="main-header">
            <!-- Logo -->
            <a href="index2.html" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>IoT</b></span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>IoT</b></span>
            </a>

            <!-- Header Navbar -->
            <nav class="navbar navbar-static-top" role="navigation">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <!-- Navbar Right Menu -->
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                <!-- User Account Menu -->
                <li class="dropdown user user-menu">
                    <!-- Menu Toggle Button -->
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <span >{{ username }}</span>
                    </a>
                <!-- Control Sidebar Toggle Button -->
                <li>
                    <a href="#" data-toggle="control-sidebar"><i class="fa fa-cogs"></i></a>
                </li>
                </ul>
            </div>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'dashboard',
        components: {
        },
        data: () => ({
            username: 'Amir'
        }),
        computed: {
        },
        methods: {
        },
        beforeCreate() {
            // $.ajaxSetup({
            //     crossDomain: true,
            //     xhrFields: {
            //         withCredentials: true,
            //     },
            // });
        },
        created() {
        },
        mounted() {
        },
    }
</script>

<style scoped>
.center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
