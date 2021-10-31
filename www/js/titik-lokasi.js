class Titiklokasi {
  constructor(mapp) {
    this.mapT = mapp;
  }

  tampilMap(data_titik_lokasi) {
    const stores = data_titik_lokasi;
    /**
     * Assign a unique id to each store. You'll use this `id`
     * later to associate each point on the map with a listing
     * in the sidebar.
     */
    stores.features.forEach((store, i) => {
      store.properties.id = i;
    });

    /**
     * Wait until the map loads to make changes to the this.mapT.
     */
    this.mapT.on('load', () => {
      /**
       * This is where your '.addLayer()' used to be, instead
       * add only the source without styling a layer
       */
      this.mapT.addSource('places', {
        'type': 'geojson',
        'data': stores
      });

      /**
       * Add all the things to the page:
       * - The location listings on the side of the page
       * - The markers onto the map
       */
      buildLocationList(stores, this.mapT);
      addMarkers(stores, this.mapT);

      // Geographic coordinates of the LineString
      const coordinates = stores.all_coordinates;

      console.log(coordinates);
      if (coordinates.length > 1) {
        // Create a 'LngLatBounds' with both corners at the first coordinate.
        const bounds = new mapboxgl.LngLatBounds(
          coordinates[0],
          coordinates[0]
        );
        console.log(bounds);

        // Extend the 'LngLatBounds' to include every coordinate in the bounds result.
        for (const coord of coordinates) {
          bounds.extend(coord);
          console.log(bounds.extend(coord));
        }

        this.mapT.fitBounds(bounds, {
          padding: 80
        });
      }
    });
  }

  mapp() {
    const mapTitikLokasi = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-77.034084142948, 38.909671288923],
      zoom: 11,
      scrollZoom: true
    });
    return mapTitikLokasi;
  }

}

// class Clasmap {
//   fungsi_map(){
//     const mapTitikLokasi = new mapboxgl.Map({
//       container: 'map',
//       style: 'mapbox://styles/mapbox/light-v10',
//       center: [-77.034084142948, 38.909671288923],
//       zoom: 11,
//       scrollZoom: true
//     });
//     return mapTitikLokasi;
//   }
// }


function click_search() {

  const popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();

  var form_cari = `<div class="subnavbar" style="height: 60px; background: white;">
      <form class="searchbar searchbar-init">
          <div class="searchbar-inner">
              <div onclick="click_cancel_cari()" style="width: 60px; height: auto; background-color: #0087fd;" >
                  <i style="left: calc(-4px + 8px + var(--f7-safe-area-left)); width: 24px; height: 24px; margin-left: 12px; margin-top: -12px;position: absolute; left: calc(-4px + var(--f7-safe-area-left)); top: 50%;background-position: center; background-repeat: no-repeat;" class="icon icon-back"></i>
              </div>
              <div class="searchbar-input-wrap">
                  <input autocomplete="off" onkeyup="ketikan_kata_kunci()" style="padding-left: 0px;" type="search" id="kata_kunci" placeholder="Search"/>
                  <span class="input-clear-button"></span>
              </div>
              <span class="searchbar-disable-button if-not-aurora">Cancel</span>
          </div>
      </form>
  </div>`;
  $('#html_heading').html(form_cari);
  setTimeout(() => {
    $('#kata_kunci').focus();
  }, 900);
}

function click_cancel_cari() {
  var h = `<a href="#" class="link back text-color-white" id="btnBackPeta">
          <i class="icon icon-back"></i>
        </a>
        <h1 style="font-size: 22px; margin: 0; font-weight: 400; line-height: 20px; padding: 20px 2px;">Our locations</h1>

        <a href="#" class="text-color-white" id="btnSearchPeta" onclick="click_search()">
            <i class="icon material-icons md-only">search</i>
        </a>`;
  $('#html_heading').html(h);
  $('#kata_kunci').val('');
  // load_lokasi_all();
}

// const mmap = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/light-v10',
//   center: [-77.034084142948, 38.909671288923],
//   zoom: 11,
//   scrollZoom: true
// });

function ketikan_kata_kunci() {
  var kata_kunci = $('#kata_kunci').val();
  console.log(kata_kunci);

  app.preloader.show();
  app.request.post(api_lokasi_cari + '?s=' + kata_kunci, {
    auth_key: localStorage.ls_id_user
  }, function (data, status, xhr) {
    console.log(data);
    console.log(status);
    // console.log(xhr);
    app.preloader.hide();
    if (data['status'] === 'sukses') {
      var hasil = data['data'];

      // intinya kalo diluarnegri itu dibalik dengan indonesia
      // center: [-77.034084142948, 38.909671288923],
      // center: [112.12977836991575, -7.5835187395641555],
      const mmap = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [112.12977836991575, -7.5835187395641555],
        zoom: 11,
        scrollZoom: true
      });
      var mapp = new Titiklokasi(mmap);
      mapp.tampilMap(hasil);
    } else if (data['status'] === 'auth_salah') {
      app.dialog.alert('Terjadi ' + data['message'] + ' Login Kembali!', 'Pemberitahuan', function () {
        click_logout();
      });
    } else {
      // app.dialog.alert(data['message'], 'Peringatan');
      var toast = app.toast.create({
        text: data['message'],
        position: 'bottom',
        horizontalPosition: 'right',
        closeTimeout: 2000,
      });
      toast.open();
      // app.views.main.router.back();
    }
  }, function (xhr, status, message) {
    // menampilkan jika ada error
    // console.log(xhr);
    console.log(status);
    console.log(message);

    // panggil fungsi untuk menampilkan error
    info_error(status);
  }, "json");
}

function load_lokasi_all(mapTitikLokasi) {
  console.log('load_lokasi_all');
  app.preloader.show();
  app.request.post(api_lokasi_all, {
    auth_key: localStorage.ls_id_user
  }, function (data, status, xhr) {
    console.log(data);
    console.log(status);
    // console.log(xhr);
    app.preloader.hide();
    if (data['status'] === 'sukses') {
      var hasil = data['data'];

      console.log(mapTitikLokasi);
      var mapp = new Titiklokasi(mapTitikLokasi);
      mapp.tampilMap(hasil);
    } else if (data['status'] === 'auth_salah') {
      app.dialog.alert('Terjadi ' + data['message'] + ' Login Kembali!', 'Pemberitahuan', function () {
        click_logout();
      });
    } else {
      app.dialog.alert(data['message'], 'Peringatan');
      app.views.main.router.back();
    }
  }, function (xhr, status, message) {
    // menampilkan jika ada error
    // console.log(xhr);
    console.log(status);
    console.log(message);

    // panggil fungsi untuk menampilkan error
    info_error(status);
  }, "json");
}