var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  // About page
  {
    path: '/tentang/',
    url: './pages/tentang.html',
    name: 'tentang',
  },
  {
    path: '/titik-lokasi/',
    componentUrl: './pages/titik-lokasi.html',
  },
  {
    path: '/tambah-lokasi/',
    componentUrl: './pages/tambah-lokasi.html',
  },
  {
    path: '/tambah-pemilik-tanah/',
    componentUrl: './pages/tambah-pemilik-tanah.html',
  },
  {
    path: '/tambah-dusun/',
    componentUrl: './pages/tambah-dusun.html',
  },
  {
    path: '/tambah-jenis-buah/',
    componentUrl: './pages/tambah-jenis-buah.html',
  },
  {
    path: '/baca-keterangan/',
    componentUrl: './pages/baca-keterangan.html',
  },
  {
    path: '/pengguna/',
    componentUrl: './pages/pengguna.html',
  },
  {
    path: '/pengguna-tambah/',
    componentUrl: './pages/tambah-pengguna.html',
  },
  {
    path: '/pengguna-edit/',
    componentUrl: './pages/pengguna-edit.html',
  },
  {
    path: '/ganti-password/',
    componentUrl: './pages/ganti-password.html',
  },
  {
    path: '/rekap-varietas/',
    componentUrl: './pages/rekap-varietas.html',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
