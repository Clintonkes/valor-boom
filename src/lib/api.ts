const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8000').replace(/\/$/, '');

async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const detail = await res
      .json()
      .then((data) => data?.detail)
      .catch(() => null);
    throw new Error(
      typeof detail === 'string' ? detail : 'Something went wrong. Please try again.'
    );
  }

  return res.json() as Promise<T>;
}

export interface BookingRequest {
  address: string;
  name: string;
  email: string;
  phone: string;
  frequency?: string;
  preferred_date?: string;
  preferred_time?: string;
  service?: string;
  lawn_size?: string;
  notes?: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export function createBooking(data: BookingRequest) {
  return post('/api/bookings', data);
}

export function createContact(data: ContactRequest) {
  return post('/api/contacts', data);
}
