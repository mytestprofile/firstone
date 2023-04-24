import image1 from './img/carousel1.jpg'
import image2 from './img/carousel2.jpg'
import image3 from './img/carousel3.jpg'

export const slide = [
    {id: '#slide-1', pic: image1,  title: 'some text', description: 'lorem10 nesnflkjse skejfbksef esfjbsekufgnef sekfseukgf'},
    {id: '#slide-2', pic: image2,  title: 'some text', description: 'lotfhfthfth nesnflkjse skejfbksef esfjbsekufgnef sekfseukg ertkelte e4te'},
    {id: '#slide-3', pic: image3,  title: 'some text', description: 'Q nesnflkjse skejfbksef esfjbsekufgnef sekfseukg'},
]

export type SlideType = {
    id: number
    pic: string
    title: string
    description: string
}
