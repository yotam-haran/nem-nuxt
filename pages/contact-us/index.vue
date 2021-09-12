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
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 12px;
  transform: translateX(16px);
}
.lds-ellipsis div {
  position: absolute;
  top: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.8s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.8s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 24px;
  animation: lds-ellipsis2 0.8s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 40px;
  animation: lds-ellipsis3 0.8s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(16px, 0);
  }
}

#contactUs  {
    & > img {
        width: 100vw;
    }

    form {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 90vw;
        margin: 5vw 0 0 5vw;
    }
    .g-recaptcha {
        width: 162px;
        height: 142px;
        border: 2px transparent groove;
        border-radius: 3px;

        &.error {
            border-color: hsl(0, 100%, 76%);
        }
        &.success {
            border-color: hsl(120, 100%, 76%);
        }
    }
    input, textarea, button {
        margin-top: 20px;
        padding: 8px;
        border-radius: 6px;
        border: 1px solid #ccc;
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
    }
    input:focus, textarea:focus {
        outline: none;
        border-color: #007888;
    }
    textarea {
        height: 120px;
        margin: 0;
        flex: 1;
        margin-right: 6px;
        height: 100%;
    }
    button {
        background-color: #240088;
        color: #fff;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: #1a0061;
        }

        &:disabled {
            background-color: hsl(150, 100%, 27%);
            cursor: auto;
        }

        &[failed="true"]{
            background-color: hsl(330, 100%, 27%);

            &:hover {
                background-color: hsl(330, 100%, 32%);
            }
        }
    }

    h1 {
        font-size: 24px !important;
        letter-spacing: 1px !important;

        & > img {
            width: 24px !important;
            margin-bottom: 4px !important;
        }
    }
}

#also {
    margin-top: 40px;
    margin-bottom: -2px;
    font-size: 20px;
}

@media screen and (min-width: 769px){
    #contactUs {
        & > img {
        margin-right: 24px;
        border-radius: 20px;
        width: 500px;
        }

        h1 {
            font-size: 36px;
            letter-spacing: 2px;

            & > img {
                width: 36px;
            }
        }
        form {
            width: 0;
            margin: 0;
        }
    }
}
</style>