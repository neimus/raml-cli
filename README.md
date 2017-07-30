# RAML CLI Tool

The command-line tool for interacting with RAML documents.

## Features

- **validate** - Validates a root RAML file against the specification.

## Installation

```
$ npm install -g api-console-cli
```

## Command Overview

### `raml-cli validate <file>`

The command can be used for validating the syntax of a RAML file as follows:

```
raml-cli validate examples/simple.raml
```

if it succeds you see something like the following:

```
Validating examples/simple.raml...
Valid!
```

otherwise it will fail with a message containing an explanation on the error.