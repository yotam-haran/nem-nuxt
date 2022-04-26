<template>
  <div>
    <section class='ensembleAbout'>
      <img alt='Nymphes et Monstres' :src='image' />
      <div>
        <logo-title>About Us</logo-title>
        <p>
          The Amsterdam-based collective Nymphes et Monstres was founded by four musicians with a passion for French Baroque music,
          and a strong drive to bring this music closer to modern-day audiences. With a strong emphasis on a historical
          approach to emotional expression, we have made extra-musical material (such as declamation and movement)
          an integral part of our performances, with the goal of making the emotions expressed in the music more
          familiar to our contemporary viewers.
        </p>
        <p>
          Despite being deeply rooted in historical performance practice, we aim at a performance style that is modern
          on a very deep level, reaching beyond the circle of traditional concert-goers and usual concert venues.
          We believe that the French Baroque repertoire, as it is usually performed today, is often very difficult for
          audiences to grasp, thus becoming a niche for connoisseurs. The unique performance style we have created is
          not only intended to break this boundary, but also to show that new and old can be made inextricable from
          one another rather than imposing them superficially on each other.
        </p>
        <p>
          Our first steps were made in a collaboration with MAPA - the Haarlem based Moving Academy for Performing Arts -
          where we began developing the movement and staging style that has become a staple of our unique performances.
          Since then, we have performed in major venues such as the Rijksmuseum Amsterdam, the Utrecht Early Music
          Fringe Festival, and the MAfestival Brugge, along with several concert tours in the UK.
          We are proud that audiences, including those not accustomed to baroque music, have always found our
          performances both engaging and exciting.
        </p>
        <p>
          Our soprano, Kat, has used our work as a case study for her Master's research, which was focused on historical
          gesture and declamation as a tool for musical expression. Under the coaching of Prof. Jed Wentz, she has
          managed to further our understanding of how we can bring our beloved repertoire closer to our audience.
        </p>
      </div>
    </section>
    <h1 class='membersTitle'>Meet the Ensemble</h1>
    <div class='ensembleMembers'>
      <div class='ensembleMember'>
        <img alt='Flute icon' :src="$imagekit('icons/flute.svg')" class='instrument' />
        <img alt='Dorota Matejova' :src="$imagekit('headshot-dorota4', 'w-80,h-80')" class='headshot dorota' />
        <div class='text'>
          <div class='name'>Dorota Matejová</div>
          <p>
            Dorota is our traverso player, currently based in Den Haag and originally from Slovakia.
            Interested in a broader perspective on art, she followed her love for the traverso and moved to Amsterdam
            a few years ago to study with Prof. Jed Wentz, completing her bachelor studies at the Conservatory of Amsterdam.
            Dorota has also recently completed her Master's degree at the Royal Conservatory in the Hague with Kate Clark and Wilbert Hazelzet,
            receiving a summa cum laude for her Master's recital.
          </p>
          <p>
            Besides music, Dorota has a passion for movement and physical performance, and she has been working and
            training over the past few years under the guidance of Virág Dezso (artistic director of Studio MAPA Nederland).
            In spring 2017, she co-created her first physical music-theatre performance, <i>Sounds behind the Closed Window</i>,
            based on her own poetry. Dorota is the inspiration and driving force behind the incorporation of
            movement in our performances.
          </p>
        </div>
      </div>
      <div class='ensembleMember'>
        <img alt='Cello icon' :src="$imagekit('icons/cello.svg')" class='instrument' />
        <img alt='Yotam Haran' :src="$imagekit('headshot-yotam2', 'w-80,h-80')" class='headshot yotam' />
        <div class='text'>
          <div class='name'>Yotam Haran</div>
          <p>
            Our cellist, Yotam, is currently based in Tel Aviv. He completed his Bachelor's on Cello with Zvi Plesser and Michal Korman in Jerusalem,
            then moving to the Netherlands to pursue studies in historically informed performance. He studied with Prof. Viola de Hoog at the Conservatory of Amsterdam, completing his Master's,
            and later continued taking lessons with Dr. Job ter Haar. For a short period, he also studied historical acting with Prof. Jed Wentz, taking part in the Amsterdam Historical Acting Collective's
            sessions.
          </p>
          <p>
            Yotam has been a member of the Jerusalem Baroque Orchestra since 2010, and was a member of the Zeehelden Quartet, with which he took part in the Evolution of
            the String Quartet program at the Banff Centre for Arts and Creativity (with a full scholarship). His favorite repertoire is French music, from the 17th to the early 20th centuries,
            though he often enjoys performing other music as well, including with contemporary singer-songwriter Orel Tzafarov.
          </p>
        </div>
      </div>
      <div class='ensembleMember'>
        <img alt='Lute icon' :src="$imagekit('icons/lute.svg')" class='instrument' />
        <img alt='Punto Bawono' :src="$imagekit('headshot-punto2', 'w-80,h-80')" class='headshot punto' />
        <div class='text'>
          <div class='name'>Punto Bawono</div>
          <p>
            Punto, our ever-curious lutenist, is currently specializing in the baroque lute with Paul Beier at the
            Civica Scuola di Musica Claudio Abbado (Milan, Italy). He completed his bachelor studies on theorbo, lute,
            and baroque guitar with Mike Fentross and Joachim Held at the Royal Conservatoire in the Hague.
          </p>
          <p>
            Punto has played in master classes for many renowned musicians, including Hopkinson Smith, Peter Croton,
            Michael Chance, Emma Kirkby and David Miller. He also received coaching on historical performance practice
            and chamber music from specialists such as Ryo Terakado, Frank de Bruine, Lucia Swarts, Wilbert Hazelzet,
            Lorenzo Ghielmi, and Susan Williams. He performs regularly as a soloist, accompanist and basso continuo player,
            and he is very much appreciated not only for his fantastic musicianship, but also for his endless knowledge.
          </p>
        </div>
      </div>
      <div class='ensembleMember'>
        <img alt='Singer icon' :src="$imagekit('icons/singer.svg', 'w-32')" class='singer' />
        <img alt='Kat Carson' :src="$imagekit('headshot-kat2', 'w-80,h-80')" class='headshot kat' />
        <div class='text'>
          <div class='name'>Kat Carson</div>
          <p>
            Our soprano, Kat, is English by origin and currently based in Amsterdam. She specialises in Early music, with a
            passion for the Baroque repertoire, and has worked extensively in the UK and the Netherlands.
            After graduating with a first class degree from Sussex University, she moved to Amsterdam and completed her Master
            in Music Performance at FONTYS Hogeschool voor de Kunsten. Her thesis was based on interdisciplinary work focused
            on a combination of Historical Gesture and Modern Movement, an approach that is central to many of Nymphes et Monstres'
            performances.
          </p>
          <p>
            Kat has worked with various ensembles, from The Sixteen and Musica Secreta
            (whose CD ‘Lucrezia Borgia’s Daughter’ she also sang on) to the Galician Group Resonet. She has also performed in
            some of the largest venues in the UK and the Netherlands, from the Royal Albert Hall to Tivoli Vredenburg in Utrecht,
            as well as on both British Radio (radio 3) and Dutch radio (radio 4) on multiple occasions.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
    mounted(){
        const isMobile = window.innerWidth <= 768
        this.image = this.$imagekit(
            'tariq-full-group-' + (isMobile ? 'tree-trunk' : 'background'),
            `q-40,w-${!isMobile ? 420 : window.innerWidth}`
        );
    },
    data: () => ({ image: null }),
}
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>

