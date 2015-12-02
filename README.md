Introduce
---

Why I create this packages?

Because I want to control a server by remote with another computer, I doesn't like bash syntax.

So I can use js syntax to control.

Install
---

1. first clone this repo
2. run `PORT=port pm2 start index.js`

Usage
---

1. `telnet localhost port`
2. write you command

Build-in command
---

- ls {Function} return Array
- cwd {String} return current work directory, default is `'/'`
- cd {Function} return changed directory if current path or do nothing with wrong path

TODO
---
[] other bash command(like rm, touch)
[] support `.command`
[] support options
[] support tab, up, auto complete