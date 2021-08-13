## External API challenge

- set up basic structure of the app component.

- create header and button, and pass in getIp method to the button element
    - test and works!

- define getIp method

```
getIp = () => {
  fetch("https://ipapi.co/json/")
  .then(response => console.log(response.json()))
}
```
    - we are now able to see the promise logged int he console.

```
getIp = () => {
  fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(payload => console.log(payload))
}
```
    - we are now able to see the payload object in the console.

- pass in the setState to the payload. To reasign the value of the state object property ip to the payload.ip  (reponse)

- created a p tag to reande the state values for ip and currentLocation.

# Challenge
-   Create a React application that shows the user their current location and IP address
-   Use this API and documentation
# Stretch Challenge
- Use an external API and docs to create an application of your choice
-   Here is the Nasa API