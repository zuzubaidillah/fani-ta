// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
  initOnDeviceReady: true,
  view: {
    stackPages: true,
    pushState: true,
  }
});

// var url = "http://localhost/fani-ta/server-api/";
var url = "https://madrasatulquran.sch.id/ciganjur/";

var api_users_cek_data = url + "users/cek_data";
var api_users_register = url + "users/register";
var api_users_login = url + "users/login";
var api_data_pengguna = url + "users";
var api_pengguna_tambah = url + "users/tambah";
var api_pengguna_edit = url + "users/edit";
var api_pengguna_edit_proses = url + "users/edit_proses";
var api_pengguna_hapus = url + "users/hapus";
var api_pengguna_ganti_password = url + "users/ganti_password";

var api_lokasi_all = url + "lokasi/all";
var api_lokasi_cari = url + "lokasi/cari";
var api_lokasi_tambah = url + "lokasi/tambah";
var api_lokasi_id = url + "lokasi/id";

var api_pemilik_tanah_all = url + "pemilik_tanah/all";
var api_pemilik_tanah_cari = url + "pemilik_tanah/cari";
var api_pemilik_tanah_tambah = url + "pemilik_tanah/tambah";

var api_dusun_all = url + "dusun/all";
var api_dusun_cari = url + "dusun/cari";
var api_dusun_tambah = url + "dusun/tambah";

var api_jenis_buah_all = url + "jenis_buah/all";
var api_jenis_buah_cari = url + "jenis_buah/cari";
var api_jenis_buah_tambah = url + "jenis_buah/tambah";

var api_data_rekap_varietas = url + "rekap";


mapboxgl.accessToken = 'pk.eyJ1IjoiYXJpZnJhY2htYW4iLCJhIjoiY2sxNGdneWpvMGJ5YTNjcnRrNWgwa2N0biJ9.aCcIajF5mmbEHoZ8c0HxOA';
