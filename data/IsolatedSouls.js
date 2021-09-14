/* eslint-disable */

export default {
  name: `Isolated Souls`,
  description: `
    Our newest program, created as a reaction to the global pandemic, <i>Isolated Souls</i> explores the complexity of emotions emerging from solitude, isolation and loneliness.
    During the Cornavirus pandemic, we found ourselves each locked down in different homes all over the Netherlands and in Israel, unable to perform together as a full group.
    This inspired us to create a program that would reflect the situation and its consequences, focusing on the individual
    performers' experiences through songs, poetry and solo music.
  `,
  program: [
    { section: 'Prelude' },
    { title: 'Improvisation' },
    { author: 'machy', title: 'Sarabande in D minor, transposed to C minor' },
    { section: 'Part 1 - Punto'},
    { title: 'Improvisation over [O Solitude]' },
    { author: 'purcell', title: '[O Solitude]' },
    { author: 'johnson', title: '[A vision of beauty]', over: { author: 'gaultier', title: '[Rossignol]' } },
    { section: 'Interlude'},
    { author: 'philidor', title: 'Improvisation on [Air en Musette]' },
    { section: 'Part 2 - Yotam'},
    { author: 'philidor', title: 'Suite No. IV for Flute and Bass in A minor, [Air en Musette], [Gavotte], [Siciliene] & [Paysanne]' },
    { author: 'camus', title: '[Rochers, vous etes sourdes] & [Autant que j´ai d´amour]' },
    { author: 'blake', title: '[A Poison Tree]', over: { author: 'visee', title: '[La Montfermeil]' } },
    { section: 'Interlude'},
    { author: 'bach', title: 'Improvisation on [Sarabande] from Partita in A minor for Flute Solo' },
    { section: 'Part 3 - Dorota'},
    { author: 'philidor', title: 'Suite No. IV for Flute and Bass in A minor, [Lentement] & [Courante]' },
    { author: 'purcell', title: '[The Blessed Virgin´s Expostulation]' },
    { author: 'johnson', title: 'Echo´s Song', over: { author: 'gallot', title: '[Allemande Le bout de l\'an de Mr. Gautier]' } },
    { section: 'Interlude'},
    { author: 'machy', title: '[Sarabande] from suite in G major' },
    { section: 'Part 4 - Kat'},
    { author: 'blake', title: 'Mad Song', over: { title: '[La Folia d´Espagne]' } },
    { author: 'lambert', title: '[Laissez durer la nuit]' }
  ],
  images: [
    { name: 'isolated-souls-kat', height: 340, style: { maxWidth: '600px', transform: 'translateX(-100px)' } },
    { name: 'isolated-souls-flute', height: 340, style: { maxWidth: '600px', transform: 'translateX(-80px)' } },
    { name: 'isolated-souls-top-of-lute', height: 240, style: { maxWidth: '460px', transform: 'translateX(-100px)' } }
  ],
  mobileImage: {
    name: 'isolated-souls-kat', height: 340, style: { maxWidth: '700px', transform: 'translate3d(-120px, 0, 0)' }
  }
}