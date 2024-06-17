

export const FetchMenu = async () => {
    const response = await fetch('https://localhost:7153/api/Menu');
    const data = await response.json();
    return data;
  };
  
