import colors, { colorForId } from './colors'
import capitalize from 'lodash/capitalize'
import { loremIpsum } from 'lorem-ipsum'

export default function createProduct(id, numColors = 4) {
  const color = colorForId(id)
  const variants = [color, 'red', 'blue']
  const price = (id % 10) * 10 + 0.99

  return {
    id,
    url: `/p/${id}`,
    name: `Product ${id}`,
    price,
    priceText: `$${price}`,
    rating: (10 - (id % 10)) / 2.0,
    thumbnail: {
      src: `https://via.placeholder.com/400x400/${colors[color].background}/${
        colors[color].foreground
      }?text=${encodeURIComponent('Product ' + id)}`,
      alt: `Product ${id}`,
    },
    media: {
      full: variants.map(key => ({
        src: `https://via.placeholder.com/600x600/${colors[key].background}/${
          colors[key].foreground
        }?text=${encodeURIComponent('Product ' + id)}`,
        alt: `Product ${id}`,
        magnify: {
          height: 1200,
          width: 1200,
          src: `https://via.placeholder.com/1200x1200/${colors[key].background}/${
            colors[key].foreground
          }?text=${encodeURIComponent('Product ' + id)}`,
        },
      })),
      thumbnails: variants.map(key => ({
        src: `https://via.placeholder.com/300x300/${colors[key].background}/${
          colors[key].foreground
        }?text=${encodeURIComponent('Product ' + id)}`,
        alt: `Product ${id}`,
      })),
    },
    sizes: [
      { id: 'sm', text: 'SM' },
      { id: 'md', text: 'MD' },
      { id: 'lg', text: 'LG' },
      { id: 'xl', text: 'XL', disabled: true },
      { id: 'xxl', text: 'XXL' },
    ],
    description: loremIpsum({ count: 10 }),
    specs: loremIpsum({ count: 10 }),
    colors: Object.keys(colors)
      .slice(0, numColors)
      .map(name => ({
        text: capitalize(name),
        id: name,
        image: {
          src: `https://via.placeholder.com/48x48/${
            colors[name].background
          }?text=${encodeURIComponent(' ')}`,
          alt: name,
        },
        media: {
          full: [name, name, name].map(key => ({
            src: `https://via.placeholder.com/600x600/${colors[key].background}/${
              colors[key].foreground
            }?text=${encodeURIComponent('Product ' + id)}`,
            alt: `Product ${id}`,
            magnify: {
              height: 1200,
              width: 1200,
              src: `https://via.placeholder.com/1200x1200/${colors[key].background}/${
                colors[key].foreground
              }?text=${encodeURIComponent('Product ' + id)}`,
            },
          })),
          thumbnails: [name, name, name].map(key => ({
            src: `https://via.placeholder.com/400x400/${colors[key].background}/${
              colors[key].foreground
            }?text=${encodeURIComponent(`Product ${id}`)}`,
            alt: key,
          })),
          thumbnail: [name].map(key => ({
            src: `https://via.placeholder.com/400x400/${colors[key].background}/${
              colors[key].foreground
            }?text=${encodeURIComponent('Product ' + id)}`,
            alt: `Product ${id}`,
          }))[0],
        },
      })),
  }
}
