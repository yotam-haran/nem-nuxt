<template>
    <div :style='{ display: "contents" }'>
        <email-form
            image='enroute-to-uk'
            title='Send Us a Message'
            templateId='contact-us'
            :buttonText='{ send: "Send", success: "Email Sent Successfully!" }'
        >
            <template #mainInput>
                <textarea name='message' placeholder='Your message'></textarea>
            </template>
        </email-form>
        <div id='also'>
            You are also welcome to email us directly at <email-link :fontSize='16' />,
            <br/> or <a href='https://m.me/nymphesmonstres' target='_blank'>message us on Facebook</a>
        </div>
    </div>
</template>