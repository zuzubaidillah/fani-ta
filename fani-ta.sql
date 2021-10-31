-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 31 Okt 2021 pada 12.48
-- Versi server: 10.4.20-MariaDB
-- Versi PHP: 7.4.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fani-ta`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `dusun`
--

CREATE TABLE `dusun` (
  `id_dusun` int(11) NOT NULL,
  `nama_dusun` varchar(55) NOT NULL,
  `nama_desa` enum('Gondangmanis') NOT NULL,
  `date_create` datetime NOT NULL DEFAULT current_timestamp(),
  `date_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `dusun`
--

INSERT INTO `dusun` (`id_dusun`, `nama_dusun`, `nama_desa`, `date_create`, `date_update`) VALUES
(1, 'dusun 1', 'Gondangmanis', '2021-10-29 09:38:51', '2021-10-29 09:38:51'),
(2, 'dusun 2', 'Gondangmanis', '2021-10-29 09:40:09', '2021-10-29 09:40:09'),
(3, 'dusun 3', 'Gondangmanis', '2021-10-29 09:40:09', '2021-10-29 09:40:09'),
(4, 'dusun 4', 'Gondangmanis', '2021-10-29 09:40:09', '2021-10-29 09:40:09'),
(5, 'dusun 5', 'Gondangmanis', '2021-10-29 09:40:09', '2021-10-29 09:40:09'),
(6, 'dusun 6', 'Gondangmanis', '2021-10-29 09:40:09', '2021-10-29 09:40:09'),
(7, 'dusun 7', 'Gondangmanis', '2021-10-29 09:40:09', '2021-10-29 09:40:09'),
(1564394187, 'dusun 8', 'Gondangmanis', '2021-10-31 06:06:34', '2021-10-31 06:30:10');

-- --------------------------------------------------------

--
-- Struktur dari tabel `jenis_buah`
--

