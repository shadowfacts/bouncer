# bouncer
A simple Node.js reverse-proxy using [substack/bouncy].

## Installation
Clone the repository:

```
git clone https://github.com/shadowfacts/bouncer.git
```

Use npm to install bouncy:

```
npm install
```

Create a `bouncer.json` file and add add whatever host/bounce pairs you want:

```
{
	"example.com": 2367,
	"test.example.com": 88,
	"example.net": 1337
}
```

Then, simply start the app with `node app.js`.


[substack/bouncy]: https://github.com/substack/bouncy