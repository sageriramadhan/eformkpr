import axios from "axios"

export class LocationService {

    static getDaftarProvinsi(onComplete) {
        axios.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
            .then((response) => {
                console.log(response)
                let daftarProvinsi = response.data.provinsi
                onComplete(daftarProvinsi)
            })
            .catch((err) => console.log(err))
    }

    static getDaftarKabupatenKota(provinsiId, onComplete) {
        axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinsiId}`)
            .then((response) => {
                console.log(response)
                let daftarKabupatenKota = response.data.kota_kabupaten
                onComplete(daftarKabupatenKota)
            })
            .catch((err) => console.log(err))
    }

    static getDaftarKecamatan(kota_kabupatenId, onComplete) {
        axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${kota_kabupatenId}`)
            .then((response) => {
                console.log(response)
                let daftarKecamatan = response.data.kecamatan
                onComplete(daftarKecamatan)
            })
            .catch((err) => console.log(err))
    }

    static getDaftarKelurahan(kecamatanId, onComplete) {
        axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${kecamatanId}`)
            .then((response) => {
                console.log(response)
                let daftarKelurahan = response.data.kelurahan
                onComplete(daftarKelurahan)
            })
            .catch((err) => console.log(err))
    }

}