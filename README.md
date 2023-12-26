
## Description

Simple frontend for finding and sorting through Warframe content.

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```

## Usage
Visiting http://localhost:3000/search allows you to query into the JSON data files using JMESPath.

Since the project is in its very early steps, the search is done through query parameters. This should be replaced by simpler UI.

For example, to select all untradeable shotgun mods:
```
// JMESPath query:
[?tradeable==false] | [?type==`Shotgun Mod`]

// URL:
http://localhost:3000/search?t=mods&q=%5B%3Ftradeable%3D%3Dfalse%5D%7C%5B%3Ftype%3D%3D%60Shotgun%20Mod%60%5D
```
