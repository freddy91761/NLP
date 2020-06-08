function urlChecker(myURL) {
    console.log(":::Running the validURL function:::", myURL)

        var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");

            if(regex.test(myURL)){
        alert("A VALID URL");
            }else{
        alert("INVALUD URL ENTERED");
        }
    }


export { urlChecker }
