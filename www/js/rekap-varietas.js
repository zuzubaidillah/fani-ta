function load_data_rekap() {
    // post ke server-api proses simpan data
    app.request.post(api_data_rekap_varietas, {auth_key:localStorage.ls_id_user}, function (data, status, xhr) {
        console.log(data);
        // console.log(status);
        // console.log(xhr);


        if (data['status'] === 'sukses') {
            var data_pengguna = '';
            if (data.data == 0) {
                // $('#html_data_pengguna').html(`<tr>
                //     <td colspan="6" class="text-align-center">Data Kosong</td>
                // </tr>`);
            } else {
                var thead = `<td style="min-width: 180px"></td>`;
                var tbody = '';
                for (const keyPengguna in data.data.dusun) {
                    thead += `<td style="min-width: 50px" class="text-align-center">${data.data.dusun[keyPengguna].nama_dusun}</td>`;
                }
                for (const keyDB in data.data.jenis_buah) {
                    tbody += `<tr><td>${data.data.jenis_buah[keyDB].nama_jenis_buah}</td>`;
                    for (const keyDBJml in data.data.jenis_buah[keyDB].jumlah) {
                        var jml = data.data.jenis_buah[keyDB].jumlah[keyDBJml].jml;
                        if (jml==0){
                            tbody += `<td class="text-align-center">${jml}</td>`;
                        }else{
                            tbody += `<td class="text-align-center"><b>${jml}</b></td>`;
                        }
                    }
                    tbody+=`</tr>`;
                }
                $('#html_thead_tr').html(thead);
                $('#html_data_rekap').html(tbody);
            }
        } else {
            // app.dialog.alert(data['message'], 'Pemberitahuan');
            // $('#html_data_pengguna').html(`<tr>
            // 	<td colspan="6">Data Kosong</td>
            // </tr>`);
        }

    }, function (xhr, status, message) {
        // console.log(xhr);
        // console.log(status);
        // console.log(message);

        // panggil fungsi untuk menampilkan error
        info_error(status);
    }, "json");
}
