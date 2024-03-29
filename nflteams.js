const teams = [
    {
      teamAbv: 'ARI',
      teamCity: 'Arizona',
      currentStreak: [],
      loss: '13',
      teamName: 'Cardinals',
      nflComLogo1: 'https://static.www.nfl.com/image/private/f_auto/league/u9fltoslqdsyao8cpm0k',
      Roster: [],
      teamID: '1',
      tie: '0',
      pa: '455',
      pf: '330',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ari.png',
      wins: '4',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'ATL',
      teamCity: 'Atlanta',
      currentStreak: [],
      loss: '10',
      teamName: 'Falcons',
      nflComLogo1: 'https://static.www.nfl.com/image/private/f_auto/league/d8m7hzpsbrl6pnqht8op',
      Roster: [],
      teamID: '2',
      tie: '0',
      pa: '373',
      pf: '321',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/atl.png',
      wins: '7',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'BAL',
      teamCity: 'Baltimore',
      currentStreak: [],
      loss: '4',
      teamName: 'Ravens',
      nflComLogo1: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/ucsdijmddsqcj1i9tddd',
      Roster: [],
      teamID: '3',
      tie: '0',
      pa: '280',
      pf: '483',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/bal.png',
      wins: '13',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'BUF',
      teamCity: 'Buffalo',
      currentStreak: [],
      loss: '6',
      teamName: 'Bills',
      nflComLogo1: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/giphcy6ie9mxbnldntsf',
      Roster: [],
      teamID: '4',
      tie: '0',
      pa: '311',
      pf: '451',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/buf.png',
      wins: '11',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'CAR',
      teamCity: 'Carolina',
      currentStreak: [],
      loss: '15',
      teamName: 'Panthers',
      nflComLogo1: 'https://static.www.nfl.com/image/private/f_auto/league/ervfzgrqdpnc7lh5gqwq',
      Roster: [],
      teamID: '5',
      tie: '0',
      pa: '416',
      pf: '236',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/car.png',
      wins: '2',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'CHI',
      teamCity: 'Chicago',
      currentStreak: [],
      loss: '10',
      teamName: 'Bears',
      nflComLogo1: 'https://static.www.nfl.com/image/private/f_auto/league/wb3ehpt7xhkstyaxwjl1',
      Roster: [],
      teamID: '6',
      tie: '0',
      pa: '379',
      pf: '360',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/chi.png',
      wins: '7',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'CIN',
      teamCity: 'Cincinnati',
      currentStreak: [],
      loss: '8',
      teamName: 'Bengals',
      nflComLogo1: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/okxpteoliyayufypqalq',
      Roster: [],
      teamID: '7',
      tie: '0',
      pa: '384',
      pf: '366',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/cin.png',
      wins: '9',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'CLE',
      teamCity: 'Cleveland',
      currentStreak: [],
      loss: '6',
      teamName: 'Browns',
      nflComLogo1: 'https://static.www.nfl.com/image/private/f_auto/league/fgbn8acp4opvyxk13dcy',
      Roster: [],
      teamID: '8',
      tie: '0',
      pa: '362',
      pf: '396',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/cle.png',
      wins: '11',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'DAL',
      teamCity: 'Dallas',
      currentStreak: [],
      loss: '5',
      teamName: 'Cowboys',
      nflComLogo1: 'https://static.www.nfl.com/image/private/f_auto/league/ieid8hoygzdlmzo0tnf6',
      Roster: [],
      teamID: '9',
      tie: '0',
      pa: '315',
      pf: '509',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/dal.png',
      wins: '12',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'DEN',
      teamCity: 'Denver',
      currentStreak: [],
      loss: '9',
      teamName: 'Broncos',
      nflComLogo1: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/t0p7m5cjdjy18rnzzqbx',
      Roster: [],
      teamID: '10',
      tie: '0',
      pa: '413',
      pf: '357',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/den.png',
      wins: '8',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'DET',
      teamCity: 'Detroit',
      currentStreak: [],
      loss: '5',
      teamName: 'Lions',
      nflComLogo1: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/ocvxwnapdvwevupe4tpr',
      Roster: [],
      teamID: '11',
      tie: '0',
      pa: '395',
      pf: '461',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/det.png',
      wins: '12',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'GB',
      teamCity: 'Green Bay',
      currentStreak: [],
      loss: '8',
      teamName: 'Packers',
      nflComLogo1: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/gppfvr7n8gljgjaqux2x',
      Roster: [],
      teamID: '12',
      tie: '0',
      pa: '350',
      pf: '383',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/gb.png',
      wins: '9',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'HOU',
      teamCity: 'Houston',
      currentStreak: [],
      loss: '7',
      teamName: 'Texans',
      nflComLogo1: 'https://static.www.nfl.com/image/private/f_auto/league/bpx88i8nw4nnabuq0oob',
      Roster: [],
      teamID: '13',
      tie: '0',
      pa: '353',
      pf: '377',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/hou.png',
      wins: '10',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'IND',
      teamCity: 'Indianapolis',
      currentStreak: [],
      loss: '8',
      teamName: 'Colts',
      nflComLogo1: 'https://static.www.nfl.com/image/private/f_auto/league/ketwqeuschqzjsllbid5',
      Roster: [],
      teamID: '14',
      tie: '0',
      pa: '415',
      pf: '396',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ind.png',
      wins: '9',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'JAX',
      teamCity: 'Jacksonville',
      currentStreak: [],
      loss: '8',
      teamName: 'Jaguars',
      nflComLogo1: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/qycbib6ivrm9dqaexryk',
      Roster: [],
      teamID: '15',
      tie: '0',
      pa: '371',
      pf: '377',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/jax.png',
      wins: '9',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'KC',
      teamCity: 'Kansas City',
      currentStreak: [],
      loss: '6',
      teamName: 'Chiefs',
      nflComLogo1: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/ujshjqvmnxce8m4obmvs',
      Roster: [],
      teamID: '16',
      tie: '0',
      pa: '294',
      pf: '371',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/kc.png',
      wins: '11',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'LV',
      teamCity: 'Las Vegas',
      currentStreak: [],
      loss: '9',
      teamName: 'Raiders',
      nflComLogo1: 'https://static.www.nfl.com/image/private/f_auto/league/gzcojbzcyjgubgyb6xf2',
      Roster: [],
      teamID: '17',
      tie: '0',
      pa: '331',
      pf: '332',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lv.png',
      wins: '8',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'LAC',
      teamCity: 'Los Angeles',
      currentStreak: [],
      loss: '12',
      teamName: 'Chargers',
      nflComLogo1: 'https://static.www.nfl.com/image/private/f_auto/league/dhfidtn8jrumakbogeu4',
      Roster: [],
      teamID: '18',
      tie: '0',
      pa: '398',
      pf: '346',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lac.png',
      wins: '5',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'LAR',
      teamCity: 'Los Angeles',
      currentStreak: [],
      loss: '7',
      teamName: 'Rams',
      nflComLogo1: 'https://static.www.nfl.com/image/private/f_auto/league/ayvwcmluj2ohkdlbiegi',
      Roster: [],
      teamID: '19',
      tie: '0',
      pa: '377',
      pf: '404',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/lar.png',
      wins: '10',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'MIA',
      teamCity: 'Miami',
      currentStreak: [],
      loss: '6',
      teamName: 'Dolphins',
      nflComLogo1: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/lits6p8ycthy9to70bnt',
      Roster: [],
      teamID: '20',
      tie: '0',
      pa: '391',
      pf: '496',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/mia.png',
      wins: '11',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'MIN',
      teamCity: 'Minnesota',
      currentStreak: [],
      loss: '10',
      teamName: 'Vikings',
      nflComLogo1: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/teguylrnqqmfcwxvcmmz',
      Roster: [],
      teamID: '21',
      tie: '0',
      pa: '362',
      pf: '344',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/min.png',
      wins: '7',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'NE',
      teamCity: 'New England',
      currentStreak: [],
      loss: '13',
      teamName: 'Patriots',
      nflComLogo1: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/moyfxx3dq5pio4aiftnc',
      Roster: [],
      teamID: '22',
      tie: '0',
      pa: '366',
      pf: '236',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ne.png',
      wins: '4',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'NO',
      teamCity: 'New Orleans',
      currentStreak: [],
      loss: '8',
      teamName: 'Saints',
      nflComLogo1: 'https://static.www.nfl.com/image/private/f_auto/league/grhjkahghjkk17v43hdx',
      Roster: [],
      teamID: '23',
      tie: '0',
      pa: '327',
      pf: '402',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/no.png',
      wins: '9',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'NYG',
      teamCity: 'New York',
      currentStreak: [],
      loss: '11',
      teamName: 'Giants',
      nflComLogo1: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/t6mhdmgizi6qhndh8b9p',
      Roster: [],
      teamID: '24',
      tie: '0',
      pa: '407',
      pf: '266',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/nyg.png',
      wins: '6',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'NYJ',
      teamCity: 'New York',
      currentStreak: [],
      loss: '10',
      teamName: 'Jets',
      nflComLogo1: 'https://static.www.nfl.com/image/private/f_auto/league/ekijosiae96gektbo4iw',
      Roster: [],
      teamID: '25',
      tie: '0',
      pa: '355',
      pf: '268',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/nyj.png',
      wins: '7',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'PIT',
      teamCity: 'Pittsburgh',
      currentStreak: [],
      loss: '7',
      teamName: 'Steelers',
      nflComLogo1: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/xujg9t3t4u5nmjgr54wx',
      Roster: [],
      teamID: '26',
      tie: '0',
      pa: '324',
      pf: '304',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/pit.png',
      wins: '10',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'PHI',
      teamCity: 'Philadelphia',
      currentStreak: [],
      loss: '6',
      teamName: 'Eagles',
      nflComLogo1: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/puhrqgj71gobgdkdo6uq',
      Roster: [],
      teamID: '27',
      tie: '0',
      pa: '428',
      pf: '433',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/phi.png',
      wins: '11',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'SF',
      teamCity: 'San Francisco',
      currentStreak: [],
      loss: '5',
      teamName: '49ers',
      nflComLogo1: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/dxibuyxbk0b9ua5ih9hn',
      Roster: [],
      teamID: '28',
      tie: '0',
      pa: '298',
      pf: '491',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sf.png',
      wins: '12',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'SEA',
      teamCity: 'Seattle',
      currentStreak: [],
      loss: '8',
      teamName: 'Seahawks',
      nflComLogo1: 'https://res.cloudinary.com/nflleague/image/private/f_auto/league/gcytzwpjdzbpwnwxincg',
      Roster: [],
      teamID: '29',
      tie: '0',
      pa: '402',
      pf: '364',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/sea.png',
      wins: '9',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'TB',
      teamCity: 'Tampa Bay',
      currentStreak: [],
      loss: '8',
      teamName: 'Buccaneers',
      nflComLogo1: 'https://static.www.nfl.com/image/private/f_auto/league/v8uqiualryypwqgvwcih',
      Roster: [],
      teamID: '30',
      tie: '0',
      pa: '325',
      pf: '348',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/tb.png',
      wins: '9',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'TEN',
      teamCity: 'Tennessee',
      currentStreak: [],
      loss: '11',
      teamName: 'Titans',
      nflComLogo1: 'https://static.www.nfl.com/image/private/f_auto/league/pln44vuzugjgipyidsre',
      Roster: [],
      teamID: '31',
      tie: '0',
      pa: '367',
      pf: '305',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/ten.png',
      wins: '6',
      topPerformers: [],
      teamStats: []
    },
    {
      teamAbv: 'WSH',
      teamCity: 'Washington',
      currentStreak: [],
      loss: '13',
      teamName: 'Commanders',
      nflComLogo1: 'https://static.www.nfl.com/image/private/f_auto/league/xymxwrxtyj9fhaemhdyd',
      Roster: [],
      teamID: '32',
      tie: '0',
      pa: '518',
      pf: '329',
      espnLogo1: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/wsh.png',
      wins: '4',
      topPerformers: [],
      teamStats: []
    }
  ]