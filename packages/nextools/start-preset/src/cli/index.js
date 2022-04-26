#!/usr/bin/env node

require('dotenv/config')

require('@babel/register')(require('@nextnextools/nextools-babel-config').babelConfigNodeRegister)

require('./cli')
