# my-module

## Usage

```
npm i trozlabs/my-module
```

```
npx trozlabs/my-module
```

## Development

```bash
git clone https://github.com/trozlabs/my-module.git

cd my-module

npm install
```

### npx

run the npx script `my-module` (`bin.my-module` in `package.json`)

#### npx local
```bash
npx my-module
```

#### npx remote
```bash
npx trozlabs/my-module
```

<details><summary>output</summary>

```
running: /Users/trozdol/Development/my-module/bin/index.js version: 0.0.1
```
</details>

### npm test

```bash
npm test
```

<details><summary>output</summary>

```
> my-module@0.0.1 test
> node ./test


############################################
# myModule.version: 0.0.1
############################################
```

</details>

### npm run develop

```bash
npm run develop
```

<details><summary>output</summary>

```bash
> my-module@0.0.1 develop
> nodemon ./test

[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node ./test`

############################################
# myModule.version: 0.0.1
############################################

[nodemon] clean exit - waiting for changes before restart
```

</details>