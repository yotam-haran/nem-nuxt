import ScenesPastorales from '../data/ScenesPastorales';
import OdeALaMusique from '../data/OdeALaMusique';
import IsolatedSouls from '../data/IsolatedSouls';
import FrenchConnection from '../data/FrenchConnection';

export const state = () => ({
    authors: {
      campra: { name: 'A. Campra', years: [1660, 1744], type: 'composer' },
      machy: { name: 'Le Sieur de Machy', years: [1655, 1700], type: 'composer' },
      purcell: { name: 'H. Purcell', years: [1659, 1695], type: 'composer' },
      johnson: { name: 'B. Johnson', years: [1572, 1637], type: 'writer' },
      gaultier: { name: 'E. Gaultier', years: [1575, 1651], type: 'composer' },
      philidor: { name: 'F.-A. D. Philidor', years: [1726, 1795], type: 'composer' },
      pdphilidor: { name: 'P. D. Philidor', years: [1681, 1731] },
      camus: { name: 'S. le Camus', years: [1610, 1677], type: 'composer' },
      blake: { name: 'W. Blake', years: [1757, 1827], type: 'writer' },
      visee: { name: 'R. de Visée', years: [1665, 1732], type: 'composer' },
      bach: { name: 'J.S. Bach', years: [1685, 1750], type: 'composer' },
      gallot: { name: 'J. Gallot', years: [1625, 'c. 1695'], type: 'composer' },
      lambert: { name: 'M. Lambert', years: [1610, 1696], type: 'composer' },
      hotteterre: { name: 'J. M. Hotteterre', years: [1674, 1763], type: 'composer' },
      bousset: { name: 'J. B. Drouart de Bousset', years: [1662, 1725], type: 'composer' },
      boismortier: { name: 'J. B. de Boismortier', years: [1689, 1755], type: 'composer' },
      losy: { name: 'Jan Antonín Losy', years: [1650, 1721], type: 'composer' },
      constable: { name: 'Henry Constable', years: [1562, 1613], type: 'writer' },
      marlowe: { name: 'Christopher Marlowe', years: [1564, 1593], type: 'writer' },
      raleigh: { name: 'Sir Walter Raleigh', years: [1552, 1618], type: 'writer' },
      monteclair: { name: 'M. P. de Montéclair', years: [1667, 1717], type: 'composer' }
    },
    programs: {
      'scenes-pastorales': ScenesPastorales,
      'isolated-souls': IsolatedSouls,
      'ode-a-la-musique': OdeALaMusique,
      'french-connection': FrenchConnection,
    }
});