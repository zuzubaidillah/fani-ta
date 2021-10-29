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
    path: '/pengguna/',
    componentUrl: './pages/pengguna.html',
  },
  {
    path: '/ganti-password/',
    componentUrl: './pages/ganti-password.html',
  },
  {
    path: '/riwayat-transaksi/',
    componentUrl: './pages/riwayat-transaksi.html',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
