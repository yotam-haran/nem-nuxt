<template>
    <email-form
        v-if='performance'
        :image='program && program.mobileImage.name'
        title='Reserve Tickets'
        templateId='reserve-tickets'
        :buttonText='{ send: "Reserve", success: "Tickets reserved successfully!" }'
    >
        <template #header>
            <div id='performanceDetails'>
                <div>
                    <nuxt-link :to='`/programs/${performance.program}`'>
                        {{ program.name }}
                    </nuxt-link>,
                    {{ formattedDate }}
                </div>
                <div>
                    <a :href='`https://goo.gl/maps/${performance.mapsRef}`' target='_blank' rel='noreferrer'>
                        <img alt='Location pin icon' :src="$imagekit('icons/map-pin.svg')" />
                    </a>
                    {{ performance.location }}
                </div>
            </div>
        </template>
        <template #mainInput>
            <div id='countWrapper'>
                How many tickets?
                <div>
                    <img :src='require("../../assets/icons/remove-icon.svg")' @click='changeCount(ticketCount - 1)' />
                    <input
                        name='ticket_count'
                        type='number'
                        :value='ticketCount'
                        @change='changeCount($event.target.value)'
                    />
                    <img :src='require("../../assets/icons/add-icon.svg")' @click='changeCount(ticketCount + 1)' />
                </div>
            </div>
        </template>
        <template #moreFields>
            <input type='text' name='user_comments' placeholder='Comments' />
            <input type='hidden' name='performance' :value='`${program.name}, ${formattedDate} @ ${performance.location}`' />
        </template>
    </email-form>
</template>

<script>
/* eslint-disable */
import isSameDay from 'date-fns/isSameDay';
import performanceList from '../../data/performanceList.js';
import format from 'date-fns/format';

export default {
    beforeMount(){
        if(!this.performance)
            this.$router.replace('/performances');
    },
    computed: {
        performance(){
            const performanceDate = new Date(this.$route.params.performanceDate);
            return performanceList.future.find(({ dateObj }) => isSameDay(dateObj, performanceDate));
        },
        formattedDate(){
            return format(new Date(this.$route.params.performanceDate), 'LLLL do Y');
        },
        program(){
            if(!this.performance)
                return null;

            return this.$store.state.programs[this.performance.program];
        }
    },
    data: () => ({ ticketCount: 1 }),
    methods: {
        changeCount(value){
            this.ticketCount = value > 0 ? value : 1;
        }
    }
}
</script>

<style lang='scss' scoped>
#performanceDetails {
    margin: 24px 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    & img {
        width: 14px;
        transform: translateY(1px);
        margin-right: 8px;
    }

    & > div {
        display: flex;
        align-items: center;
    }
}

input[name="comments"] {
    margin: 30px 0 12px !important;
}

#countWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 700;
    // padding-top: 1rem;

    & > div {
        display: flex;
        align-items: center;
        margin-top: 12px;
    }

    & img {
        cursor: pointer;
        
        &:hover {
            transform: scale(1.1);
        }
    }

    & input {
        width: 3rem;
        text-align: center;
        margin: 0 12px !important;
        font-size: 1.2rem !important;

        &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        /* Firefox */
        &[type=number] {
            -moz-appearance: textfield;
        }
    }
}

@media screen and (min-width: 789px) {
    #performanceDetails {
        flex-direction: row;
    }
}
</style>