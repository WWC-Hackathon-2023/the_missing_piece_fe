export function getRequestOptions(method, bodyData) {
  let requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method === "GET") {
    // If you're making a GET request, you don't need the "Content-Type" header, and you can remove it
    delete requestOptions.headers["Content-Type"];
  } else {
    // For other request methods like POST, PUT, etc., set the request body
    requestOptions.body = JSON.stringify(bodyData);
  }

  return requestOptions;
}

export const getPuzzlesByZipCode = async (zipCode) => {
  try {
    const requestBody = {
      zip_code: zipCode,
    };

    const response = await fetch("https://intense-peak-28151-a26a6d29b3a6.herokuapp.com/api/v1/users/1/puzzles", getRequestOptions("GET", requestBody));
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error.message;
  }
};

export const fetchDashboardData = async (userId) => {
  try {
    const response = await fetch(`https://intense-peak-28151-a26a6d29b3a6.herokuapp.com/api/v1/users/${userId}/dashboard`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error; // Re-lanza el error para que pueda ser manejado por el componente.
  }
};

export async function fetchUserPuzzles(userId) {
  const apiUrl = `https://intense-peak-28151-a26a6d29b3a6.herokuapp.com/api/v1/users/${userId}/puzzles`;

  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
}
// ----------- POST Puzzles - AddNewPuzzle -----------------------
export const postPuzzle = async (title, description, total_pieces, notes, puzzle_image_url) => {
  try {
    const requestBody = {
      title: title,
      description: description,
      total_pieces: total_pieces,
      notes: notes,
      puzzle_image_url: puzzle_image_url
    };

    const response = await fetch("https://intense-peak-28151-a26a6d29b3a6.herokuapp.com/api/v1/users/1/puzzles", getRequestOptions("POST", requestBody));

    if (response.status !== 201) {
      throw new Error(`Failed to post puzzle with status code: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error.message;
  }
};

export const patchLoan = (userId, loanId, action_type) => {
  const apiUrl = `https://intense-peak-28151-a26a6d29b3a6.herokuapp.com/api/v1/users/${userId}/loans/${loanId}`;

  // Datos que se enviarán en el cuerpo de la solicitud PATCH
  const data = {
    action_type: action_type,
  };

  return fetch(apiUrl, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al enviar la solicitud PATCH');
      }
      return response.json();
    });
};

//-------- POST /login ------ Login ------
export const loginUser = async (email, password) => {
  try {
    const requestBody = {
      email: email,
      password: password
    };

    const response = await fetch("https://intense-peak-28151-a26a6d29b3a6.herokuapp.com/api/v1/login", getRequestOptions("POST", requestBody));

    if (response.status !== 201) {
      throw new Error(`Failed to login user with status code: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("User successfully logged in:", responseData);
    return responseData;

  } catch (error) {
    console.error(error.message);
    throw error.message;
  }
};


// ----------- POST Users - Register New User -----------------------

export const registerUser = async (fullName, email, password, passwordConfirmation, zipCode, phoneNumber) => {
  try {
    const requestBody = {
      full_name: fullName,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
      zip_code: zipCode,
      phone_number: phoneNumber
    };

    const response = await fetch("https://intense-peak-28151-a26a6d29b3a6.herokuapp.com/api/v1/users", getRequestOptions("POST", requestBody));

    if (response.status !== 201) {
      throw new Error(`Failed to register user with status code: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error.message;
  }
};






























































































