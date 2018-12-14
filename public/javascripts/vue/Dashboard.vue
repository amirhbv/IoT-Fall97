<template>
    <div id="vue-app" class="box box-primary">
        <div class="box-header with-border">
            <h3 class="box-title">
                افزودن تیکت
            </h3>
        </div>
        <div class="box-body">
            <ticket-form with-description
                description='فرستنده عزیز لطفاً درخواست‌های پشتیبانی خود را از طریق فرم زیر برای ما ارسال کنید. کارشناسان نجوا در اسرع وقت به درخواست‌ شما پاسخ می‌دهند. همچنین در صورت نیاز می‌توانید با شماره تلفن <span class="ltr fanum" style="display:inline-block;"> 021 - 44389021 </span>  تماس حاصل فرمایید.'
                >
            </ticket-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'dashboard',
        components: {
        },
        data: () => ({
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
            console.log("hiiiiii");
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
