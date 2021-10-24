function myMap() {
    var mapProp= {
    center:new google.maps.LatLng(40.1169,-3.7035),
    zoom:6,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    //marker 1
    const contentString =
        '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h2>Encuentro de yoga en el parque</h2>' +
            '<div class="date">' +
                "<p>23/10/2021 18:00</p>" +
            "</div>" +
            '<div class="descripcion">' +
                "<p>Esto es una descripción del evento</p>"+
            "</div>" +
        "</div>";

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    const marker = new google.maps.Marker({
        position: { lat: 41.3880, lng: 2.1847 },
        map: map,
        title: "Encuentro de yoga en el parque",
    });

    marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
    });


    //marker 2
    const contentString2 =
        '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h2>Cena con una nutricionista</h2>' +
            '<div class="date">' +
                "<p>25/10/2021 18:00</p>" +
            "</div>" +
            '<div class="descripcion">' +
                "<p>Esto es una descripción del evento</p>"+
            "</div>" +
        "</div>";

    const infowindow2 = new google.maps.InfoWindow({
        content: contentString2,
    });

    const marker2 = new google.maps.Marker({
        position: { lat: 41.6420, lng: -0.8800 },
        map: map,
        title: "Cena con una nutricionista",
    });

    marker2.addListener("click", () => {
        infowindow2.open({
          anchor: marker2,
          map,
          shouldFocus: false,
        });
    });


    //marker 3
    const contentString3 =
        '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h2>Fiesta flamenca - bailando tus prejuicios</h2>' +
            '<div class="date">' +
                "<p>26/10/2021 20:00</p>" +
            "</div>" +
            '<div class="descripcion">' +
                "<p>Espectaculo de baile + taller de baile por bulerías en la Carbonería</p>"+
            "</div>" +
        "</div>";

    const infowindow3 = new google.maps.InfoWindow({
        content: contentString3,
    });

    const marker3 = new google.maps.Marker({
        position: { lat: 37.3877, lng: -5.9872 },
        map: map,
        title: "Cena con una nutricionista",
    });

    marker3.addListener("click", () => {
        infowindow3.open({
          anchor: marker3,
          map,
          shouldFocus: false,
        });
    });


    //marker 4
    const contentString4 =
        '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h2>Club de lectura - La prisión de hielo</h2>' +
            '<div class="date">' +
                "<p>28/10/2021 17:00</p>" +
            "</div>" +
            '<div class="descripción">' +
                "<p>Esto es una descripcion del evento</p>"+
            "</div>" +
        "</div>";

    const infowindow4 = new google.maps.InfoWindow({
        content: contentString4,
    });

    const marker4 = new google.maps.Marker({
        position: { lat: 43.3677, lng: -8.4107 },
        map: map,
        title: "Cena con una nutricionista",
    });

    marker4.addListener("click", () => {
        infowindow4.open({
          anchor: marker4,
          map,
          shouldFocus: false,
        });
    });


    //marker 5
    const contentString5 =
        '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h2>Tomando el té con la psicóloga</h2>' +
            '<div class="date">' +
                "<p>30/10/2021 16:00</p>" +
            "</div>" +
            '<div class="descripcion">' +
                "<p>Esto es una descripción del evento</p>"+
            "</div>" +
        "</div>";

    const infowindow5 = new google.maps.InfoWindow({
        content: contentString5,
    });

    const marker5 = new google.maps.Marker({
        position: { lat: 40.3221, lng: -3.7348 },
        map: map,
        title: "Cena con una nutricionista",
    });

    marker5.addListener("click", () => {
        infowindow5.open({
          anchor: marker5,
          map,
          shouldFocus: false,
        });
    });

}
