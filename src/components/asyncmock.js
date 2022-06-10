const products = [
    {
        id: '1',
        name: 'Barra Olímpica Zeus 20 kg',
        category: 'barras',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/986/962/products/zeus1-4825a3bc8f42b8240a16083234446250-640-0.jpg',
        brand: 'Zeus',
        stock: 10,
        description: 'Barra olímpica de 20kg c/ rulemanes cromada',
        price: 35000

    },
    {
        id: '2',
        name: 'Discos Olímpicos de Funcicion 1.25 kg',
        category: 'discos',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/986/962/products/1141-7caf3151034718034b16335508439225-640-0.jpg',
        brand: 'Genérico',
        stock: 30,
        description: 'Disco olímpico x 1,25kg color negro',
        price: 500

    },
    {
        id: '3',
        name: 'Speed Rope Aluminio',
        category: 'sogas',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/986/962/products/15-speed-rope1-757cd31901df34939b16456207084526-640-0.jpg',
        brand: 'Genérico',
        stock: 50,
        description: 'Soga de aluminio color azul mango metálico',
        price: 4000

    },
    {
        id: '4',
        name: 'DUMBBELLS HEXAGONALES DE CAUCHO EVERLAST',
        category: 'mancuernas',
        img: 'https://mirfitness.com.ar/wp-content/uploads/Mancuernas-hexagonales-caucho-10kg.jpg',
        brand: 'Everlast',
        stock: 50,
        description: 'Mancuernas hexagonales de caucho. (Se vende por unidad)',
        price: 15000

    },
    {
        id: '5',
        name: 'KETTLEBELL DE PU CROMADA MIR PRO',
        category: 'Kettlebell',
        img: 'https://mirfitness.com.ar/wp-content/uploads/KETTLEBELL-DE-PU-CROMADA-PRO.jpg',
        brand: 'MIR',
        stock: 50,
        description: 'Fabricadas en poliuretano de alta durabilidad. Mango de acero con acabado liso de hard chrome para un mayor confort durante el entrenamiento. El revestimiento de PU protege al máximo el suelo de tus instalaciones.',
        price: 8300

    },
    {
        id: '6',
        name: 'BARRA OLIMPICA W DE 1,20 MTS DE 10 KG',
        category: 'barras',
        img: 'https://mirfitness.com.ar/wp-content/uploads/BARRA-OLIMPICA-W-DE-120-MTS-DE-7-KG.jpg',
        brand: 'MIR',
        stock: 50,
        description: 'Barra olímpica de 10kg en "W"',
        price: 29000

    }


]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}

export const getProductsByName = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter((prod) => {
                if(prod.name.toString().toLowerCase().includes(name.toLowerCase()))
                return prod
            }))
        }, 2000)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 2000)
    })
}