# Conversor de algoritmos romanos v.1.0.2

**Esta biblioteca se destina à conversão de algaritmos romanos para números inteiros, números inteiros para algaritmos romanos.**
Na versão atual é capaz de converter números inteiros de 1 a 3999 para seus equivalentes em algaritmos romanos e vice-versa.

## Como instalar:

```shell

$  npm install algorithmconverter-cakeno

```

## Como utilizar:

#### Transformar números inteiros em algaritmos romanos
```node

> const intToRoman = require("algorithmconverter-cakeno");
> console.log(intToRoman("3999"))
> // returns "MMMCMXCIX"

```

#### Transformar algaritmos romanos em números inteiros
```node

> const romanToInt = require("algorithmconverter-cakeno");
> console.log(romanToInt("MMMCMXCIX"))
> // returns "3999"

```

## Roadmap oficial do projeto

#### versão 2.0.0 (sem previsão)
- implementação para converter números acima de 3999;

#### versão 1.0.0 (released)
- funcionalidades: conversão de números inteiros de 1 a 3999 para seus equivalentes em algaritmos romanos e vice-versa.