<style>
.ensembleAbout > div {
  padding: 5vw;
}
.ensembleAbout > img {
  width: 100%;
}
.ensembleMembers {
  display: flex;
  margin: 0 auto;
  width: fit-content;
  flex-direction: column;
}
.ensembleMember {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px auto;
  width: 92vw;
  text-align: justify;
  position: relative;
}
.ensembleMember .instrument, .ensembleMember .singer {
  position: absolute;
  right: 4px;
  top: 4px;
  width: 32px;
  height: 32px;
}
.ensembleMember .singer {
  height: 44px;
  transform: rotate(8deg) translateY(-2px);
}

.ensembleMember .name {
  font-size: 32px;
  text-align: center;
  margin: 12px 0 0;
}
.headshot {
  border-radius: 200px;
  width: 80px;
  height: 80px;
}

.membersTitle {
  background-color: rgb(174, 202, 253, 0.2);
  padding: 12px;
  font-size: 28px;
  margin: 40px 0 4px;
  display: flex;
  justify-content: center;
}

@media screen and (min-width: 1020px){
  .ensembleAbout {
    margin-top: 40px;
  }
  .ensembleAbout > img {
    margin-right: 40px;
    width: 420px;
    margin-left: 0;
    border-radius: 6px;
  }
  .ensembleAbout > div {
    padding: 0;
  }

  .ensembleMembers {
    flex-direction: row;
    /* margin: 0 auto;
    width: fit-content; */
  }

  .ensembleMember {
    width: 240px;
    margin: 32px;
  }

  .membersTitle {
    font-size: 40px;
  }
}
</style>