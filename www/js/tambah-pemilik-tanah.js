function load_data_pemilik_tanah() {

  preload_div('tpt_blok_data');
  app.request.post(api_pemilik_tanah_all, {auth_key: localStorage.ls_id_user}, function (data, status, xhr) {
    console.log(data);
    console.log(status);
    // console.log(xhr);

    if (data['status'] === 'sukses') {
      var results = data['data'];
      var totalHalaman = data['meta']['totalHalaman'];
      var totalData = data['meta']['totalData'];
      $('#tpt_total_data').html(totalData);

      // mmbuat variabel untuk menampung data perulangan
      var hasil = "";

      // proses perulangan
      for (x in results) {
        // mmbuat variabel data dari backend
        var id = results[x].id_pemilik_tanah;
        var na = results[x].nama_pemilik;
        var no = results[x].nomor_wa;

        hasil += `<li>
          <a href="#" class="item-link item-content" data-kode="` + id + `" data-nama="` + na + `" onclick="click_pilih_pemilik_tanah(this)">
            <div class="item-media"><i class="f7-icons">doc_plaintext</i></div>
            <div class="item-inner">
                <div class="item-title">` + na + `</div>
            </div>
          </a>
        </li>`;
      }
      $('#tpt_blok_data').html('<ul>' + hasil + '</ul>');
    }else{
      $('#tpt_blok_data').html('');
      app.dialog.alert(data['message'], 'Pemberitahuan');
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

function click_pilih_pemilik_tanah(el) {
  console.log(el);

  // mengambil nilai di attribute
  var id = $(el).data('kode');
  var na = $(el).data('nama');

  // meletakan nilainya di sebuah inputan
  $('#tl_kepemilikan_tanah').val(na);
  $('#tl_kepemilikan_tanah_id').val(id);

  // menambahkan nilai di attribute dengan data-kode
  $('#tl_kepemilikan_tanah').attr('data-kode', id);

  // melakukan router back maksudnya itu kembali ke view sebelumnya
  app.views.main.router.back();
}