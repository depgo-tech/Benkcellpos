export interface Env {
  DB_URL?: string;
}

export async function onRequestPost(context: { env: Env }) {
  try {
    // Contoh data pengaturan - ganti dengan logic database kamu
    const pengaturan = {
      namaToko: 'Benk Cell',
      alamat: 'Jl. Contoh No. 123',
      telepon: '08123456789',
      logo: '/logo.png',
    };

    return new Response(JSON.stringify({ success: true, data: pengaturan }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: 'Gagal memuat pengaturan' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
