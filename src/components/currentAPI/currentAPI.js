const CurrentAPICall = async (location) => {
  try {
    const APIKey = "9e4064c990354f0ca0608f40c85284dc";
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}&units=metric`
    );

    if (result.status === 200) {
      return console.log(result.json());
    }

    return { success: false, error: result.statusText };
  } catch (ex) {
    return { success: false, error: ex.message };
  }
};

export default CurrentAPICall;
