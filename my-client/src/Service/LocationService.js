import axios from "axios"

export class LocationService {

    static async getDaftarProvinsi() {
        try {
            let response = await axios.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
            let daftarProvinsi = response.data.provinsi
            return daftarProvinsi
        } catch (error) {
            console.log("error", error)
        }
    }

    static async getDaftarKotaKabupaten(provinsiId) {
        try {
            let response = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinsiId}`)
            let daftarKotaKabupaten = response.data.kota_kabupaten
            return daftarKotaKabupaten
        } catch (error) {
            console.log("error", error)
        }
        // axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinsiId}`)
        //     .then((response) => {
        //         console.log(response)
        //         let daftarKabupatenKota = response.data.kota_kabupaten
        //         onComplete(daftarKabupatenKota)
        //     })
        //     .catch((err) => console.log(err))
    }

    static async getDaftarKecamatan(kota_kabupatenId) {

        try {
            let response = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${kota_kabupatenId}`)
            let daftarKecamatan = response.data.kecamatan
            return daftarKecamatan
        } catch (error) {
            console.log("error", error)
        }

        // axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${kota_kabupatenId}`)
        //     .then((response) => {
        //         console.log(response)
        //         let daftarKecamatan = response.data.kecamatan
        //         onComplete(daftarKecamatan)
        //     })
        //     .catch((err) => console.log(err))
    }

    static async getDaftarKelurahan(kecamatanId) {
        try {
            let response = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${kecamatanId}`)
            let daftarKelurahan = response.data.kelurahan
            return daftarKelurahan
        } catch (error) {
            console.log("error", error)
        }

        // axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${kecamatanId}`)
        //     .then((response) => {
        //         console.log(response)
        //         let daftarKelurahan = response.data.kelurahan
        //         onComplete(daftarKelurahan)
        //     })
        //     .catch((err) => console.log(err))
    }

}