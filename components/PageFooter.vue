<template>
    <footer>
        <div id='photosAttribution'>
            Photos by our dear friend <a href='https://www.facebook.com/tariqtkhawaja/'>Tariq Khawaja</a>
            <span v-if='$route.path === "/about"'>, icons by <a href="https://www.freepik.com" title="Freepik">Freepik</a> @ <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></span>
        </div>
        <div>
            Contact us at <email-link />
            <div id='copyright'>© Nymphes et Monstres 2021</div>
        </div>
        <div id='socialMedia'>
            <nuxt-link to='/subscribe' id='joinMailingList'>
                <img alt='Join mailing list' src='https://upload.wikimedia.org/wikipedia/commons/e/ec/Circle-icons-mail.svg' />
                <div>Join our mailing list</div>
            </nuxt-link>
            <a href='https://www.youtube.com/channel/UCjBoCifOzYxop5cfNX_qp2Q'>
                <img alt='Go to youtube channel' :src="$imagekit('icons/youtube.svg')" class='youtube' />
            </a>
            <a href='https://www.facebook.com/nymphesmonstres/'>
                <img alt='Go to facebook page' :src="$imagekit('icons/facebook.svg')" class='facebook' />
            </a>
        </div>
    </footer>
</template>

<style lang='scss'>
footer {
    background-color: rgb(174, 202, 253, 0.2);
    padding: 12px;
    padding-bottom: 80px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;

    & #copyright {
        margin-top: 4px;
    }
    & #photosAttribution {
        text-align: center;
        margin-bottom: 4px;
    }
}

#joinMailingList {
    display: flex;
    background-color: #fff;
    border-radius: 8px;
    padding: 4px;
    width: 112px;
    font-size: 14px;
    margin-right: 40px;
    cursor: pointer;
    box-shadow: 4px 4px 10px -6px #aaa;

    &:hover {
        transform: scale(1.05);
    }

    & img {
        width: 28px;
        margin-right: -6px;
        transform: none !important;
    }
}
#socialMedia {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 20px 0;

    & img:hover {
        transform: scale(1.1);
        cursor: pointer;
    }

    &  .youtube {
        max-width: 32px;
    }

    &  .facebook {
        max-width: 24px;
        margin-left: 16px;
        border-radius: 4px;
    }
}

@media screen and (min-width: 1020px) {
  footer {
    flex-direction: row;
    height: 78px;
    padding: 12px;
    padding-left: 24px;
  }
  footer #photosAttribution {
    margin-bottom: 0;
    text-align: left;
  }
  footer > div {
    width: 33%;
  }

  #socialMedia {
      margin: 0;
  }
}
</style>
