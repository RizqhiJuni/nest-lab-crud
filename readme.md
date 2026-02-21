# Laboratorium Informatika, Universitas Muhammadiyah Makassar

<p align="center">
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>

---

# :books: Panduan Lengkap: Backend REST API dengan NestJS & Prisma

> Seri tutorial membangun backend REST API untuk aplikasi blog **"Median"** (klon sederhana Medium) menggunakan **NestJS**, **Prisma**, dan **PostgreSQL**.

---

## :clipboard: Daftar Chapter

| # | Chapter | Topik Utama | Link |
|---|---------|-------------|------|
| 1 | **Membangun REST API** | Setup NestJS, PostgreSQL, Prisma, CRUD Articles, Swagger | [:book: Buka Chapter 1](./chapter-1/README.md) |
| 2 | **Validasi Input & Error Handling** | ValidationPipe, class-validator, ParseIntPipe, Exception Filter | [:book: Buka Chapter 2](./chapter-2/README.md) |
| 3 | **Data Relasional & User Management** | Model User, Relasi One-to-Many, CRUD Users, Sembunyikan Password | [:book: Buka Chapter 3](./chapter-3/README.md) |
| 4 | **Authentication (JWT & Bcrypt)** | Passport, JWT Token, Auth Guard, Bcrypt Hashing, Swagger Auth | [:book: Buka Chapter 4](./chapter-4/README.md) |

---

## :dart: Apa yang Akan Kamu Bangun?

```
+----------------------------------------------+
|                MEDIAN API                     |
|                                               |
|   Articles   -> CRUD + Relasi ke Author       |
|   Users      -> CRUD + Password Hashing       |
|   Auth       -> Login + JWT Token             |
|   Swagger    -> Dokumentasi API Otomatis       |
|                                               |
|   Tech Stack:                                 |
|   - NestJS      (Framework)                   |
|   - Prisma      (ORM)                         |
|   - PostgreSQL  (Database)                    |
|   - Swagger     (API Docs)                    |
|   - Passport    (Authentication)              |
|   - Docker      (PostgreSQL Container)        |
+----------------------------------------------+
```

---

## :wrench: Teknologi yang Digunakan

| Teknologi | Deskripsi |
|-----------|-----------|
| **NestJS** | Framework backend Node.js |
| **Prisma** | ORM (Object-Relational Mapper) |
| **PostgreSQL** | Database relasional |
| **Swagger/OpenAPI** | Dokumentasi API otomatis |
| **TypeScript** | Bahasa pemrograman |
| **Docker** | Container untuk PostgreSQL |
| **Passport** | Library authentication |
| **JWT** | Token-based authentication |
| **Bcrypt** | Password hashing |
| **class-validator** | Validasi input |

---

## :hammer_and_wrench: Prasyarat

Sebelum memulai, pastikan kamu sudah menginstal:

| Software | Versi Minimum | Cek Instalasi |
|----------|---------------|---------------|
| **Node.js** | v14+ | `node --version` |
| **npm** | v6+ | `npm --version` |
| **Docker** | v20+ | `docker --version` |
| **VS Code** | Latest | - |

---

## :rocket: Cara Menggunakan Tutorial Ini

1. **Ikuti secara berurutan** - Setiap chapter membangun di atas chapter sebelumnya
2. **Ketik kode sendiri** - Jangan copy-paste, ketik ulang agar lebih paham
3. **Eksperimen** - Coba ubah kode dan lihat apa yang terjadi
4. **Baca komentar** - Setiap kode dilengkapi penjelasan di komentar

---

## :book: Ringkasan per Chapter

### Chapter 1: Membangun REST API
> Setup proyek dari nol hingga REST API yang berfungsi penuh dengan dokumentasi Swagger.

**Yang dipelajari:** NestJS CLI, Docker PostgreSQL, Prisma schema & migration, CRUD operations, Swagger/OpenAPI

### Chapter 2: Validasi Input & Error Handling
> Membuat API lebih robust dengan validasi input dan penanganan error yang baik.

**Yang dipelajari:** ValidationPipe, class-validator decorators, ParseIntPipe, Exception Filters, PrismaClientExceptionFilter

### Chapter 3: Data Relasional & User Management
> Menambahkan model User, relasi dengan Article, dan menyembunyikan data sensitif.

