*****Exercise 0.4*****

sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Write a new note and press "Save"
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note (envía la nueva nota en formato JSON)
    activate server
    server-->>browser: Confirm that the note has been saved correctly
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes


    *****Exercise 0.5*****

    sequenceDiagram
    participant user
    participant browser
    participant server

    user->>: open aplicación SPA
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa (solicita el documento HTML)
    activate server
    server-->>browser: return the documento HTML in SPA
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css (solicita el archivo CSS)
    activate server
    server-->>browser: return file CSS
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js (solicita el archivo JavaScript de la SPA)
    activate server
    server-->>browser: return file o JavaScript
    deactivate server

    Note right of browser: The SPA JavaScript runs and handles the UI without reloading the page.

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json (solicita las notas almacenadas)
    activate server
    server-->>browser: return the notes in JSON
    deactivate server

    browser->>user: render the notes in the SPA



    *****Exercise 0.6*****

sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Write a new note and press "Save"
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note (envía la nueva nota en JSON)
    activate server
    server-->>browser: Confirm that the note has been saved correctly
    deactivate server

    Note right of browser: The SPA JavaScript runs and handles the UI without reloading the page.

    browser->>user: Displays the new note in the list without making another request to the server
