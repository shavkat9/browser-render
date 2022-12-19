function Api (){
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response);
        if (!response.ok){
            throw Error("Error")
        }
        return response.json();

      }).then(data => {
        console.log(data.data)
        const html = data.data.map(user => {
            return "Name" = user.first_name
        })
        document
        .querySelector("#app")
        .insertAdjacentHTML('afterbegin ', '<h1>Hello Shavkat</h1>');

      }).catch(error => {
        console.log(error)
      })
}
Api();