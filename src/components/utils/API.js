export const api = async (query) => {
  const accessKey = 'b8IMCyT1nssS_8XxZZoYaVYnSlYLKM1pcSrZ2KfYH0M';
  const url = 'https://api.unsplash.com/search/photos';

  try {
    const response = await fetch(
      `${url}?query=${query}&client_id=${
        import.meta.env.VITE_API_KEY
      }&per_page=30`
    );

    const images = await response.json();
    return images.results;
  } catch (error) {
    console.error('Error en la galería de imágenes', error);
  }
};
