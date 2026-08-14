import urllib.request
import urllib.error

url = 'https://formspree.io/f/xnpavnke'
req = urllib.request.Request(url, method='POST')
req.add_header('Accept', 'application/json')
req.add_header('Content-Type', 'application/x-www-form-urlencoded')

try:
    data = 'name=Test&email=test@example.com&message=hello'.encode('utf-8')
    with urllib.request.urlopen(req, data=data, timeout=15) as r:
        print('status', r.status)
        print(r.read().decode('utf-8'))
except urllib.error.HTTPError as e:
    print('HTTP', e.code)
    print(e.read().decode('utf-8'))
except Exception as e:
    print('ERR', e)
