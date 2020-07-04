export const formatRupiah = (angka, withPrefix = true) => {
  const numberString = angka
    .toString()
    .replace(/[^,\d]/g, '')
    .toString()
  const split = numberString.split(',')
  const sisa = split[0].length % 3
  let rupiah = split[0].substr(0, sisa)
  const ribuan = split[0].substr(sisa).match(/\d{3}/gi)

  if (ribuan) {
    const separator = sisa ? '.' : ''
    rupiah += separator + ribuan.join('.')
  }

  rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah
  return !withPrefix ? rupiah : rupiah ? 'Rp. ' + rupiah : ''
}
