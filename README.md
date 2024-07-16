# Distant Thunder
### An Electron application wrapper.

Electron applications generally fall into an MVC type architecture with
distinct client and server sides of the application. For the kind of projects
I'm working on (single player games mostly) it doesn't really make sense to
divide my application in half in this way.

With the Distant Thunder wrapper it's very simple to create what is essentially
a client side only application with Electron. Just create a symbolic link to
an `/application` directory in the root of this project to link it to the
client side app. As long as that directory contains a `configuration.json` and
a `manifest.json` everything should "Just Work"

See the `/example-application` for the minimum application structure.
