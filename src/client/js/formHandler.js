function handleSubmit(event) {
    event.preventDefault();
  
    // check what text was put into the form field
    let formText = document.getElementById("name").value;
  
    //Left it for a funny
    Client.textCheck(formText);
    console.log("Congrats, it worked");
  
    async function getResults(x) {
      console.log(x);
      try {
        //Eventually use logic to check if string is more/less than 240 characters
        if (typeof x === "string") {
          const settings = {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({ text: x }),
          };
  
          //POST request to server
          const res = await fetch("http://localhost:8000/api/", settings);
          return res;
        } else {
          alert("Please use less than 240 characters");
          throw "Please use less than 240 characters.";
        }
      } catch (error) {
        console.log("error", error);
      }
    }
    getResults(formText)
      .then((res) => res.json())
      .then((data) => {
        console.log("Analysis received!");
        //Grab HTML Elements to be updated
        let polarityResults = document.getElementById("polarity");
        const subjectivityResults = document.getElementById("subjectivity");
        const textResults = document.getElementById("text");
        console.log(data);
  
        //Assign returned data to Elements
        polarityResults.innerHTML = data.polarity;
        subjectivityResults.innerHTML = data.subjectivity;
        textResults.innerHTML = data.text;
      });
  }
  
  export { handleSubmit };

// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value
    
//     Client.checkForName(formText)

//     console.log("::: Form Submitted :::")
//     fetch('http://localhost:8081/test')
//     .then(res => res.json())
//     .then(function(res) {
//         document.getElementById('results').innerHTML = res.message
//     })
// }

// export { handleSubmit }
