

export const fetchFeatured = () => (
  fetch('http://localhost:8080/featuredProjects', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then((response) => response.json())
      .then((responseJson) => {
        return responseJson
      })
      .catch((error) => {
        console.error(error);
      })
  );


  export const fetchCategory = (category) => {
    if(category === "all"){
      return (
        fetch('http://localhost:8080/projects', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        })
        .then((response) => response.json())
            .then((responseJson) => {
              return responseJson
            })
            .catch((error) => {
              console.error(error);
            })
          )
      } else {
        return (
          fetch('http://localhost:8080/projects/' + category, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          })
          .then((response) => response.json())
              .then((responseJson) => {
                return responseJson
              })
              .catch((error) => {
                console.error(error);
              })
           )
        }
    };
