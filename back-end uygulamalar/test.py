from django.test import TestCase
from django.test import Client

class Activity2Test(TestCase):
    def test_index_page(self):
        c = Client()
        response = c.get('/')
        self.assertIn(b'<title>Welcome to site</title>', response.content)
        self.assertIn(b'<h1>Welcome to site</h1>', response.content)

    def test_no_search(self):
        c = Client()
        response = c.get('/book-search')
        self.assertIn(b'<title>Search Results: </title>', response.content)
        self.assertIn(b'<h1>Search Results for <em></em></h1>', response.content)

    def test_empty_search(self):
        c = Client()
        response = c.get('/book-search?search=')
        self.assertIn(b'<title>Search Results: </title>', response.content)
        self.assertIn(b'<h1>Search Results for <em></em></h1>', response.content)

    def test_basic_search(self):
        c = Client()
        response = c.get('/book-search?search=Test Search')
        self.assertIn(b'<title>Search Results: Test Search</title>', response.content)
        self.assertIn(b'<h1>Search Results for <em>Test Search</em></h1>', response.content)

    def test_html_search(self):
        c = Client()
        response = c.get('/book-search?search=</html>')
        self.assertIn(b'<title>Search Results: &lt;/html&gt;</title>', response.content)
        self.assertIn(b'<h1>Search Results for <em>&lt;/html&gt;</em></h1>', response.content)

