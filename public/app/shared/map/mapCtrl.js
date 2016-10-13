// INITILIZE CONTROLLER
// ============================================================
angular.module("burgessOrchards").controller("mapCtrl", function($scope) {

    // VARIABLES
    // ============================================================

    var myCenter = new google.maps.LatLng(40.4437133, -111.7839011);
    var markers = [];
    // FUNCTIONS
    // ============================================================

    var mapOptions = {
        zoom: 14,
        center: myCenter,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        draggable: true,
        scrollwheel: false,
        styles: [{
            "featureType": "landscape",
            "stylers": [{
                    "color": "#DCEDC8"
                }, {
                    "weight": 0.1
                }
                // { "saturation": -47 },
                // { "lightness": 73 }
            ]
        }]
    };

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        map: $scope.map,
        position: myCenter,
        title: "Burgess Orchards",
        content: "Burgess Orchards"
    });

    var infowindow = new google.maps.InfoWindow({
      content: "<h1>Burgess Orchards</h1>"
    });

    marker.addListener('click', function(){
      infowindow.open(map, marker);
    });



});
