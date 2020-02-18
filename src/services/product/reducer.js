const initialState = {
    products: [{
        id: 'CLASSIC_AD',
        price: 269.99,
        title: 'Classic Ad',
        description: 'Offers the most basic level of advertisement'
    }, {
        id: 'STANDOUT_AD',
        price: 322.99,
        title: 'Stand out Ad',
        description: 'Allows advertisers to use a company logo and use a longer presentation text'
    },
    {
        id: 'PREMIUM_AD',
        price: 394.99,
        title: 'Premium Ad',
        description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility'
    }]
};

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}