export async function fetchFromAPI(endpoint, fallback = []) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`
    );
    const data = await response.json();
    return data || fallback;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return fallback;
  }
}
