<template>
    <div :style='{ display: "contents" }'>
        <section id='formWrapper'>
            <img alt='Nymphes et Monstres performing in Utrecht' :src="$imagekit('utrecht-synagogue', 'w-500,e-contrast,e-sharpen')" />
            <form
                action="https://katcarson.us1.list-manage.com/subscribe/post?u=01b91115c492f0a79fef40b63&amp;id=9606dec26a"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                class="validate"
                target="_blank"
                novalidate
            >
                <logo-title>Join Our Mailing List</logo-title>
                <input
                    placeholder='Email Address'
                    type="email"
                    value=""
                    name="EMAIL"
                    class="required email"
                    id="mce-EMAIL"
                />
                <input
                    placeholder='First Name'
                    type="text"
                    value=""
                    name="FNAME"
                    class=""
                    id="mce-FNAME"
                />
                <input
                    placeholder='Last Name'
                    type="text"
                    value=""
                    name="LNAME"
                    class=""
                    id="mce-LNAME"
                />
                <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_01b91115c492f0a79fef40b63_9606dec26a" tabindex="-1" value=""></div>
                <button name="subscribe" id="mc-embedded-subscribe" class="button">Subscribe</button>
                <!-- <button :disabled='status === "sent"' :failed='status === "failed"'>
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
                </button> -->
            </form>
            <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
        </section>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    mounted(){
        window.fnames = ['EMAIL', 'FNAME', 'LNAME'];
        window.ftypes = ['email', 'text', 'text'];
    }
}
</script>

<style lang='scss'>
@use '../../components/EmailForm.scss';

#formWrapper  {
    #mce-responses {
        text-align: center;
    }

    #mce-success-response {
        color: hsl(150, 100%, 27%);
        font-size: 20px;
        font-weight: bold;
        margin-top: 20px;
    }

    #mce-error-response {
        margin-top: 20px;
    }
}
</style>