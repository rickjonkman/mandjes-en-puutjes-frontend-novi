
export const dashboardItems = [
    {
        id: 1,
        subject: 'Boodschappen',
        title: 'Bekijk je nieuwe lijst',
        subTitle: 'Je hebt 10 producten op je nieuwe lijst',
        buttonText: 'Ga naar winkelmodus',
        endpoint: "/groceries/shopping-mode"
    },
    {
        id: 2,
        subject: 'Koken',
        title: 'Risotto',
        subTitle: 'Je verrassingsrecept van vandaag',
        buttonText: 'Ga naar verrassingrecept',
        endpoint: "/recipes/surprise"
    },
    {
        id: 3,
        subject: 'Boodschappen',
        title: 'Bekijk je laatste lijsten',
        subTitle: 'Zorg dat je geen boodschappen vergeet te noteren',
        buttonText: 'Ga naar lijsten',
        endpoint: "/groceries/lists"
    },
]