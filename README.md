# Difference Generator

[![My checks](https://github.com/dosh322/frontend-project-lvl2/workflows/on-push-checks/badge.svg)](https://github.com/dosh322/frontend-project-lvl2/actions/on-push-checks)
[![Maintainability](https://api.codeclimate.com/v1/badges/a0cbd2c8970c284cdda0/maintainability)](https://codeclimate.com/github/dosh322/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a0cbd2c8970c284cdda0/test_coverage)](https://codeclimate.com/github/dosh322/frontend-project-lvl2/test_coverage)

## Description
  Difference Generator is a CLI utility that allows you to display differences in two files to the console screen. The utility supports the following file extensions for comparison:
  - JSON
  - yaml
  
  Also gendiff utility supports following output formats:
  - stylish 
  - plain
  - JSON

## Installation
  :bangbang: Node.JS (version 14.0 or higher) required.
  To install this utility, you need to clone this repository to your machine using the following console command:
  ```
  git clone https://github.com/dosh322/frontend-project-lvl2
  ```
  Then you should go to utility directory (where you clone it) on your machine and use command:
  ```
  make install
  ```

## Usage
The command syntax is:
```
gendiff [options] <filepath1> <filepath2>
```
Available options:
- -V, --version - output the version number
- -f, --format - output format (stylish, plain, JSON). Default output format is stylish
- -h, --help - output usage infromation

### Examples
Comparing 2 JSON files with default output format
[![Default](https://asciinema.org/a/uywCDN1bLgMoYdcrYkZ5k9qsw.svg)](https://asciinema.org/a/uywCDN1bLgMoYdcrYkZ5k9qsw)
Comparing 2 yml files with *stylish* output format
[![Stylish](https://asciinema.org/a/SFgzJlGTX65bs1rk8ltR8jfyp.svg)](https://asciinema.org/a/SFgzJlGTX65bs1rk8ltR8jfyp)
Comparing 2 JSON files with *plain* output format
[![Plain](https://asciinema.org/a/0t4x0ePK6IgebeYthUf22jC0w.svg)](https://asciinema.org/a/0t4x0ePK6IgebeYthUf22jC0w)
Comparing 2 JSON files with *JSON* output format
[![JSON](https://asciinema.org/a/Pc3QPTZY1OdIVwMY0NvraW7bI.svg)](https://asciinema.org/a/Pc3QPTZY1OdIVwMY0NvraW7bI)
