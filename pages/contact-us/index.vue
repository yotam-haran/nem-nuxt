<template>
    <div :style='{ display: "contents" }'>
        <section id='contactUs'>
            <img alt='Nymphes et Monstres at a cafe in Belgium' :src="$imagekit('enroute-to-uk', 'w-500')" />
            <form id='contact-form' @submit='submit'>
                <logo-title>Send Us a Message</logo-title>
                <input type='text' name='user_name' placeholder='Name'>
                <input type='email' name='user_email' placeholder='Email Address'>
                <div :style='{ display: "flex", alignItems: "flex-start", marginTop: "24px" }'>
                    <textarea name='message' placeholder='Your message'></textarea>
                    <div
                        id='notARobot'
                        :class='{ "g-recaptcha": true, error: robotStatus === "error", success: robotStatus === "success" }'
                    />
                </div>
                <button :disabled='status === "sent"' :failed='status === "failed"'>
                    <div v-if='status === "sending"' class='lds-ellipsis'>
                        <div></div><div></div><div></div><div></div>
                    </div>
                    {{ status === null
                        ? 'Send'
                        : status === 'sent'
                            ? 'Email Sent Successfully!'
                            : status === 'failed'
                                ? 'Something went wrong. Try again...'
                                : null }}
                </button>
            </form>
        </section>
        <div id='also'>
            You are also welcome to email us directly at <email-link :fontSize='16' />,
            <br/> or <a href='https://m.me/nymphesmonstres' target='_blank'>message us on Facebook</a>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    mounted(){
        grecaptcha.render('notARobot', {
            size: 'compact',
            sitekey: process.env.sitekey,
            callback: 'resetRobotError'
        });
        window.resetRobotError = () => {
            console.log('yoooo')
            this.robotStatus = 'success';
        };
    },
    data: () => ({ status: null, robotStatus: null }),
    methods: {
        async submit(){
            event.preventDefault();
            const notARobot = Boolean(window.grecaptcha.getResponse());
            if(!notARobot)
                return this.robotStatus = 'error';
                
            try {
                this.status = 'sending';
                await window.emailjs.sendForm('service_a4yk3y4', 'template_lectpgo', '#contact-form', 'user_QZoTvQblLqQ0n6XeLbOuT')
                this.status = 'sent';
            }catch(error){
                console.log('FAILED...', error);
                this.status = 'failed';
            }
        }
    }
}
</script>

<style lang='scss'>
@use './style.scss';
</style>