1. You're building a high-throughput API for a cryptocurrency trading platform. For
this platform, time is extremely important because microseconds count when
processing high-volume trade orders. For communicating with the API, you want
to choose the verb that is fastest for read-only operations.
What verb should you choose for retrieving trade orders with the API server?
SELECT ONLY ONE
a. GET

2. You work for a Customer Relationship Management CRM company. The
company's clients gain CRM access through a RESTful API. The CRM allows
clients to add contact information for customers, prospects, and related persons
(e.g., virtual assistants or marketing directors). You want to choose an
appropriate API request path so clients can easily retrieve information for a
single contact while also being flexible for future software changes.
Which of the following API paths should you use?
SELECT ONLY ONE
b. /contacts/{contact_id}

3. You work for a large social media network, and you've been tasked with error
handling for the API. You're trying to decide on an appropriate error code for
authentication failures based on non-existent users and incorrect passwords.
You want to balance security against brute force attacks with providing
descriptive and true error codes.
Which HTTP error code(s) should you use to keep the system secure and still
report that an error occurred?
SELECT ONLY ONE
a. 404 if the user doesn't exist, and 403 if the password is wrong.

4. You're writing documentation for requesting information about a given user in
your system. Your system uses UUIDS (universally unique identifiers) as user
identifiers. In your documentation, you want to show an example.
True or false: You should put a fake UUID into the example code (instead of
just the text "UUID") as a placeholder.
SELECT ONLY ONE
a. TRUE
b. FALSE

5. You're building code to handle errors issued from a remote API server. The
response may or may not have an error.
How much work should your method, handleErrors(response), handle?
SELECT ONLY ONE
a. Check for the presence of an error. If it exists, then set a class property to the
error.
b. Check for the presence of an error. If it exists, throw an exception with the
error.
c. Check for the presence of an error. If it exists, set a class property to the error,
then throw an exception.

6. You have two classes: a database driver and an email driver. Both classes need
to set errors so that your front-end interface displays any errors that transpire
on your platform.
Which way should you implement this error handling?
SELECT ONLY ONE
a. Write the error handling the same way in both classes, but keep it to one line
of code.
b. Make a trait to handle errors so it'll collect errors in any class that uses it.
c. Make a driver-based error provider to handle errors in all classes that can
issue errors.

7. You need to name the private method in your class that handles looping through
eCommerce products to collect and parse data. That data gets stored in an array
and set as a class property.
Which of the following should you use to name your method?
SELECT ONLY ONE
a. loopThroughProductsAndParseData()
b. loopProductsAndParse()
c. parseDataForProducts()
d. parseDataForProductsAndSetArray()
8. There are multiple places in your codebase that need to access the database. To
access the database, you need to supply credentials. You want to balance
security with useability.
What strategy should you use to store and access these credentials?
SELECT ONLY ONE
a. Put them in the code that connects to the database for each place that needs
database access.
b. Put them in a configuration file, then include that file in the code everywhere
that needs to access the database.
c. Put the credentials into a configuration file, then load them with a database
service provider.
d. Put them in a .env file, load data from it into a configuration system, then
request the credentials from a database service provider.