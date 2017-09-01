// JavaScript Document
function initMap() {
        var uluru = {lat: 52.00898795, lng: 4.53362256};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }