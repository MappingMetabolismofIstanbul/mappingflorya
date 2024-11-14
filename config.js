var config = {
    style: 'mapbox://styles/mozzsbae/cm0z3u8t601a601pmgr0xcnx9/draft',
    accessToken: 'pk.eyJ1IjoibW96enNiYWUiLCJhIjoiY2w5MWthdTJzMWJjYzNucXZ1aXAxaTZqbSJ9.KZfzyAD2N9C0odsgNUrqHA',
    showMarkers: true,
    markerColor: '#ff70ab',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Florya Plajı',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: '1',
            alignment: 'full',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/kcTkD1J/MEF-AAP-027-BAP-2024-11-14-15-13-59.jpg',
            description: 'The image was created for the project titled “Interactive Mapping of İstanbul’s Metabolism (MEF AAP 027) ” Funded by MEF University. Project Coordinator: Dr. Esra Sert, (2024-2025)',
            location: {
                center: [28.78876402043878, 40.970931535578806],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/svVw5dW/f1.jpg',
            description: '',
            location: {
                center: [28.78876402043878, 40.970931535578806],
                zoom: 7,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/Xswdgvm/f2.jpg',
            description: '',
            location: {
                center: [28.78876402043878, 40.970931535578806],
                zoom: 9,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '4',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/4T93q2p/MEF-AAP-027-BAP-2024-11-14-16-03-53.jpg',
            description: '',
            location: {
                center: [28.78876402043878, 40.970931535578806],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '5',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/wNff4k0/MEF-AAP-027-BAP-2024-11-14-16-07-55.jpg',
            description: '',
            location: {
                center: [28.78876402043878, 40.970931535578806],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
