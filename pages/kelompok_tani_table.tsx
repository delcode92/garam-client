// pages/table.tsx

// modify nextjs code below , add edcent beautiful navbar for 3 tabs link

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/table.module.css';

const Table: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dataTable, setDataTable] = useState([{kecamatan:'', desa:'', nm_kelompok:'', nm_petambak:'', stat_kusuka:'', luas_lahan:'', tahun_bantuan:'', bukti:'', ket:''}]);
  const router = useRouter();

  useEffect(() => {
    // Cek Session
    var stat = localStorage.getItem('isLoggedIn');
    if(stat != 'true'){
      router.push('/login');
    }

    fetch("http://localhost:8080/get_petambak_datatable")
    .then(
      response => response.json()
      )
    .then(
        data => {
          setDataTable(data);
        }
       )
  }, [])
  
  const filteredData = dataTable.filter(item =>
    item.kecamatan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desa.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.nm_kelompok.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.nm_petambak.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.stat_kusuka.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.luas_lahan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tahun_bantuan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.ket.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // LOGOUT
  const handleLogout = () => {
    // Clear login session
    localStorage.removeItem('isLoggedIn');
    // Redirect to login page
    router.push('/login');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>tabel petambak</title>
      </Head>

      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <a href="/kelompok_tani" className={styles.tab}>Tambah Kelompok</a>
        <a href="/peserta_kelompok_tani" className={styles.tab}>Tambah Petambak</a>
        <a href="/input_rekap" className={styles.tab}>Tambah Rekap</a>
        <a href="/rekap_table" className={styles.tab}>Tabel Rekap</a>
        <a href="/kelompok_tani_table" className={styles.tab}>Tabel Petambak</a>
        <a href="/" className={styles.tab} onClick={handleLogout}>Logout</a>
      </nav>

      <h1 className={styles.heading}>Table Petambak</h1>
      <div className={styles.mgr_bottom}>

        <div className={styles.searchInline}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <a href="/peserta_kelompok_tani" target="_blank" rel="noopener noreferrer" className={styles.add_button}>tambah petani</a>

        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>No</th>
            <th>Kecamatan</th>
            <th>Desa</th>
            <th>Nama Kelompok</th>
            <th>Nama Petambak</th>
            <th>KUSUKA</th>
            <th>Luas Lahan (M2)</th>
            <th>Tahun Bantuan</th>
            <th>Bukti</th>
            <th>Keterangan</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
          filteredData.map((row, index) => (

            <tr key={index}>
              <td>{index+ 1}</td>
              <td>{row.kecamatan}</td>
              <td>{row.desa}</td>
              <td>{row.nm_kelompok}</td>
              <td>{row.nm_petambak}</td>
              <td>{row.stat_kusuka}</td>
              <td>{row.luas_lahan}</td>
              <td>{row.tahun_bantuan}</td>
              <td>
                <a target="_blank" href="#" rel="noopener noreferrer">lihat</a>
              </td>
              <td>{row.ket}</td>
              <td>
                <a target="_blank" href="#" rel="noopener noreferrer">edit</a>
                <span> | </span>
                <a target="_blank" href="#" rel="noopener noreferrer">delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
