<template>
    <section id='formWrapper'>
        <img alt='Nymphes et Monstres at a cafe in Belgium' :src="$imagekit(image, 'w-500')" />
        <form :id='templateId' @submit='submit($event)'>
            <logo-title>{{ title }}</logo-title>
            <slot name='header'></slot>
            <input type='text' name='user_name' placeholder='Name'>
            <input type='email' name='user_email' placeholder='Email Address'>
            <div id='mainInput'>
                <slot name='mainInput'></slot>
                <!-- <div
                    id='notARobot'
                    :class='{
                        "g-recaptcha": true,
                        error: robotStatus === "error",
                        success: robotStatus === "success",
                        compact: captchaSize === "compact"
                    }'
                /> -->
            </div>
            <slot name='moreFields'></slot>
            <button :disabled='status === "sent"' :failed='status === "failed"'>
                <div v-if='status === "sending"' class='lds-ellipsis'>
                    <div></div><div></div><div></div><div></div>
                </div>
                {{ status === null
                    ? buttonText.send
                    : status === 'sent'
                        ? buttonText.success
                        : status === 'failed'
                            ? 'Something went wrong. Try again...'
                            : null }}
            </button>
        </form>
    </section>
</template>

<script>
/* eslint-disable */

export default {
    mounted(){
        // const handleRecaptcha = () => {
        //     if(!window.grecaptcha || !window.grecaptcha.render)
        //         return setTimeout(handleRecaptcha, 100);

        //     window.grecaptcha.render('notARobot', {
        //         size: this.captchaSize,
        //         sitekey: process.env.sitekey,
        //         callback: 'resetRobotError'
        //     });
        // }
        // handleRecaptcha();
        // window.resetRobotError = () => this.robotStatus = 'success';
    },
    props: {
        image: String,
        title: String,
        templateId: String,
        buttonText: Object,
        captchaSize: { type: String, default: 'compact', validator: value => ['compact', 'normal'].includes(value) }
    },
    data: () => ({ status: null, robotStatus: null }),
    methods: {
        async submit(event){
            event.preventDefault();
            // const notARobot = Boolean(window.grecaptcha.getResponse());
            // if(!notARobot)
            //     return this.robotStatus = 'error';
                
            try {
                this.status = 'sending';
                const { templateId } = this;
                await window.emailjs.sendForm('service_a4yk3y4', templateId, '#' + templateId, 'user_QZoTvQblLqQ0n6XeLbOuT')
                this.status = 'sent';
            }catch(error){
                console.error('FAILED...', error);
                this.status = 'failed';
            }
        }
    }
}
</script>

<style lang='scss'>
@use './EmailForm.scss';
</style>