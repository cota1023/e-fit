const products = [
    {
        id: '1',
        name: 'Barra Olímpica Zeus 20 kg',
        category: 'Barras Olímpicas',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/986/962/products/zeus1-4825a3bc8f42b8240a16083234446250-640-0.jpg',
        brand: 'Zeus',
        stock: 10,
        description: 'Barra olímpica de 20kg c/ rulemanes cromada',
        price: 35000

    },
    {
        id: '2',
        name: 'Discos Olímpicos de Funcicion 1.25 kg',
        category: 'Discos de fundición',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/986/962/products/1141-7caf3151034718034b16335508439225-640-0.jpg',
        brand: 'Genérico',
        stock: 30,
        description: 'Disco olímpico x 1,25kg color negro',
        price: 500

    },
    {
        id: '3',
        name: 'Speed Rope Aluminio',
        category: 'Sogas',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/986/962/products/15-speed-rope1-757cd31901df34939b16456207084526-640-0.jpg',
        brand: 'Genérico',
        stock: 50,
        description: 'Soga de aluminio color azul mango metálico',
        price: 4000

    }


]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}