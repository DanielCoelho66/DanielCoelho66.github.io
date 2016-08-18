<!doctype html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My To Do List</title>
        <link rel="stylesheet" href="css/normalize.css"/>
        <link rel="stylesheet" href="css/styles.css"/>

        <script src="js/modernizr.js" type="text/javascript"></script>
        <script src="js/js.js" type="text/javascript"></script>
    </head>

    <body> 
        <header>  
            <h1>My To Do List &#x2713;</h1>
        </header>
        <div id="page">
            <nav>
            
            </nav>

            <section id="notes">
                <form>
                    <textarea name="note" placeholder="What do you have to do?"></textarea>
                    <input type="submit" value="Add" />
                </form>
            </section>

        </div>
        <footer>
            <p>&copy; 2014</p>
        </footer>

        <!--  Offline notification -->
        <section id="wrapper">   
            <section id="notification" class="online">
                <header>The Application is Online</header>
                <p>You should be able to use the app as normal</p>
            </section>
            <section id="checks">
                Checks: <span>0</span>
            </section>
            <section id="online">
                Online: <span>0</span>
            </section>
            <section id="offline">
                Offline: <span>0</span>
            </section>      
        </section>

    </body>
</html>
