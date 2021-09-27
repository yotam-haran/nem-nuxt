<template>
    <div id='media'>
        <logo-title>Photos</logo-title>
        <div id='photoGallery'>
            <div v-for='(image, index) of images' :key='image.name'>
                <img
                    :src='$imagekit(image.name, `w-${image.width || 140}`)'
                    :style='image.style'
                    @click='onDisplay = { index, type: "image" }'
                />
            </div>
        </div>
        <logo-title>Videos</logo-title>
        <div id='videoGallery'>
            <div v-for='(video, index) of videos' :key='video.id' @click='onDisplay = { index, type: "video" }'>
                <img
                    :src='`http://img.youtube.com/vi/${video.id}/hqdefault.jpg`'
                    :alt='video.title'
                />
                <img class='playVideo' :src='require("../../assets/play-icon.svg")' alt='Play video' />
            </div>
        </div>
        <dialog id='galleryDialog' v-if='onDisplay !== null' open='true'>
            <div v-if='onDisplay.type === "image"' id='imageDisplay'>
                <img :src='$imagekit(images[onDisplay.index].name, "q-100")' />
            </div>
            <div v-if='onDisplay.type === "video"' id='videoDisplay'>
                <iframe
                    :src='`https://www.youtube.com/embed/${videos[onDisplay.index].id}?autoplay=1`'
                    :title='videos[onDisplay.index].title'
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
            </div>
            <img id='closeIcon' @click='onDisplay = null' :src='require("../../assets/close-icon.svg")' />
            <img id='nextImage' @click='shift(1)' :src='require("../../assets/arrow-right.svg")' />
            <img id='previousImage' @click='shift(-1)' :src='require("../../assets/arrow-right.svg")' />
        </dialog>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    data: () => ({
        images: [
            { name: 'tariq-full-group', width: 252 },
            { name: 'nem-mapa', style: { transform: 'translateY(-28px)' } },
            { name: 'tariq-full-group-tree-trunk', style: {} },
            { name: 'pycombe', width: 160, style: { transform: 'translate(-16px, -16px)' } },
            { name: 'tariq-full-group-scatter', width: 252  },
            { name: 'enroute-to-uk', width: 200, style: { transform: 'translateX(-52px)' } },
            { name: 'utrecht-synagogue', width: 216, style: { transform: 'translateX(-32px)' } },
            { name: 'nem-mapa2', style: { transform: 'translateY(-24px)' } }
        ],
        videos: [
            { id: 'zAPq7UHsncA', title: 'William Blake - Mad Song' },
            { id: 'PAx0R0KDPV4', title: 'Monteclair - Restes Plaintifs' },
            { id: 'F4BrgNUxVCE', title: 'Lambert - Laissez Durer la Nuit'},
            { id: 'JKIIVErciB0', title: 'Bousset - Pourqoi Doux Rossignol' },
            { id: 'GHPcAgClav4', title: 'Nymphes et Monstres at MAPA 2017'},
            { id: 'nZe93qpchfE', title: 'Toss A Coin To Your Witcher'}
        ],
        onDisplay: null,
    }),
    methods: {
        shift(dir){
            if(dir > 0 && this.onDisplay.index === this.images.length - 1)
                return this.onDisplay.index = 0;
            if(dir < 0 && this.onDisplay.index === 0)
                return this.onDisplay.index = this.images.length - 1;

            return this.onDisplay.index += dir;
        }
    }
}
</script>

<style lang='scss'>
#media {
    margin: 0 auto;
    width: 568px;

    & h1 {
        margin: 28px 0 12px;
        font-size: 32px;

        & img {
            width: 32px !important;
            margin-top: 4px;
        }
    }
}
#photoGallery, #videoGallery {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 12px;
}

#videoGallery {
    margin-bottom: 80px;
    & > div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover .playVideo {
            opacity: 0.8;
            transform: scale(1.2);
        }
    }

    & img:not(.playVideo) {
        width: 282px;
        aspect-ratio: 4 / 3;
        margin-top: 2px;
    }

    & .playVideo {
        position: absolute;
        width: 40px;
        opacity: 0.5;
    }
}

#photoGallery {
    margin-bottom: 60px;
    & > div {
        width: 140px;
        height: 140px;
        overflow: hidden;
        margin-top: 2px;
        cursor: pointer;
    }    
}

#galleryDialog {
    border: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;

    & img {
        height: 90vh;
    }

    & iframe {
        height: 80vh;
        aspect-ratio: 1.77;
    }

    & #closeIcon {
        right: 20px;
        top: 4px;

        &:hover {
            transform: scale(1.1);
        }
    }

    & #closeIcon, & #nextImage, & #previousImage {
        position: absolute;
        cursor: pointer;
        width: 32px;
        height: 32px;
    }

    & #nextImage {
        right: 20px;

        &:hover {
            transform: scale(1.3);
        }
    }
    & #previousImage {
        left: 20px;
        transform: rotate(180deg);

        &:hover {
            transform: scale(1.3) rotate(180deg);
        }
    }
}

@media screen and (max-width: 640px){
    #media {
        width: 284px;
    }
    
    #galleryDialog {
        & img {
            height: unset;
            width: 100vw;
        }

        & #closeIcon {
            right: 12px;
            top: 12px;
        }

        & iframe {
            width: 100vw;
            height: 57vw;
        }
    }
}
</style>