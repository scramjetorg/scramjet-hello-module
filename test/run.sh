#!/bin/bash

echo Running tests....

set -e
cd $(dirname $0)/../

echo "Executing unit test"
npx nodeunit-tape test/unit/**.js

echo "Executing eslint"
npx eslint .

cd - 2>/dev/null
