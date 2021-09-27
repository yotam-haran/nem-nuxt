/* eslint-disable */

import { format, parse, compareAsc } from 'date-fns';

const locations = {
  mapa: { location: 'Studio MAPA Nederland, Haarlem', mapsRef: 'xf9sY5WrzBhDT2Yh9' },
  BUC: { location: 'Brighton Unitarian Church', mapsRef: 'bRaW4iUU8r2VDarv8', tix: 'https://www.brightonfringe.org/whats-on/the-french-connection-146524/' },
  'V&D': { location: 'V&D Haarlem', mapsRef: 'FxKCCnBXTL7t5Kke8', tix: 'https://mapa.stager.nl/web/tickets' },
  perdu: { location: 'Perdu Theater, Amsterdam', mapsRef: 'F3zFtvwqBKMYB7ag8', tix: '/tix/2021-10-10' }
}

const now = new Date();
let performances = [
    { program: 'isolated-souls', datetime: '25-09-2021 18:00', location: 'V&D' },
    { program: 'isolated-souls', datetime: '25-09-2021 20:00', location: 'V&D' },
    { program: 'isolated-souls', datetime: '26-09-2021 18:00', location: 'V&D' },
    { program: 'isolated-souls', datetime: '26-09-2021 20:00', location: 'V&D' },
    { program: 'isolated-souls', datetime: '10-10-2021 15:00', location: 'perdu' },
    { program: 'french-connection', datetime: '18-06-2021 18:30', location: 'BUC' },
    { program: 'french-connection', datetime: '18-06-2021 20:00', location: 'BUC' },
    { program: 'french-connection', datetime: '19-06-2021 18:30', location: 'BUC' },
    { program: 'french-connection', datetime: '19-06-2021 20:00', location: 'BUC' },
];
performances.forEach(p => p.datetime = parse(p.datetime, 'dd-MM-yyyy HH:mm', new Date()));
performances = { future: performances.filter(p => compareAsc(p.datetime, now) >= 0), past: performances.filter(p => compareAsc(p.datetime, now) < 0) };
Object.keys(performances).forEach(key => {
  const sortResult = {
    future: { true: 1, false: -1 },
    past: { true: -1, false: 1 }
  }
  performances[key] = performances[key]
    .sort((a, b) => a.datetime > b.datetime ? sortResult[key].true : sortResult[key].false)
    .map(p => ({
      ...p,
      dateObj: p.datetime,
      datetime: format(p.datetime, 'LLLL do, yyyy @ HH:mm'),
      ...locations[p.location]
    }))
})

export default performances;