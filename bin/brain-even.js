#!/usr/bin/env node
import welcomeFn from '../src/cli.js';
import evenLogic from '../src/evenLogic.js';

const name = welcomeFn();
evenLogic(name);
