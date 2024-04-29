import React from 'react';
import styles from '../styles/table.module.css';

const Table: React.FC = () => {
  
  const data = [
    {no:1, provinsi:'test', kabupaten:'test', kecamatan:'test', desa:'test', luasLahanTambak:123, jumlahKelompok:5, jumlahPetambak:10, jumlahNonPetambak:3},
    {no:2, provinsi:'test', kabupaten:'test', kecamatan:'test', desa:'test', luasLahanTambak:123, jumlahKelompok:5, jumlahPetambak:10, jumlahNonPetambak:3},
    {no:3, provinsi:'test', kabupaten:'test', kecamatan:'test', desa:'test', luasLahanTambak:123, jumlahKelompok:5, jumlahPetambak:10, jumlahNonPetambak:3},
    {no:4, provinsi:'test', kabupaten:'test', kecamatan:'test', desa:'test', luasLahanTambak:123, jumlahKelompok:5, jumlahPetambak:10, jumlahNonPetambak:3},
    {no:5, provinsi:'test', kabupaten:'test', kecamatan:'test', desa:'test', luasLahanTambak:123, jumlahKelompok:5, jumlahPetambak:10, jumlahNonPetambak:3},
  ];
  
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Table</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>No</th>
            <th>Provinsi</th>
            <th>Kabupaten</th>
            <th>Kecamatan</th>
            <th>Desa</th>
            <th>Luas Lahan Tambak (M2)</th>
            <th>Jumlah Kelompok</th>
            <th>Jumlah Petambak</th>
            <th>Jumlah Non Petambak</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.no}</td>
              <td>{row.provinsi}</td>
              <td>{row.kabupaten}</td>
              <td>{row.kecamatan}</td>
              <td>{row.desa}</td>
              <td>{row.luasLahanTambak}</td>
              <td>{row.jumlahKelompok}</td>
              <td>{row.jumlahPetambak}</td>
              <td>{row.jumlahNonPetambak}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
