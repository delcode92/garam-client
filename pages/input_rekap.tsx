// pages/kelompok_tani.tsx

import React, { useState } from 'react';
import styles from '../styles/kelompok_tani.module.css';

const InputRekap: React.FC = () => {
  const [kabupaten, setKabupaten] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [desa, setDesa] = useState('');
  const [luasLahan, setLuasLahan] = useState('');
  const [jumKelompok, setJumKelompok] = useState('');
  const [jumPetambak, setJumPetambak] = useState('');
  const [jumNonPetambak, setJumNonPetambak] = useState('');
  
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', { kabupaten, kecamatan, desa, luasLahan, jumKelompok, jumPetambak, jumNonPetambak});
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Form Kelompok Tani</h1>
      <form onSubmit={handleSubmit}>
        
        {/* KABUPATEN */}
        <div className={styles.formGroup}>
          <label htmlFor="kabupaten" className={styles.label}>Kabupaten:</label>
          <select id="kabupaten" value={kabupaten} onChange={(e) => setKabupaten(e.target.value)} className={styles.select}>
            <option value="">Select Kabupaten</option>
            <option value="lorem ipsum1">lorem ipsum1</option>
            <option value="lorem ipsum2">lorem ipsum2</option>
            <option value="lorem ipsum3">lorem ipsum3</option>
          </select>
        </div>
        
        {/* KECAMATAN */}
        <div className={styles.formGroup}>
          <label htmlFor="kecamatan" className={styles.label}>Kecamatan:</label>
          <select id="kecamatan" value={kecamatan} onChange={(e) => setKecamatan(e.target.value)} className={styles.select}>
            <option value="">Select Kecamatan</option>
            <option value="lorem ipsum1">lorem ipsum1</option>
            <option value="lorem ipsum2">lorem ipsum2</option>
            <option value="lorem ipsum3">lorem ipsum3</option>
          </select>
        </div>

        {/* DESA */}
        <div className={styles.formGroup}>
          <label htmlFor="desa" className={styles.label}>Desa:</label>
          <select id="desa" value={desa} onChange={(e) => setDesa(e.target.value)} className={styles.select}>
            <option value="">Select Desa</option>
            <option value="lorem ipsum1">lorem ipsum1</option>
            <option value="lorem ipsum2">lorem ipsum2</option>
            <option value="lorem ipsum3">lorem ipsum3</option>
          </select>
        </div>
        
        {/* LUAS LAHAN */}
        <div className={styles.formGroup}>
          <label htmlFor="luasLahan" className={styles.label}>Luas Lahan:</label>
          <input type="text" id="luasLahan" value={luasLahan} onChange={(e) => setLuasLahan(e.target.value)} className={styles.input} />
        </div>
       
        {/* JUMLAH KELOMPOK */}
        <div className={styles.formGroup}>
          <label htmlFor="jumKelompok" className={styles.label}>Nama Kelompok:</label>
          <input type="text" id="jumKelompok" value={jumKelompok} onChange={(e) => setJumKelompok(e.target.value)} className={styles.input} />
        </div>
        
        {/* JUMLAH PETAMBAK */}
        <div className={styles.formGroup}>
          <label htmlFor="jumPetambak" className={styles.label}>Nama Kelompok:</label>
          <input type="text" id="jumPetambak" value={jumPetambak} onChange={(e) => setJumPetambak(e.target.value)} className={styles.input} />
        </div>
        
        {/* JUMLAH NON PETAMBAK */}
        <div className={styles.formGroup}>
          <label htmlFor="jumNonPetambak" className={styles.label}>Nama Kelompok:</label>
          <input type="text" id="jumNonPetambak" value={jumNonPetambak} onChange={(e) => setJumNonPetambak(e.target.value)} className={styles.input} />
        </div>

        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
  

};

export default InputRekap;
