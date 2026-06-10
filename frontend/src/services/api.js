export const BASE_URL = "http://localhost:8000";

async function request(path, options = {}) {
  let response;

  try {
    response = await fetch(`${BASE_URL}${path}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });
  } catch {
    throw new Error("No se pudo conectar con el servidor.");
  }

  if (!response.ok) {
    let message = "No se pudo completar la solicitud.";

    try {
      const data = await response.json();
      if (typeof data.detail === "string") {
        message = data.detail;
      } else if (Array.isArray(data.detail)) {
        const details = data.detail
          .map((item) => item.msg)
          .filter(Boolean)
          .join(" ");

        if (details) {
          message = details;
        }
      }
    } catch {
      message = "No se pudo conectar con el servidor.";
    }

    throw new Error(message);
  }

  return response.json();
}

export function getMenu() {
  return request("/api/menu");
}

export function createReservation(reservation) {
  return request("/api/reservations", {
    method: "POST",
    body: JSON.stringify(reservation),
  });
}
