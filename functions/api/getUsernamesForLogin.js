export interface Env {
  // Tambahkan environment variables jika perlu
  DB_URL?: string;
}

export async function onRequestPost(context: { env: Env }) {
  try {
    // Contoh data user - ganti dengan logic database kamu
    const users = [
      { username: 'admin', role: 'Administrator' },
      { username: 'kasir1', role: 'Kasir' },
      { username: 'kasir2', role: 'Kasir' },
    ];

    return new Response(JSON.stringify({ success: true, data: users }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: 'Gagal memuat daftar user' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
