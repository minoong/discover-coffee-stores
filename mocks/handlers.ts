import { rest } from 'msw'
import type { Places } from './types'

export const handlers = [
  rest.get('https://api.foursquare.com/v3/places/search', (_req, res, ctx) => {
    return res(
      ctx.json<Places>({
        results: [
          {
            fsq_id: '5890a1dc7ff1e4019025b42b',
            categories: [
              {
                id: 13002,
                name: '빵집',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/food/bakery_',
                  suffix: '.png',
                },
              },
              {
                id: 13068,
                name: 'American Restaurant',
                icon: {
                  prefix:
                    'https://ss3.4sqi.net/img/categories_v2/food/default_',
                  suffix: '.png',
                },
              },
              {
                id: 13334,
                name: 'Sandwich Restaurant',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/food/deli_',
                  suffix: '.png',
                },
              },
            ],
            chains: [],
            distance: 699,
            geocodes: {
              main: {
                latitude: 40.737678,
                longitude: -73.987693,
              },
              roof: {
                latitude: 40.737678,
                longitude: -73.987693,
              },
            },
            link: '/v3/places/5890a1dc7ff1e4019025b42b',
            location: {
              address: '103 E 19th St',
              census_block: '360610050001000',
              country: 'US',
              cross_street: 'btwn Park Avenue S & Irving Pl',
              dma: 'New York',
              formatted_address:
                '103 E 19th St (btwn Park Avenue S & Irving Pl), New York, NY 10003',
              locality: '뉴욕',
              neighborhood: ['Chelsea'],
              postcode: '10003',
              region: '뉴욕 주',
            },
            name: 'Daily Provisions',
            related_places: {},
            timezone: 'America/New_York',
          },
          {
            fsq_id: '4aa52d50f964a520834720e3',
            categories: [
              {
                id: 13031,
                name: 'Burger Joint',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/food/burger_',
                  suffix: '.png',
                },
              },
              {
                id: 13034,
                name: '카페',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/food/cafe_',
                  suffix: '.png',
                },
              },
              {
                id: 13035,
                name: '커피숍',
                icon: {
                  prefix:
                    'https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_',
                  suffix: '.png',
                },
              },
            ],
            chains: [],
            distance: 344,
            geocodes: {
              main: {
                latitude: 40.745704,
                longitude: -73.988139,
              },
              roof: {
                latitude: 40.745704,
                longitude: -73.988139,
              },
            },
            link: '/v3/places/4aa52d50f964a520834720e3',
            location: {
              address: '18 W 29th St',
              address_extended: 'Fl 3',
              census_block: '360610076002004',
              country: 'US',
              cross_street: 'at Broadway',
              dma: 'New York',
              formatted_address:
                '18 W 29th St (at Broadway), New York, NY 10001',
              locality: '뉴욕',
              neighborhood: ['Flatiron'],
              postcode: '10001',
              region: '뉴욕 주',
            },
            name: 'Stumptown Coffee Roasters',
            related_places: {
              parent: {
                fsq_id: '4a0e0f85f964a520bf751fe3',
                name: 'Ace Hotel New York',
              },
            },
            timezone: 'America/New_York',
          },
          {
            fsq_id: '519a94e3498e722d3d9ae1bf',
            categories: [
              {
                id: 13035,
                name: '커피숍',
                icon: {
                  prefix:
                    'https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_',
                  suffix: '.png',
                },
              },
              {
                id: 13065,
                name: '음식점',
                icon: {
                  prefix:
                    'https://ss3.4sqi.net/img/categories_v2/food/default_',
                  suffix: '.png',
                },
              },
            ],
            chains: [],
            distance: 1243,
            geocodes: {
              main: {
                latitude: 40.745971,
                longitude: -74.00501,
              },
            },
            link: '/v3/places/519a94e3498e722d3d9ae1bf',
            location: {
              address: '180 10th Ave',
              census_block: '360610089004001',
              country: 'US',
              cross_street: '',
              dma: 'New York',
              formatted_address: '180 10th Ave, New York, NY 10011',
              locality: '뉴욕',
              neighborhood: ['Chelsea'],
              postcode: '10011',
              region: '뉴욕 주',
            },
            name: 'Intelligentsia Coffee',
            related_places: {
              parent: {
                fsq_id: '515a1b3ee4b0f84f522c4b7f',
                name: 'The High Line Hotel',
              },
            },
            timezone: 'America/New_York',
          },
          {
            fsq_id: '5a5e29ae0868a24e8b9a8f1e',
            categories: [
              {
                id: 13028,
                name: 'Breakfast Spot',
                icon: {
                  prefix:
                    'https://ss3.4sqi.net/img/categories_v2/food/breakfast_',
                  suffix: '.png',
                },
              },
            ],
            chains: [],
            distance: 54,
            geocodes: {
              main: {
                latitude: 40.743379,
                longitude: -73.990319,
              },
              roof: {
                latitude: 40.743379,
                longitude: -73.990319,
              },
            },
            link: '/v3/places/5a5e29ae0868a24e8b9a8f1e',
            location: {
              address: '22 W 25th St',
              census_block: '360610058002002',
              country: 'US',
              cross_street: 'btwn 6th Ave & Broadway',
              dma: 'New York',
              formatted_address:
                '22 W 25th St (btwn 6th Ave & Broadway), New York, NY 10010',
              locality: '뉴욕',
              neighborhood: ['Chelsea'],
              postcode: '10010',
              region: '뉴욕 주',
            },
            name: 'Maman',
            related_places: {},
            timezone: 'America/New_York',
          },
          {
            fsq_id: '5b9d8e69b6eedb002c72a39e',
            categories: [
              {
                id: 13034,
                name: '카페',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/food/cafe_',
                  suffix: '.png',
                },
              },
              {
                id: 13035,
                name: '커피숍',
                icon: {
                  prefix:
                    'https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_',
                  suffix: '.png',
                },
              },
            ],
            chains: [],
            distance: 525,
            geocodes: {
              main: {
                latitude: 40.739151,
                longitude: -73.989061,
              },
              roof: {
                latitude: 40.739151,
                longitude: -73.989061,
              },
            },
            link: '/v3/places/5b9d8e69b6eedb002c72a39e',
            location: {
              address: '25 E 20th St',
              census_block: '360610052001000',
              country: 'US',
              cross_street: 'btwn Broadway & Park Ave S',
              dma: 'New York',
              formatted_address:
                '25 E 20th St (btwn Broadway & Park Ave S), New York, NY 10003',
              locality: '뉴욕',
              neighborhood: ['Chelsea'],
              postcode: '10003',
              region: '뉴욕 주',
            },
            name: 'Devoción',
            related_places: {},
            timezone: 'America/New_York',
          },
          {
            fsq_id: '512f8233e4b04458d4385195',
            categories: [
              {
                id: 13034,
                name: '카페',
                icon: {
                  prefix: 'https://ss3.4sqi.net/img/categories_v2/food/cafe_',
                  suffix: '.png',
                },
              },
              {
                id: 13035,
                name: '커피숍',
                icon: {
                  prefix:
                    'https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_',
                  suffix: '.png',
                },
              },
              {
                id: 13065,
                name: '음식점',
                icon: {
                  prefix:
                    'https://ss3.4sqi.net/img/categories_v2/food/default_',
                  suffix: '.png',
                },
              },
            ],
            chains: [],
            distance: 1337,
            geocodes: {
              main: {
                latitude: 40.732709,
                longitude: -73.997846,
              },
              roof: {
                latitude: 40.732709,
                longitude: -73.997846,
              },
            },
            link: '/v3/places/512f8233e4b04458d4385195',
            location: {
              address: '30 W 8th St',
              census_block: '360610063005000',
              country: 'US',
              cross_street: 'at MacDougal St',
              dma: 'New York',
              formatted_address:
                '30 W 8th St (at MacDougal St), New York, NY 10011',
              locality: '뉴욕',
              neighborhood: ['Downtown'],
              postcode: '10011',
              region: '뉴욕 주',
            },
            name: 'Stumptown Coffee Roasters',
            related_places: {},
            timezone: 'America/New_York',
          },
        ],
        context: {
          geo_bounds: {
            circle: {
              center: {
                latitude: 40.74356310868958,
                longitude: -73.99085595601952,
              },
              radius: 22000,
            },
          },
        },
      })
    )
  }),
]
