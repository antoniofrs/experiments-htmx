const createHomepageTemplate = () => /*html*/`
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script 
      src="https://unpkg.com/htmx.org@2.0.3"
      integrity="sha384-0895/pl2MU10Hqc6jd4RvrthNlDiE9U1tWmX7WRESftEDRosgxNsQG/Ze9YMRzHq"
      crossorigin="anonymous">
    </script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="book-list">
          <button hx-get="/books" hx-swap="outerHTML">Show buttons</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <form
                hx-on::after-request="document.querySelector('form').reset()"
                hx-on:click="console.log('test')"
                hx-post="/books"
                hx-target=".book-list ul"
                hx-swap="beforeend">
                    <input type="text" name="title" placeholder="title" required>
                    <input type="text" name="author" placeholder="author" required>
                    <button>Add book</button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;


export default createHomepageTemplate;