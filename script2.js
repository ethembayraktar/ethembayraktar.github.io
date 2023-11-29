
const mockyUrl = 'https://run.mocky.io/v3/857574e4-7613-465b-9e16-6d97046d7788';

// function to fetch data from mocky.io and fill the form options
function fillFormOptions() {
  fetch(mockyUrl).then(response => {
    // check if response is okay 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    }).then(data => {
      // access the cities and course types from the api's response data
      const cities = data.cities;
      const courseTypes = data.course_types;

      const citiesSelect = document.getElementById('city');
      const coursesSelect = document.getElementById('courseType');

      // fill the cities select element with options
      cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citiesSelect.appendChild(option);
      });

      // fill the courses select element with options
      courseTypes.forEach(courseType => {
        const option = document.createElement('option');
        option.value = courseType;
        option.textContent = courseType;
        coursesSelect.appendChild(option);
      });
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

fillFormOptions();

