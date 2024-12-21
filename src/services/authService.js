export const getUserData = async (token) => {

    const response = await fetch("http://localhost:4000/user", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Error al obtener los datos del usuario.");
    }

    return await response.json();
};

