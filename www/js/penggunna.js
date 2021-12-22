function click_proses_pengguna(id_user, jenis) {
    console.log(jenis, id_user);

    if (jenis == 'edit') {
        //  ketika jenis adalah edit

        app.request.post(api_pengguna_edit, {
            auth_key: localStorage.ls_id_user,
            id_user: id_user
        }, function (data, status, xhr) {
            console.log(data);
            console.log(status);
            // console.log(xhr);

            if (data['status'] === 'sukses') {
                var results = data['data'];

                var nama = data.data['nama'];
                var id_user = data.data['id_user'];
                var nomor_wa = data.data['nomor_wa'];
                var username = data.data['username'];
                var params = `?nama=${nama}&id_user=${id_user}&nomor_wa=${nomor_wa}&username=${username}`;
                console.log(params);
                app.views.main.router.navigate("/pengguna-edit/" + params);

            } else if (data['status'] === 'auth_salah') {
                app.dialog.alert('Terjadi ' + data['message'] + ' Login Kembali!', 'Pemberitahuan', function () {
                    click_logout();
                });
            } else {
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
    } else {
        //  ketika jenis adalah selain edit
        app.dialog.confirm('Yakin ingin hapus data?', 'Pertanyaan', function () {
            /*eksekusi*/
            app.request.post(api_pengguna_hapus, {
                auth_key: localStorage.ls_id_user,
                id_user: id_user
            }, function (data, status, xhr) {
                console.log(data);
                // console.log(status);
                // console.log(xhr);

                if (data['status'] === 'sukses') {
                    load_data_pengguna();
                } else {
                    app.dialog.alert(data['message'], 'Pemberitahuan');
                }

            }, function (xhr, status, message) {
                console.log(xhr);
                console.log(status);
                // console.log(message);

                // panggil fungsi untuk menampilkan error
                info_error(status);
            }, "json");
        });
    }
}

function load_data_pengguna() {
    // post ke server-api proses simpan data
    app.request.post(api_data_pengguna, {auth_key: localStorage.ls_id_user}, function (data, status, xhr) {
        console.log(data);
        // console.log(status);
        // console.log(xhr);

        if (data['status'] === 'sukses') {
            var no = 1;
            var data_pengguna = '';
            if (data.data == 0) {
                $('#html_data_pengguna').html(`<tr>
                    <td colspan="6" class="text-align-center">Data Kosong</td>
                </tr>`);
            } else {
                for (const keyPengguna in data.data) {
                    // console.log(data.data[keyPengguna].nama)
                    // console.log(data.data[keyPengguna]['nama'])
                    var nama = data.data[keyPengguna]['nama'];
                    var date_create = data.data[keyPengguna]['date_create'];
                    var id_user = data.data[keyPengguna]['id_user'];
                    var nomor_wa = data.data[keyPengguna]['nomor_wa'];
                    var username = data.data[keyPengguna]['username'];

                    data_pengguna += `<tr>
                        <td class="label-cell">${no}</td>
                        <td class="">${nama}</td>
                        <td class="">${nomor_wa}</td>
                        <td class="">${username}</td>
                        <td class="">${date_create}</td>
                        <td class="">
                            <button onclick="click_proses_pengguna('${id_user}','edit')" class="col button button-small button-fill color-blue">Edit</button>
                            <button onclick="click_proses_pengguna('${id_user}','hapus')" class="col button button-small button-fill color-red">Hapus</button>
                        </td>
                    </tr>`;
                    no++;
                }
                $('#html_data_pengguna').html(data_pengguna);
            }
        } else {
            app.dialog.alert(data['message'], 'Pemberitahuan');
            $('#html_data_pengguna').html(`<tr>
		    	<td colspan="6">Data Kosong</td>
		    </tr>`);
        }

    }, function (xhr, status, message) {
        // console.log(xhr);
        // console.log(status);
        // console.log(message);

        // panggil fungsi untuk menampilkan error
        info_error(status);
    }, "json");
}
