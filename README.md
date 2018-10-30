# Carda-Core
##Summary
Carda is a free open source case management software, built to be a standalone or PaaS deployment system, for managing cases or documents. The main tenents of Carda core are

>-Easy to Use
>-Open Source

##What is 'core'?

The idea of the core software is to introduce an open source software that people can add and change as they want

modules built on top of the core software may provide licencing and monetisation agreements however.

##How to use

Currently the method of authentication is by posting a new user object to 

/users/

with the following format

{
  "user": {
    "email": emailString,
    "password": passwordString
  }
}

which will return a object containing the new identity, and a login token 

##Timeline

The current timeline for development is as follows
- [] Create the API to link cases, users, and tasks together in mongodb
- [] Create a version one frontend using NextJS
- [] Build in authentication systems
- [] Create a deployment system to allow for custom internal integration
- [] Build in integration with external services such as IFTTT/Zapier or a custom workflow system
- [] \(Optional) Design a custom workflow system with these integrations to link to Carda cases

This is currently in development by a single junior developer with no experience in most of this tech stack, so any changes or suggestions would be greatly appreciated.


