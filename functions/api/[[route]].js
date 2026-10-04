export async function onRequestPost(context) {
  const { request, params } = context;
  const route = params.route;

  try {
    const body = await request.json().catch(() => ({}));

    // GET PENGATURAN
    if (route === 'getPengaturan') {
      const pengaturan = ['Benk Cell', 'Jl. Contoh No. 123', '08123456789', 'Terima kasih!', '', ''];
      return new Response(JSON.stringify(pengaturan), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // GET USERNAMES FOR LOGIN
    if (route === 'getUsernamesForLogin') {
      const users = [
        { username: 'admin', full_name: 'Administrator' },
        { username: 'kasir1', full_name: 'Kasir 1' },
      ];
      return new Response(JSON.stringify(users), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // LOGIN
    if (route === 'login') {
      const { username, password } = body;
      if (username === 'admin' && password === 'admin123') {
        return new Response(JSON.stringify({ id: '1', username: 'admin', full_name: 'Administrator', role: 'admin' }), {
          headers: { 'Content-Type': 'application/json' },
        });
      }
      return new Response(JSON.stringify(null), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // GET PRODUK
    if (route === 'getProduk') {
      return new Response(JSON.stringify([]), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // GET DASHBOARD DATA
    if (route === 'getDashboardData') {
      return new Response(JSON.stringify({
        penjualanPeriode: 0,
        hppPeriode: 0,
        labaPeriode: 0,
        trxPeriode: 0,
        totalTrx: 0,
        totalProduk: 0,
        totalStok: 0,
        lowStok: [],
        chartLabels: [],
        chartData: [],
      }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // GET RIWAYAT TRANSAKSI
    if (route === 'getRiwayatTransaksi') {
      return new Response(JSON.stringify([]), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // GET GARANSI
    if (route === 'getGaransi') {
      return new Response(JSON.stringify([]), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // GET STOK LOG
    if (route === 'getStokLog') {
      return new Response(JSON.stringify([]), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // GET MITRA
    if (route === 'getMitra') {
      return new Response(JSON.stringify([]), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // GET KONSINYASI KELUAR
    if (route === 'getKonsinyasiKeluar') {
      return new Response(JSON.stringify([]), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ADD MITRA
    if (route === 'addMitra') {
      return new Response(JSON.stringify('Sukses'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // BAYAR HUTANG MITRA
    if (route === 'bayarHutangMitra') {
      return new Response(JSON.stringify('Sukses'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // LUNASI KONSINYASI KELUAR
    if (route === 'lunasiKonsinyasiKeluar') {
      return new Response(JSON.stringify('Sukses'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ADD KONSINYASI KELUAR
    if (route === 'addKonsinyasiKeluar') {
      return new Response(JSON.stringify('Sukses'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // SAVE PRODUK
    if (route === 'saveProduk') {
      return new Response(JSON.stringify('Sukses'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // SIMPAN TRANSAKSI
    if (route === 'simpanTransaksi') {
      return new Response(JSON.stringify({
        idTrx: 'TRX' + Date.now(),
        total: 0,
      }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // GET USERS
    if (route === 'getUsers') {
      return new Response(JSON.stringify([
        { id: '1', username: 'admin', full_name: 'Administrator', role: 'admin' },
      ]), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // RESET USER PASSWORD
    if (route === 'resetUserPassword') {
      return new Response(JSON.stringify('Sukses'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ADD USER
    if (route === 'addUser') {
      return new Response(JSON.stringify('Sukses'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // DELETE PRODUK
    if (route === 'deleteProduk') {
      return new Response(JSON.stringify('Sukses'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // DELETE USER
    if (route === 'deleteUser') {
      return new Response(JSON.stringify('Sukses'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // DELETE MITRA
    if (route === 'deleteMitra') {
      return new Response(JSON.stringify('Sukses'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // DELETE TRANSAKSI
    if (route === 'deleteTransaksi') {
      return new Response(JSON.stringify('Sukses'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // SAVE PENGATURAN
    if (route === 'savePengaturan') {
      return new Response(JSON.stringify('Sukses'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // BULK UPDATE HPP
    if (route === 'bulkUpdateHpp') {
      return new Response(JSON.stringify('Sukses'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ADD STOK MASUK
    if (route === 'addStokMasuk') {
      return new Response(JSON.stringify('Sukses'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ADD STOK KELUAR
    if (route === 'addStokKeluar') {
      return new Response(JSON.stringify('Sukses'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // SUBMIT OPNAME
    if (route === 'submitOpname') {
      return new Response(JSON.stringify('Sukses'), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // GET LAPORAN HARIAN
    if (route === 'getLaporanHarian') {
      return new Response(JSON.stringify({
        periode: { start: '', end: '' },
        jumlahTransaksi: 0,
        totalPenjualan: 0,
        totalHpp: 0,
        totalLaba: 0,
        rincianMetode: {},
      }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // ROUTE TIDAK DITEMUKAN
    return new Response(JSON.stringify({ error: 'Endpoint tidak ditemukan: ' + route }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