**Yang dipelajari:** Prisma relations, CRUD Users, ClassSerializerInterceptor, @Exclude decorator

### Chapter 4: Authentication (JWT & Bcrypt)
> Mengamankan API dengan sistem login dan token-based authentication.

**Yang dipelajari:** Passport.js, JWT, Auth Guards, bcrypt password hashing, Swagger Bearer Auth

---

## ✅ Progress Laporan Praktikum

> **Instruksi:** Gunakan tabel ini sebagai overview progress keseluruhan.
> Centang chapter yang sudah selesai dikerjakan. Detail checklist ada di masing-masing chapter.

### Chapter 1 — Membangun REST API
- [x] Persiapan lingkungan (Node.js, ~~Docker~~→PostgreSQL Native, VS Code)
- [x] Setup proyek NestJS
- [x] Setup database PostgreSQL (~~Docker~~ → PostgreSQL Native, konfigurasi sama)
- [x] Setup Prisma (install, init, schema)
- [x] Model data & migrasi database
- [x] Seed database dengan data awal
- [x] Membuat Prisma Service & Module
- [x] Setup Swagger
- [x] Implementasi CRUD Articles (6 endpoint)
- [x] Konfigurasi Swagger response types
- [x] **📋 [Lihat detail checklist →](./chapter-1/README.md#-laporan-praktikum--chapter-1)**

### Chapter 2 — Validasi Input & Error Handling
- [x] Validasi input dengan `ValidationPipe` & `class-validator`
- [x] Whitelist filtering (buang field yang tidak diinginkan)
- [x] Transformasi parameter URL dengan `ParseIntPipe`
- [x] Error handling dengan `NotFoundException`
- [x] Membuat `PrismaClientExceptionFilter` (P2002, P2025)
- [x] **📋 [Lihat detail checklist →](./chapter-2/README.md#-laporan-praktikum--chapter-2)**

### Chapter 3 — Data Relasional & User Management
- [x] Membuat model `User` dan relasi one-to-many dengan `Article`
- [x] Migrasi dan seed data user
- [x] Implementasi CRUD Users (5 endpoint)
- [x] Menyembunyikan password dengan `@Exclude()` & `ClassSerializerInterceptor`
- [x] Menampilkan relasi author di response Article
- [x] **📋 [Lihat detail checklist →](./chapter-3/README.md#-laporan-praktikum--chapter-3)**

### Chapter 4 — Authentication (JWT & Bcrypt)
- [ ] Setup Auth module dengan Passport & JWT
- [ ] Membuat endpoint `POST /auth/login`
- [ ] Membuat JWT Strategy & Auth Guard
- [ ] Melindungi endpoint Users dengan `@UseGuards`
- [ ] Integrasi Bearer Auth di Swagger
- [ ] Hashing password dengan bcrypt
- [ ] Update login untuk bcrypt
- [ ] **📋 [Lihat detail checklist →](./chapter-4/README.md#-laporan-praktikum--chapter-4)**

### 🏁 Status Keseluruhan
- [x] **Chapter 1 selesai**
- [x] **Chapter 2 selesai**
- [x] **Chapter 3 selesai**
- [ ] **Chapter 4 selesai**
- [ ] **🎓 SEMUA CHAPTER SELESAI — Praktikum telah diselesaikan seluruhnya**

| Item | Keterangan |
|------|------------|
| Nama | Rizqhi Juni Setiawan |
| NIM | 105841105621 |
| Tanggal Mulai | _________________________ |
| Tanggal Selesai | _________________________ |
| Tanda Tangan | _________________________ |

---

## :link: Referensi

- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Swagger/OpenAPI](https://swagger.io/)
- [Passport.js](https://www.passportjs.org/)

---

### ⚠️ Catatan Teknis (Database & Docker)
Karena instalasi **Docker Desktop** bikin laptop saya *blackscreen* terus dan harus di-*recovery*, untuk tugas ini saya tidak pakai Docker. Sebagai gantinya, saya pakai **PostgreSQL Native** yang diinstal langsung di Windows.

Semua konfigurasi (user, password, port, dan db name) **disamakan persis** sama instruksi di panduan, jadi tidak ada perubahan di sisi kode program.
