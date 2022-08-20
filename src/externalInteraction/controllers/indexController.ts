const indexResponse = {
  message: 'Welcome!',
  links: [{
    "href": "/users",
    "rel": "users",
    "type" : "GET",
    "optionalAttributes": [ "name" ]
  }, {
    "href": "/users",
    "rel": "users",
    "type" : "POST",
    "attributes": [
      "name",
      "email"
    ]
  }]
};

export { indexResponse };
