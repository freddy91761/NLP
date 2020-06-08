    function handleSubmit(event) {
      event.preventDefault()
  
      //Get input from form
      var url = document.querySelectorAll('input[name=inputURL]')
  
      //check that input is a valid url
      if(Client.validURL(JSON.parse(JSON.stringify(url[0].value))))
      {
          console.log("::: Form Submitted :::")
          
          console.log("BUILDING REQUEST");
          console.log(JSON.stringify(url[0].value));
          fetch('http://localhost:3000/article', {
              method: 'POST',
              mode: 'cors',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({text: url[0].value})
          })
          .then(res => res.json())
          .then(function(res) {
              console.log(res); // for debugging
              document.querySelector('section.url-results #polarity').innerHTML = res.polarity
              document.querySelector('section.url-results #subjectivity').innerHTML = res.subjectivity
              document.querySelector('section.url-results #polarity_confidence').innerHTML = res.polarity_confidence
              document.querySelector('section.url-results #subjectivity_confidence').innerHTML = res.subjectivity_confidence
              document.querySelector('section.url-results #excerpt').innerHTML = res.text
          })
  
      }else{
          // Display error message if URL is not valide
          var error_sec = document.querySelector('section.errors');
          var error = document.querySelector('section.errors #error');
          error.innerHTML = "URL:\"" +JSON.stringify(url[0].value)+"\" is not valide. Please enter a valid url"
          error_sec.style.display = "block";
          
      } 
  }

  
  export { handleSubmit }




  //   if(formtext.length > 0){
  //       console.log("Text field is empty")
  //   }


  //   //Left it for a funny
  //   Client.textCheck(formText);
  //   console.log("Congrats, it worked");
  
  //   async function getResults(x) {
  //     console.log(x);
  //     try {
  //       //Eventually use logic to check if string is more/less than 240 characters
  //       if (typeof x === "string") {
  //         const settings = {
  //           method: "POST",
  //           mode: "cors",
  //           headers: {
  //             "Content-Type": "application/json;charset=utf-8",
  //           },
  //           body: JSON.stringify({ text: x }),
  //         };
  
  //         //POST request to server
  //         const res = await fetch("http://localhost:8000/api/", settings);
  //         return res;
  //       } else {
  //         alert("Please use less than 240 characters");
  //         throw "Please use less than 240 characters.";
  //       }
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   }
  //   getResults(formText)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Analysis received!");
  //       //Grab HTML Elements to be updated
  //       let polarityResults = document.getElementById("polarity");
  //       const subjectivityResults = document.getElementById("subjectivity");
  //       const textResults = document.getElementById("text");
  //       console.log(data);
  
  //       //Assign returned data to Elements
  //       polarityResults.innerHTML = data.polarity;
  //       subjectivityResults.innerHTML = data.subjectivity;
  //       textResults.innerHTML = data.text;
  //     });
  // }
  


