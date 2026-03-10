import type { APIRoute } from 'astro';
import fs from 'node:fs/promises';

const filePath = 'src/data/messages.json';

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const name = String(form.get('name') ?? '').trim();
  const email = String(form.get('email') ?? '').trim();
  const message = String(form.get('message') ?? '').trim();

  if (!name || !email || !message) {
    return new Response('Invalid input', { status: 400 });
  }

  const current = JSON.parse(await fs.readFile(filePath, 'utf-8').catch(() => '[]'));
  current.push({ name, email, message, submittedAt: new Date().toISOString() });
  await fs.writeFile(filePath, JSON.stringify(current, null, 2));

  return redirect('/contact?sent=true');
};
