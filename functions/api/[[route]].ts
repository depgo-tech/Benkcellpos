export const onRequestPost = async (context) => {
  const { request, params } = context;
  const route = params.route;

  try {
    const body = await request.json().catch(() => ({}));

    // GET PENGATURAN
    if (route === 'getPengaturan') {
      return new Response(JSON.stringify(['Benk Cell', 'Jl. Contoh', '08123456789', 'Terima kasih!', '', '']), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // GET USERNAMES FOR LOGIN
    if (route === 'getUsernamesForLogin') {
      return new Response(JSON.stringify([
        { username: 'admin', full_name: 'Administrator' },
        { username: 'kasir1', full_name: 'Kasir 1' },
      ]), {
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

    // Default response untuk route lain
    return new Response(JSON.stringify({ error: 'Endpoint belum diimplementasi: ' + route }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
