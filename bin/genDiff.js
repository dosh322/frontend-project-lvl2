#!/usr/bin/env node
import program from 'commander';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>');

program.parse(process.argv);

if (program.format === true) console.log('format');
else console.log(`check ${program.format}`);
