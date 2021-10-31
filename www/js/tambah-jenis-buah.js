function load_data_jenis_buah() {

  preload_div('tjb_blok_data');
  app.request.post(api_jenis_buah_all, { auth_key: localStorage.ls_id_user }, function (data, status, xhr) {
    console.log(data);
    console.log(status);
    // console.log(xhr);

    if (data['status'] === 'sukses') {
      var results = data['data'];
      var totalHalaman = data['meta']['totalHalaman'];
      var totalData = data['meta']['totalData'];
      $('#tjb_total_data').html(totalData);

      // mmbuat variabel untuk menampung data perulangan
      var hasil = "";

      // proses perulangan
      for (x in results) {
        // mmbuat variabel data dari backend
        var id = results[x].id_jenis_buah;
        var na = results[x].nama_jenis_buah;

        hasil += `<li>
          <a href="#" class="item-link item-content" data-kode="` + id + `" data-nama="` + na + `">
            <div class="item-media"><i class="f7-icons">doc_plaintext</i></div>
            <div class="item-inner">
                <div class="item-title">` + na + `</div>
            </div>
          </a>
        </li>`;
      }
      $('#tjb_blok_data').html('<ul>' + hasil + '</ul>');
    } else if (data['status'] === 'auth_salah') {
      app.dialog.alert('Terjadi '+data['message']+' Login Kembali!', 'Pemberitahuan', function(){
        click_logout();
      });
    } else {
      $('#tjb_blok_data').html('');
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

function load_data_jenis_buah_select() {
  app.request.post(api_jenis_buah_all, {auth_key: localStorage.ls_id_user}, function (data, status, xhr) {
    console.log(data);
    console.log(status);
    // console.log(xhr);

    if (data['status'] === 'sukses') {
      var results = data['data'];

      // mmbuat variabel untuk menampung data perulangan
      var hasil = "";

      // proses perulangan
      for (x in results) {
        // mmbuat variabel data dari backend
        var id = results[x].id_jenis_buah;
        var na = results[x].nama_jenis_buah;

        hasil += `<option value="` + id + `">` + na + `</option>`;
      }
      // perintah untuk meletakkan data yang diulang diletakan di blok data
      $('#tl_nama_jenis_buah').html('<option value="">--Pilih Jenis Buah--</option>' + hasil);
    }else if (data['status'] === 'auth_salah') {
      app.dialog.alert('Terjadi '+data['message']+' Login Kembali!', 'Pemberitahuan', function(){
        click_logout();
      });
    } else {
      $('#tl_nama_jenis_buah').html('<option value="">--Pilih Jenis Buah--</option>');
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