CREATE TABLE `jenis_buah` (
  `id_jenis_buah` int(11) NOT NULL,
  `nama_jenis_buah` varchar(55) NOT NULL,
  `date_create` datetime NOT NULL DEFAULT current_timestamp(),
  `date_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `jenis_buah`
--

INSERT INTO `jenis_buah` (`id_jenis_buah`, `nama_jenis_buah`, `date_create`, `date_update`) VALUES
(44067177, 'King Rose Apple', '2021-10-31 06:59:49', '2021-10-31 06:59:49'),
(157245545, 'Si Loreng', '2021-10-31 07:00:46', '2021-10-31 07:00:46'),
(414810717, 'Bunga Cengkih', '2021-10-31 07:03:14', '2021-10-31 07:03:14'),
(512223747, 'jambu air', '2021-10-31 06:57:52', '2021-10-31 06:57:52'),
(545549738, 'Citra', '2021-10-31 06:58:58', '2021-10-31 06:58:58'),
(607767410, 'Bell Apple', '2021-10-31 07:00:33', '2021-10-31 07:00:33'),
(774730922, 'Black Kingkong', '2021-10-31 06:59:25', '2021-10-31 06:59:25'),
(975792157, 'Irung Petruk', '2021-10-31 06:59:32', '2021-10-31 06:59:32'),
(1106345398, 'Madu Deli Hijau', '2021-10-31 07:02:59', '2021-10-31 07:02:59'),
(1181021281, 'Green Rose Aplle', '2021-10-31 06:59:13', '2021-10-31 06:59:13'),
(1960865435, 'Ping Rose Apple', '2021-10-31 07:02:46', '2021-10-31 07:02:46'),
(1987514044, 'Cincalo', '2021-10-31 06:58:47', '2021-10-31 06:58:47');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pemilik_tanah`
--

CREATE TABLE `pemilik_tanah` (
  `id_pemilik_tanah` int(11) NOT NULL,
  `nama_pemilik` varchar(55) NOT NULL,
  `nomor_wa` varchar(15) NOT NULL,
  `date_create` datetime NOT NULL DEFAULT current_timestamp(),
  `date_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pemilik_tanah`
--

INSERT INTO `pemilik_tanah` (`id_pemilik_tanah`, `nama_pemilik`, `nomor_wa`, `date_create`, `date_update`) VALUES
(616418779, 'percobaan', '35643979367', '2021-10-31 04:53:07', '2021-10-31 04:53:07'),
(782464645, 'zuz', '6289676041493', '2021-10-30 19:58:28', '2021-10-30 19:58:28'),
(967605194, 'ubaidillah', '6289676041493', '2021-10-30 19:56:58', '2021-10-30 19:56:58'),
(1406798118, 'zaki', '62891332423', '2021-10-30 20:02:23', '2021-10-30 20:02:23'),
(1783581425, 'lukman', '84536435667', '2021-10-31 04:53:27', '2021-10-31 04:53:27');

-- --------------------------------------------------------

--
-- Struktur dari tabel `set_titik_lokasi`
--

CREATE TABLE `set_titik_lokasi` (
  `id_set_titik_lokasi` int(11) NOT NULL,
  `id_users` int(11) NOT NULL,
  `id_dusun` int(11) NOT NULL,
  `id_pemilik_tanah` int(11) NOT NULL,
  `nama_buah` enum('Jambu Darsono') NOT NULL,
  `id_jenis_buah` int(11) NOT NULL,
  `lintang_latitude` varchar(55) NOT NULL,
  `bujur_longtitude` varchar(55) NOT NULL,
  `keterangan` text NOT NULL,
  `date_create` datetime NOT NULL DEFAULT current_timestamp(),
  `date_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `set_titik_lokasi`
--

INSERT INTO `set_titik_lokasi` (`id_set_titik_lokasi`, `id_users`, `id_dusun`, `id_pemilik_tanah`, `nama_buah`, `id_jenis_buah`, `lintang_latitude`, `bujur_longtitude`, `keterangan`, `date_create`, `date_update`) VALUES
(1, 1427333319, 1, 1783581425, 'Jambu Darsono', 44067177, '-7.5815076311355085', '112.1346669914758', 'ada', '2021-10-29 09:41:32', '2021-10-31 13:59:33'),
(2, 1427333319, 1, 782464645, 'Jambu Darsono', 44067177, '-7.584864324066871', '112.12610574941726', 'ada', '2021-10-29 09:45:54', '2021-10-31 13:59:18'),
(3, 1427333319, 2, 782464645, 'Jambu Darsono', 44067177, '-7.587966279884384', '112.1255697064903', 'ada', '2021-10-29 09:45:54', '2021-10-31 13:59:08'),
(4, 1427333319, 2, 616418779, 'Jambu Darsono', 44067177, '-7.581659143425142', '112.12612148591865', 'ada', '2021-10-29 09:45:54', '2021-10-31 13:58:38'),
(5, 1427333319, 3, 1406798118, 'Jambu Darsono', 44067177, '-7.580488039485928', '112.13166500103335', 'ada', '2021-10-29 09:45:54', '2021-10-31 13:58:18'),
(6, 1427333319, 1, 1406798118, 'Jambu Darsono', 157245545, '-7.5827280802061665', '112.13372065176947', 'ada', '2021-10-29 09:45:54', '2021-10-31 13:56:58'),
(1070883615, 1427333319, 1564394187, 616418779, 'Jambu Darsono', 414810717, '-7.588829545970454', '112.13456495260277', 'aaa asdf sadfaswe fasffg f afgsg saf sdgdf asd', '2021-10-31 13:50:06', '2021-10-31 15:45:55');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `nama` varchar(55) NOT NULL,
  `username` varchar(55) NOT NULL,
  `password` text NOT NULL,
  `date_create` datetime NOT NULL DEFAULT current_timestamp(),
  `date_update` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `nomor_wa` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id_user`, `nama`, `username`, `password`, `date_create`, `date_update`, `nomor_wa`) VALUES
(1427333319, 'coba', 'coba', '$2y$10$glhpS3wT/AuSD4wnC3ay0u3aYwfawZS7Ifu/8RandOtQ7iYKQ0mUS', '2021-10-29 08:43:08', '2021-10-29 08:43:08', '6289676041493');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `dusun`
--
ALTER TABLE `dusun`
  ADD PRIMARY KEY (`id_dusun`);

--
-- Indeks untuk tabel `jenis_buah`
--
ALTER TABLE `jenis_buah`
  ADD PRIMARY KEY (`id_jenis_buah`);

--
-- Indeks untuk tabel `pemilik_tanah`
--
ALTER TABLE `pemilik_tanah`
  ADD PRIMARY KEY (`id_pemilik_tanah`);

--
-- Indeks untuk tabel `set_titik_lokasi`
--
ALTER TABLE `set_titik_lokasi`
  ADD PRIMARY KEY (`id_set_titik_lokasi`),
  ADD KEY `id_users` (`id_users`),
  ADD KEY `id_dusun` (`id_dusun`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
