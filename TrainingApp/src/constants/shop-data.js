const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

export const PRODUCTS = [
    {
        id: '0',
        name: 'Electronics',
        source: require('../img/electronics1.jpg'),
        items: [
            {
                id: '1',
                name: 'Phone 1',
                price: 233,
                oldPrice: 250,
                discount: 10,
                images: [
                    { id: 'tndfgbd', source: require('../img/Phone1.jpg') },
                    { id: 'sdfbfdsbgfsdbg', source: require('../img/Phone1.jpg') },
                    { id: 'yujmyu', source: require('../img/Phone1.jpg') },
                ],
                colors: [{ id: 'blue', name: 'blue' }, { id: 'grey', name: 'grey' }],
                description,
            },
            {
                id: '2',
                name: 'Phone 2',
                price: 233,
                oldPrice: 250,
                discount: 10,
                images: [{ id: 'vnhn', source: require('../img/Redmi.jpeg') }],
                colors: [{ id: 'blue', name: 'blue' }, { id: 'grey', name: 'grey' }],
                description,
            },
            {
                id: '3',
                name: 'Phone 3',
                price: 233,
                oldPrice: 250,
                discount: 10,
                images: [{ id: 'hnhnhn', source: require('../img/Phone1.jpg') }],
                colors: [{ id: 'blue', name: 'blue' }, { id: 'grey', name: 'grey' }],
                description,
            },
        ],
    },
    { id: '4', name: 'Cloth', source: require('../img/cloth.jpg') },
    {
        id: '5',
        name: 'Furniture',
        source: require('../img/furniture.jpg'),
    },
    {
        id: '6',
        name: 'Electronics',
        source: require('../img/electronics1.jpg'),
    },
    { id: '7', name: 'Cloth', source: require('../img/cloth.jpg') },
    { id: '8', name: 'Furniture', source: require('../img/furniture.jpg') },
];
