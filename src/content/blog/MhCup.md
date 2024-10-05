---
title: Meta Hacker Cup 2024
description: My experiences
date: 2024-10-05
tag: Meta Hacker Cup, C++, MacOS
duration: 7 min
---

I got to know about it when I started cp.

Participated in the practice round 2024 for the first time.
- Faced many issues.
- Spent 5+ hours on just 2 problems because was not able to handle files and was new to system.
- After reading blogs and looking up the internet, here is a minimalist bash script to run your solution on MacOS (15.0+).

Usage :

- Create the following files :

``` bash
Directory/
├── Sol.cpp
├── input.txt
├── output.txt
└── run.sh
```
- Navigate to the directory.
paste the following code as given exactly (atleast the 4th line) in **_run.sh_**

``` bash
#!/bin/bash

echo "Compiling Sol.cpp ..."
g++ -Wall -Wl,-stack_size,20000000 -O2 -o Sol Sol.cpp

if [ $? -eq 0 ]; then
    echo "Compilation done!"
else
    echo "Compilation failed!"
    exit 1
fi

echo "Running Sol ..."
./Sol < input.txt > output.txt

if [ $? -eq 0 ]; then
    echo "Run done!"
    echo "Output:"
    cat output.txt
else
    echo "Execution failed!"
    exit 1
fi
```

paste the input into **_input.txt_** from the site.

in the proper directory, run :

```bash
chmod +x run.sh
```

and then :

```bash
./run.sh
```

save your time.
